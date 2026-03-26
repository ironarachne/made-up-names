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

function printUsage(): void {
  console.error(
    [
      "Usage:",
      "  npm run generate:names -- <culture> <category> [count] [seed]",
      "",
      "Arguments:",
      "  culture   Culture name, quoted if it contains spaces",
      `  category  One of: ${VALID_CATEGORIES.join(", ")}`,
      "  count     Optional number of names to generate (default: 10)",
      "  seed      Optional numeric RNG seed (default: current timestamp)",
      "",
      "Examples:",
      "  npm run generate:names -- fantasy town 20",
      '  npm run generate:names -- "old worlder" male 12 42',
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
    count: countInput ? parsePositiveInt(countInput, "count") : 10,
    seed: seedInput ? parseSeed(seedInput) : Date.now(),
  };
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

    console.log(
      [
        `culture: ${options.culture}`,
        `category: ${options.category}`,
        `count: ${options.count}`,
        `seed: ${options.seed}`,
        "",
        ...generator.generate(options.count),
      ].join("\n"),
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Error: ${message}`);
    process.exit(1);
  }
}

main();
