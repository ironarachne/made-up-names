declare const VALID_CATEGORIES: readonly ["culture", "country", "family", "female", "male", "town"];
type Category = (typeof VALID_CATEGORIES)[number];
export type CliOptions = {
    corpusPath: string;
    culture: string;
    category: Category;
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
export declare function parseArgs(argv: string[]): CliOptions;
export {};
