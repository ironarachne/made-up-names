/**
 * Research corpus JSON for a culture: `src/research/<slug>-corpus.json` (cwd = project root).
 * Slug is the culture name lowercased with spaces replaced by hyphens.
 */
export declare function corpusJsonPathForCulture(culture: string): string;
/**
 * Maps corpus-structure subscores (each in [0, 1]) to the same 0–1000 scale as variety.
 */
export declare function corpusStructureComposite1000(bigramCosine: number, trigramCosine: number, suffixMatchK3: number): number;
/**
 * Geometric mean of two 0–1000 scores, rounded — high when both are high (balanced).
 */
export declare function balanceGeometricMean1000(a: number, b: number): number;
/**
 * Short hint comparing the two dimensions (same 0–1000 scale).
 * Slightly asymmetric band: corpus-structure scores often sit high at fixed sample size,
 * so the lower bound is below 0.8 so “balanced” reflects comparable effort on both axes.
 */
export declare function balanceLabel(variety1000: number, structure1000: number): string;
