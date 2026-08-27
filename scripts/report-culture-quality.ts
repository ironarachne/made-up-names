import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { RNG } from "@ironarachne/rng";
import {
  getCultureNamePatternSet,
  getNameGeneratorForPatternSet,
} from "../src/index.js";
import {
  CORPUS_STRUCTURE_CATEGORIES,
  type CorpusStructureCategory,
  corpusStructureWantsHelp,
  skeletonNgramCosine,
  suffixPoolMatchRate,
} from "../tools/corpus-structure-score.js";
import {
  balanceGeometricMean1000,
  balanceLabel,
  corpusJsonPathForCulture,
  corpusStructureComposite1000,
} from "../tools/culture-quality-report.js";
import { scoreNameVariety } from "../tools/name-variety-score.js";

type CorpusFile = {
  categories?: Record<string, string[]>;
};

type ReportCliOptions = {
  corpusPath: string;
  culture: string;
  count: number;
  seed: number;
};

type Row = {
  category: CorpusStructureCategory;
  variety: number;
  structure: number;
  balance: number;
  label: string;
  bigramCosine: number;
  trigramCosine: number;
  suffixK3: number;
};

function loadCorpusNames(
  path: string,
  category: CorpusStructureCategory,
): string[] {
  let raw: string;
  try {
    raw = readFileSync(path, "utf-8");
  } catch (err) {
    const code =
      err instanceof Error && "code" in err
        ? (err as NodeJS.ErrnoException).code
        : undefined;
    if (code === "ENOENT") {
      throw new Error(
        `Corpus file not found: ${path}\nExpected src/research/<culture-slug>-corpus.json (culture name → lowercase, spaces to hyphens).`,
      );
    }
    throw err;
  }
  const data = JSON.parse(raw) as CorpusFile;
  const list = data.categories?.[category];
  if (!list?.length) {
    throw new Error(
      `No names in corpus category "${category}" (file: ${path}).`,
    );
  }
  return list;
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

function parseReportArgs(argv: string[]): ReportCliOptions {
  const [culture, countInput, seedInput] = argv;

  if (!culture) {
    throw new Error("culture is required.");
  }

  return {
    corpusPath: corpusJsonPathForCulture(culture),
    culture,
    count: countInput ? parsePositiveInt(countInput, "count") : 500,
    seed: seedInput ? parseSeed(seedInput) : Date.now(),
  };
}

function printUsage(): void {
  console.error(
    [
      "Overall culture report: variety (diversity) vs corpus structure (fit), per category.",
      "",
      "Usage:",
      "  npm run report:culture-quality -- <culture> [count] [seed]",
      "",
      "  culture      Culture name (quoted if it contains spaces)",
      "  corpus file  src/research/<culture-slug>-corpus.json (spaces → hyphens, lowercased)",
      "  count        Sample size per category (default: 500)",
      "  seed         RNG seed (default: current timestamp)",
      "",
      "Uses one RNG across categories so draws are sequential and comparable.",
      "Variety score: 0–1000 (same weighting as score:variety).",
      "Structure score: 0–1000 (mean of skeleton bigram/trigram cosine and suffix k=3 match).",
      "Balance: geometric mean of variety and structure; label flags variety_heavy / balanced / structure_heavy.",
      "",
      "Examples:",
      '  npm run report:culture-quality -- "forest dweller" 400 7',
      "  npm run report:culture-quality -- fantasy 300 1",
    ].join("\n"),
  );
}

function formatInt(n: number): string {
  return String(Math.round(n));
}

function format3(n: number): string {
  return n.toFixed(3);
}

function main(): void {
  try {
    const argv = process.argv.slice(2);
    if (corpusStructureWantsHelp(argv)) {
      printUsage();
      process.exit(0);
    }

    const options = parseReportArgs(argv);
    const patternSet = getCultureNamePatternSet(options.culture);
    const rng = new RNG(options.seed);

    const rows: Row[] = [];

    for (const category of CORPUS_STRUCTURE_CATEGORIES) {
      const corpusNames = loadCorpusNames(options.corpusPath, category);
      const generator = getNameGeneratorForPatternSet(
        `${options.culture}_${category}_quality`,
        patternSet[category],
        rng,
      );
      const names = generator.generate(options.count);

      const { score: variety } = scoreNameVariety(names);
      const bi = skeletonNgramCosine(corpusNames, names, 2);
      const tri = skeletonNgramCosine(corpusNames, names, 3);
      const suf = suffixPoolMatchRate(corpusNames, names, 3);
      const structure = corpusStructureComposite1000(bi, tri, suf);
      const balance = balanceGeometricMean1000(variety, structure);
      const label = balanceLabel(variety, structure);

      rows.push({
        category,
        variety,
        structure,
        balance,
        label,
        bigramCosine: bi,
        trigramCosine: tri,
        suffixK3: suf,
      });
    }

    const avgVariety = rows.reduce((s, r) => s + r.variety, 0) / rows.length;
    const avgStructure =
      rows.reduce((s, r) => s + r.structure, 0) / rows.length;
    const avgBalance = rows.reduce((s, r) => s + r.balance, 0) / rows.length;

    const lines: string[] = [
      `culture: ${options.culture}`,
      `corpus: ${options.corpusPath}`,
      `count_per_category: ${options.count}`,
      `seed: ${options.seed}`,
      "",
      "Per category (same generated sample used for both variety and structure):",
      "",
      [
        "category".padEnd(10),
        "variety".padStart(8),
        "struct".padStart(8),
        "balance".padStart(8),
        "label".padStart(16),
        "bi_cos".padStart(8),
        "tri_cos".padStart(8),
        "suf_k3".padStart(8),
      ].join(" "),
      "-".repeat(74),
    ];

    for (const r of rows) {
      lines.push(
        [
          r.category.padEnd(10),
          formatInt(r.variety).padStart(8),
          formatInt(r.structure).padStart(8),
          formatInt(r.balance).padStart(8),
          r.label.padStart(16),
          format3(r.bigramCosine).padStart(8),
          format3(r.trigramCosine).padStart(8),
          format3(r.suffixK3).padStart(8),
        ].join(" "),
      );
    }

    lines.push(
      "-".repeat(74),
      [
        "mean".padEnd(10),
        formatInt(avgVariety).padStart(8),
        formatInt(avgStructure).padStart(8),
        formatInt(avgBalance).padStart(8),
        balanceLabel(Math.round(avgVariety), Math.round(avgStructure)).padStart(
          16,
        ),
        "".padStart(8),
        "".padStart(8),
        "".padStart(8),
      ].join(" "),
      "",
      "Summary:",
      "  Higher variety → more unique / diverse names in the sample.",
      "  Higher structure → closer V/C skeleton n-gram overlap with the corpus (heuristic).",
      "  Balance (geometric mean) rewards doing well on both; label compares the two axes.",
    );

    console.log(lines.join("\n"));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Error: ${message}`);
    if (
      error instanceof Error &&
      error.message.includes("culture is required")
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
