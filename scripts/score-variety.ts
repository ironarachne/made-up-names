import { RNG } from "@ironarachne/rng";
import { getCultureNamePatternSet, getNameGeneratorForPatternSet } from "../src/index.ts";

const VALID_CATEGORIES = [
  "culture",
  "country",
  "family",
  "female",
  "male",
  "town",
] as const;

type Category = (typeof VALID_CATEGORIES)[number];

type CliOptions = {
  culture: string;
  category: Category;
  count: number;
  seed: number;
};

type ScoreBreakdown = {
  uniqueNames: number;
  structuralVariety: number;
  lengthVariety: number;
  prefixVariety: number;
  suffixVariety: number;
  shingleVariety: number;
};

function printUsage(): void {
  console.error(
    [
      "Usage:",
      "  npm run score:variety -- <culture> <category> [count] [seed]",
      "",
      "Arguments:",
      "  culture   Culture name, quoted if it contains spaces",
      `  category  One of: ${VALID_CATEGORIES.join(", ")}`,
      "  count     Optional sample size (default: 500)",
      "  seed      Optional numeric RNG seed (default: current timestamp)",
      "",
      "Examples:",
      "  npm run score:variety -- fantasy town 1000",
      '  npm run score:variety -- "old worlder" family 750 42',
    ].join("\n"),
  );
}

function parsePositiveInt(value: string, label: string): number {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error(`${label} must be a positive integer.`);
  }
  return parsed;
}

function parseSeed(value: string): number {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed)) {
    throw new Error("seed must be an integer.");
  }
  return parsed;
}

function parseArgs(argv: string[]): CliOptions {
  if (argv.includes("--help") || argv.includes("-h")) {
    printUsage();
    process.exit(0);
  }

  const [culture, categoryInput, countInput, seedInput] = argv;

  if (!culture || !categoryInput) {
    printUsage();
    throw new Error("culture and category are required.");
  }

  if (!VALID_CATEGORIES.includes(categoryInput as Category)) {
    throw new Error(
      `category must be one of: ${VALID_CATEGORIES.join(", ")}.`,
    );
  }

  return {
    culture,
    category: categoryInput as Category,
    count: countInput ? parsePositiveInt(countInput, "count") : 500,
    seed: seedInput ? parseSeed(seedInput) : Date.now(),
  };
}

function clamp(value: number): number {
  return Math.max(0, Math.min(1, value));
}

function normalizedDistinctCount(distinctCount: number, maxCount: number): number {
  if (maxCount <= 1) {
    return 0;
  }

  return clamp((distinctCount - 1) / (maxCount - 1));
}

function isVowel(char: string): boolean {
  return /[aeiouyáàâǎāéèêěēíìîǐīóòôǒōúùûǔūäëïöüæœãẽĩõũɑɔøåö]/i.test(
    char,
  );
}

function toSkeleton(name: string): string {
  return Array.from(name.toLowerCase())
    .map((char) => {
      if (/\p{L}/u.test(char)) {
        return isVowel(char) ? "V" : "C";
      }

      return char;
    })
    .join("");
}

function getShingles(name: string): string[] {
  const normalized = name.toLowerCase();
  const source = Array.from(normalized);
  const size = source.length >= 3 ? 3 : 2;

  if (source.length < size) {
    return [];
  }

  const shingles: string[] = [];
  for (let index = 0; index <= source.length - size; index++) {
    shingles.push(source.slice(index, index + size).join(""));
  }

  return shingles;
}

function scoreVariety(names: string[]): { score: number; breakdown: ScoreBreakdown } {
  if (names.length <= 1) {
    return {
      score: 0,
      breakdown: {
        uniqueNames: 0,
        structuralVariety: 0,
        lengthVariety: 0,
        prefixVariety: 0,
        suffixVariety: 0,
        shingleVariety: 0,
      },
    };
  }

  const normalized = names.map((name) => name.toLowerCase());
  const uniqueNames = new Set(normalized).size;
  const uniqueLengths = new Set(normalized.map((name) => name.length)).size;
  const uniqueSkeletons = new Set(normalized.map(toSkeleton)).size;
  const uniquePrefixes = new Set(
    normalized.map((name) => name.slice(0, Math.min(3, name.length))),
  ).size;
  const uniqueSuffixes = new Set(
    normalized.map((name) =>
      name.slice(Math.max(0, name.length - Math.min(3, name.length))),
    ),
  ).size;

  const shingles = normalized.flatMap(getShingles);
  const uniqueShingles = new Set(shingles).size;
  const shingleVariety =
    shingles.length === 0 ? 0 : clamp(uniqueShingles / shingles.length);

  const breakdown = {
    uniqueNames: normalizedDistinctCount(uniqueNames, normalized.length),
    structuralVariety: normalizedDistinctCount(uniqueSkeletons, normalized.length),
    lengthVariety: normalizedDistinctCount(
      uniqueLengths,
      Math.min(normalized.length, 12),
    ),
    prefixVariety: normalizedDistinctCount(uniquePrefixes, normalized.length),
    suffixVariety: normalizedDistinctCount(uniqueSuffixes, normalized.length),
    shingleVariety,
  } satisfies ScoreBreakdown;

  const composite =
    breakdown.uniqueNames * 0.4 +
    breakdown.structuralVariety * 0.15 +
    breakdown.lengthVariety * 0.1 +
    breakdown.prefixVariety * 0.1 +
    breakdown.suffixVariety * 0.1 +
    breakdown.shingleVariety * 0.15;

  return {
    score: Math.round(clamp(composite) * 1000),
    breakdown,
  };
}

function formatMetric(value: number): string {
  return value.toFixed(3);
}

function main(): void {
  try {
    const options = parseArgs(process.argv.slice(2));
    const patternSet = getCultureNamePatternSet(options.culture);
    const generator = getNameGeneratorForPatternSet(
      `${options.culture}_${options.category}`,
      patternSet[options.category],
      new RNG(options.seed),
    );

    const names = generator.generate(options.count);
    const { score, breakdown } = scoreVariety(names);

    console.log(
      [
        `culture: ${options.culture}`,
        `category: ${options.category}`,
        `count: ${options.count}`,
        `seed: ${options.seed}`,
        `score: ${score}`,
        "",
        "breakdown:",
        `  unique_names: ${formatMetric(breakdown.uniqueNames)}`,
        `  structural_variety: ${formatMetric(breakdown.structuralVariety)}`,
        `  length_variety: ${formatMetric(breakdown.lengthVariety)}`,
        `  prefix_variety: ${formatMetric(breakdown.prefixVariety)}`,
        `  suffix_variety: ${formatMetric(breakdown.suffixVariety)}`,
        `  shingle_variety: ${formatMetric(breakdown.shingleVariety)}`,
      ].join("\n"),
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Error: ${message}`);
    process.exit(1);
  }
}

main();
