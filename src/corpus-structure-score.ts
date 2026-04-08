import { resolve } from "node:path";

export const CORPUS_STRUCTURE_CATEGORIES = [
  "culture",
  "country",
  "family",
  "female",
  "male",
  "town",
] as const;

export type CorpusStructureCategory =
  (typeof CORPUS_STRUCTURE_CATEGORIES)[number];

export type CorpusStructureCliOptions = {
  corpusPath: string;
  culture: string;
  category: CorpusStructureCategory;
  count: number;
  seed: number;
};

function isVowel(char: string): boolean {
  return /[aeiouyáàâǎāéèêěēíìîǐīóòôǒōúùûǔūäëïöüæœãẽĩõũɑɔøåö]/i.test(char);
}

/** Maps letters to V/C; non-letters dropped. ASCII heuristic, not IPA. */
export function toSkeleton(name: string): string {
  return Array.from(name.toLowerCase())
    .filter((char) => /\p{L}/u.test(char))
    .map((char) => (isVowel(char) ? "V" : "C"))
    .join("");
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

export function ngramCounts(strings: string[], n: number): Map<string, number> {
  const map = new Map<string, number>();
  for (const s of strings) {
    if (s.length < n) {
      continue;
    }
    for (let i = 0; i <= s.length - n; i++) {
      const g = s.slice(i, i + n);
      map.set(g, (map.get(g) ?? 0) + 1);
    }
  }
  return map;
}

/** Cosine similarity in [0, 1] for two sparse count maps (treat missing as 0). */
export function cosineSimilarity(
  a: Map<string, number>,
  b: Map<string, number>,
): number {
  let dot = 0;
  let na = 0;
  let nb = 0;
  for (const v of a.values()) {
    na += v * v;
  }
  for (const v of b.values()) {
    nb += v * v;
  }
  if (na === 0 || nb === 0) {
    return 0;
  }
  for (const [key, av] of a) {
    const bv = b.get(key);
    if (bv !== undefined) {
      dot += av * bv;
    }
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

export function skeletonNgramCosine(
  referenceNames: string[],
  sampleNames: string[],
  n: number,
): number {
  const refSkels = referenceNames.map(toSkeleton).filter((s) => s.length > 0);
  const genSkels = sampleNames.map(toSkeleton).filter((s) => s.length > 0);
  return cosineSimilarity(ngramCounts(refSkels, n), ngramCounts(genSkels, n));
}

/** Fraction of sample skeletons whose last k symbols appear as a suffix of some reference skeleton. */
export function suffixPoolMatchRate(
  referenceNames: string[],
  sampleNames: string[],
  k: number,
): number {
  if (k <= 0) {
    return 0;
  }
  const refSuffixes = new Set<string>();
  for (const name of referenceNames) {
    const s = toSkeleton(name);
    if (s.length >= k) {
      refSuffixes.add(s.slice(-k));
    }
  }
  if (refSuffixes.size === 0) {
    return 0;
  }
  let hits = 0;
  let total = 0;
  for (const name of sampleNames) {
    const s = toSkeleton(name);
    if (s.length >= k) {
      total++;
      if (refSuffixes.has(s.slice(-k))) {
        hits++;
      }
    }
  }
  return total === 0 ? 0 : hits / total;
}

export function meanLength(names: string[]): number {
  if (names.length === 0) {
    return 0;
  }
  return names.reduce((sum, n) => sum + n.length, 0) / names.length;
}

/** Default corpus when none is passed (cwd must be project root). */
export function defaultForestDwellerCorpusPath(): string {
  return resolve(process.cwd(), "src/research/forest-dweller-corpus.json");
}

export function corpusStructureWantsHelp(argv: string[]): boolean {
  return argv.includes("--help") || argv.includes("-h");
}

export function parseCorpusStructureCliArgs(
  argv: string[],
): CorpusStructureCliOptions {
  let rest = [...argv];
  let corpusPath = defaultForestDwellerCorpusPath();
  const maybeCorpus = rest[0];
  if (maybeCorpus?.endsWith(".json")) {
    corpusPath = resolve(process.cwd(), maybeCorpus);
    rest = rest.slice(1);
  }

  const [culture, categoryInput, countInput, seedInput] = rest;

  if (!culture || !categoryInput) {
    throw new Error("culture and category are required.");
  }

  if (
    !CORPUS_STRUCTURE_CATEGORIES.includes(
      categoryInput as CorpusStructureCategory,
    )
  ) {
    throw new Error(
      `category must be one of: ${CORPUS_STRUCTURE_CATEGORIES.join(", ")}.`,
    );
  }

  return {
    corpusPath,
    culture,
    category: categoryInput as CorpusStructureCategory,
    count: countInput ? parsePositiveInt(countInput, "count") : 500,
    seed: seedInput ? parseSeed(seedInput) : Date.now(),
  };
}
