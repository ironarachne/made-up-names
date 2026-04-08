import { resolve } from "node:path";
/**
 * Research corpus JSON for a culture: `src/research/<slug>-corpus.json` (cwd = project root).
 * Slug is the culture name lowercased with spaces replaced by hyphens.
 */
export function corpusJsonPathForCulture(culture) {
    const slug = culture.trim().toLowerCase().replace(/\s+/g, "-");
    return resolve(process.cwd(), "src/research", `${slug}-corpus.json`);
}
/**
 * Maps corpus-structure subscores (each in [0, 1]) to the same 0–1000 scale as variety.
 */
export function corpusStructureComposite1000(bigramCosine, trigramCosine, suffixMatchK3) {
    const raw = (bigramCosine + trigramCosine + suffixMatchK3) / 3;
    return Math.round(Math.max(0, Math.min(1, raw)) * 1000);
}
/**
 * Geometric mean of two 0–1000 scores, rounded — high when both are high (balanced).
 */
export function balanceGeometricMean1000(a, b) {
    const x = Math.max(0, Math.min(1000, a)) / 1000;
    const y = Math.max(0, Math.min(1000, b)) / 1000;
    return Math.round(Math.sqrt(x * y) * 1000);
}
/**
 * Short hint comparing the two dimensions (same 0–1000 scale).
 * Slightly asymmetric band: corpus-structure scores often sit high at fixed sample size,
 * so the lower bound is below 0.8 so “balanced” reflects comparable effort on both axes.
 */
export function balanceLabel(variety1000, structure1000) {
    const v = variety1000 / 1000;
    const s = structure1000 / 1000;
    const ratio = s > 0 ? v / s : v > 0 ? 999 : 1;
    if (ratio > 1.28) {
        return "variety_heavy";
    }
    if (ratio < 0.71) {
        return "structure_heavy";
    }
    return "balanced";
}
