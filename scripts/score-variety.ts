import { RNG } from "@ironarachne/rng";
import {
  getCultureNamePatternSet,
  getNameGeneratorForPatternSet,
} from "../src/index.js";
import { scoreNameVariety } from "../tools/name-variety-score.js";

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
    throw new Error(`category must be one of: ${VALID_CATEGORIES.join(", ")}.`);
  }

  return {
    culture,
    category: categoryInput as Category,
    count: countInput ? parsePositiveInt(countInput, "count") : 500,
    seed: seedInput ? parseSeed(seedInput) : Date.now(),
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
    const { score, breakdown } = scoreNameVariety(names);

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
