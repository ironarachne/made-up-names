import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { RNG } from "@ironarachne/rng";
import {
  CORPUS_STRUCTURE_CATEGORIES,
  type CorpusStructureCategory,
  corpusStructureWantsHelp,
  meanLength,
  parseCorpusStructureCliArgs,
  skeletonNgramCosine,
  suffixPoolMatchRate,
} from "../src/corpus-structure-score.ts";
import {
  getCultureNamePatternSet,
  getNameGeneratorForPatternSet,
} from "../src/index.ts";

type CorpusFile = {
  categories?: Record<string, string[]>;
};

function loadCorpusNames(
  path: string,
  category: CorpusStructureCategory,
): string[] {
  const raw = readFileSync(path, "utf-8");
  const data = JSON.parse(raw) as CorpusFile;
  const list = data.categories?.[category];
  if (!list?.length) {
    throw new Error(
      `No names in corpus category "${category}" (file: ${path}).`,
    );
  }
  return list;
}

function printUsage(): void {
  console.error(
    [
      "Compare generated names to a corpus using grapheme V/C skeletons (heuristic, not IPA).",
      "",
      "Usage:",
      "  npm run score:corpus-structure -- [corpus.json] <culture> <category> [count] [seed]",
      "",
      "Arguments:",
      "  corpus.json  Optional path to corpus JSON (categories.* string arrays).",
      "               Default: src/research/forest-dweller-corpus.json (from cwd)",
      "  culture      Culture name for generation (quoted if it contains spaces)",
      `  category     One of: ${CORPUS_STRUCTURE_CATEGORIES.join(", ")}`,
      "  count        Optional sample size (default: 500)",
      "  seed         Optional RNG seed (default: current timestamp)",
      "",
      "Metrics:",
      "  skeleton_bigram_cosine    Cosine similarity of V/C bigram counts",
      "  skeleton_trigram_cosine   Same for trigrams",
      "  skeleton_suffix_match_k3  Share of generated skeletons whose last 3 symbols",
      "                            match a corpus skeleton suffix",
      "",
      "Examples:",
      '  npm run score:corpus-structure -- "forest dweller" female 400 1',
      "  npm run score:corpus-structure -- ./src/research/forest-dweller-corpus.json fantasy male 200 42",
    ].join("\n"),
  );
}

function formatMetric(value: number): string {
  return value.toFixed(3);
}

function main(): void {
  try {
    const argv = process.argv.slice(2);
    if (corpusStructureWantsHelp(argv)) {
      printUsage();
      process.exit(0);
    }

    const options = parseCorpusStructureCliArgs(argv);
    const corpusNames = loadCorpusNames(options.corpusPath, options.category);
    const patternSet = getCultureNamePatternSet(options.culture);
    const generator = getNameGeneratorForPatternSet(
      `${options.culture}_${options.category}_corpus_score`,
      patternSet[options.category],
      new RNG(options.seed),
    );
    const generated = generator.generate(options.count);

    const bi = skeletonNgramCosine(corpusNames, generated, 2);
    const tri = skeletonNgramCosine(corpusNames, generated, 3);
    const suf = suffixPoolMatchRate(corpusNames, generated, 3);
    const lenC = meanLength(corpusNames);
    const lenG = meanLength(generated);

    console.log(
      [
        `corpus: ${options.corpusPath}`,
        `culture: ${options.culture}`,
        `category: ${options.category}`,
        `corpus_names: ${corpusNames.length}`,
        `generated_count: ${options.count}`,
        `seed: ${options.seed}`,
        "",
        `mean_grapheme_length_corpus: ${formatMetric(lenC)}`,
        `mean_grapheme_length_generated: ${formatMetric(lenG)}`,
        "",
        `skeleton_bigram_cosine: ${formatMetric(bi)}`,
        `skeleton_trigram_cosine: ${formatMetric(tri)}`,
        `skeleton_suffix_match_k3: ${formatMetric(suf)}`,
      ].join("\n"),
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Error: ${message}`);
    if (
      error instanceof Error &&
      error.message.includes("culture and category are required")
    ) {
      printUsage();
    }
    process.exit(1);
  }
}

function isMainModule(): boolean {
  const entry = process.argv[1];
  if (!entry) {
    return false;
  }
  try {
    return fileURLToPath(import.meta.url) === resolve(entry);
  } catch {
    return false;
  }
}

if (isMainModule()) {
  main();
}
