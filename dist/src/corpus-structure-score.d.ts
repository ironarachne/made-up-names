export declare const CORPUS_STRUCTURE_CATEGORIES: readonly ["culture", "country", "family", "female", "male", "town"];
export type CorpusStructureCategory = (typeof CORPUS_STRUCTURE_CATEGORIES)[number];
export type CorpusStructureCliOptions = {
    corpusPath: string;
    culture: string;
    category: CorpusStructureCategory;
    count: number;
    seed: number;
};
/** Maps letters to V/C; non-letters dropped. ASCII heuristic, not IPA. */
export declare function toSkeleton(name: string): string;
export declare function ngramCounts(strings: string[], n: number): Map<string, number>;
/** Cosine similarity in [0, 1] for two sparse count maps (treat missing as 0). */
export declare function cosineSimilarity(a: Map<string, number>, b: Map<string, number>): number;
export declare function skeletonNgramCosine(referenceNames: string[], sampleNames: string[], n: number): number;
/** Fraction of sample skeletons whose last k symbols appear as a suffix of some reference skeleton. */
export declare function suffixPoolMatchRate(referenceNames: string[], sampleNames: string[], k: number): number;
export declare function meanLength(names: string[]): number;
/** Default corpus when none is passed (cwd must be project root). */
export declare function defaultForestDwellerCorpusPath(): string;
export declare function corpusStructureWantsHelp(argv: string[]): boolean;
export declare function parseCorpusStructureCliArgs(argv: string[]): CorpusStructureCliOptions;
