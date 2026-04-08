import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { RNG } from "@ironarachne/rng";
import { getCultureNamePatternSet, getNameGeneratorForPatternSet, } from "../src/index.ts";
const VALID_CATEGORIES = [
    "culture",
    "country",
    "family",
    "female",
    "male",
    "town",
];
function isVowel(char) {
    return /[aeiouyáàâǎāéèêěēíìîǐīóòôǒōúùûǔūäëïöüæœãẽĩõũɑɔøåö]/i.test(char);
}
/** Maps letters to V/C; non-letters dropped. ASCII heuristic, not IPA. */
export function toSkeleton(name) {
    return Array.from(name.toLowerCase())
        .filter((char) => /\p{L}/u.test(char))
        .map((char) => (isVowel(char) ? "V" : "C"))
        .join("");
}
function parsePositiveInt(value, label) {
    const parsed = Number.parseInt(value, 10);
    if (!Number.isFinite(parsed) || parsed <= 0) {
        throw new Error(`${label} must be a positive integer.`);
    }
    return parsed;
}
function parseSeed(value) {
    const parsed = Number.parseInt(value, 10);
    if (!Number.isFinite(parsed)) {
        throw new Error("seed must be an integer.");
    }
    return parsed;
}
export function ngramCounts(strings, n) {
    const map = new Map();
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
export function cosineSimilarity(a, b) {
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
export function skeletonNgramCosine(referenceNames, sampleNames, n) {
    const refSkels = referenceNames.map(toSkeleton).filter((s) => s.length > 0);
    const genSkels = sampleNames.map(toSkeleton).filter((s) => s.length > 0);
    return cosineSimilarity(ngramCounts(refSkels, n), ngramCounts(genSkels, n));
}
/** Fraction of sample skeletons whose last k symbols appear as a suffix of some reference skeleton. */
export function suffixPoolMatchRate(referenceNames, sampleNames, k) {
    if (k <= 0) {
        return 0;
    }
    const refSuffixes = new Set();
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
export function meanLength(names) {
    if (names.length === 0) {
        return 0;
    }
    return names.reduce((sum, n) => sum + n.length, 0) / names.length;
}
function defaultCorpusPath() {
    const scriptDir = dirname(fileURLToPath(import.meta.url));
    return resolve(scriptDir, "../src/research/forest-dweller-corpus.json");
}
function loadCorpusNames(path, category) {
    const raw = readFileSync(path, "utf-8");
    const data = JSON.parse(raw);
    const list = data.categories?.[category];
    if (!list?.length) {
        throw new Error(`No names in corpus category "${category}" (file: ${path}).`);
    }
    return list;
}
function printUsage() {
    console.error([
        "Compare generated names to a corpus using grapheme V/C skeletons (heuristic, not IPA).",
        "",
        "Usage:",
        "  npm run score:corpus-structure -- [corpus.json] <culture> <category> [count] [seed]",
        "",
        "Arguments:",
        "  corpus.json  Optional path to corpus JSON (categories.* string arrays).",
        "               Default: src/research/forest-dweller-corpus.json",
        "  culture      Culture name for generation (quoted if it contains spaces)",
        `  category     One of: ${VALID_CATEGORIES.join(", ")}`,
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
    ].join("\n"));
}
export function parseArgs(argv) {
    if (argv.includes("--help") || argv.includes("-h")) {
        printUsage();
        process.exit(0);
    }
    let rest = [...argv];
    let corpusPath = defaultCorpusPath();
    if (rest[0]?.endsWith(".json")) {
        corpusPath = resolve(process.cwd(), rest[0]);
        rest = rest.slice(1);
    }
    const [culture, categoryInput, countInput, seedInput] = rest;
    if (!culture || !categoryInput) {
        printUsage();
        throw new Error("culture and category are required.");
    }
    if (!VALID_CATEGORIES.includes(categoryInput)) {
        throw new Error(`category must be one of: ${VALID_CATEGORIES.join(", ")}.`);
    }
    return {
        corpusPath,
        culture,
        category: categoryInput,
        count: countInput ? parsePositiveInt(countInput, "count") : 500,
        seed: seedInput ? parseSeed(seedInput) : Date.now(),
    };
}
function formatMetric(value) {
    return value.toFixed(3);
}
function main() {
    try {
        const options = parseArgs(process.argv.slice(2));
        const corpusNames = loadCorpusNames(options.corpusPath, options.category);
        const patternSet = getCultureNamePatternSet(options.culture);
        const generator = getNameGeneratorForPatternSet(`${options.culture}_${options.category}_corpus_score`, patternSet[options.category], new RNG(options.seed));
        const generated = generator.generate(options.count);
        const bi = skeletonNgramCosine(corpusNames, generated, 2);
        const tri = skeletonNgramCosine(corpusNames, generated, 3);
        const suf = suffixPoolMatchRate(corpusNames, generated, 3);
        const lenC = meanLength(corpusNames);
        const lenG = meanLength(generated);
        console.log([
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
        ].join("\n"));
    }
    catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(`Error: ${message}`);
        process.exit(1);
    }
}
function isMainModule() {
    const entry = process.argv[1];
    if (!entry) {
        return false;
    }
    try {
        return fileURLToPath(import.meta.url) === resolve(entry);
    }
    catch {
        return false;
    }
}
if (isMainModule()) {
    main();
}
