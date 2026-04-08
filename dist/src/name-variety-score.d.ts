export type VarietyBreakdown = {
    uniqueNames: number;
    structuralVariety: number;
    lengthVariety: number;
    prefixVariety: number;
    suffixVariety: number;
    shingleVariety: number;
};
/**
 * Composite variety score in 0–1000 plus normalized breakdown dimensions (0–1).
 */
export declare function scoreNameVariety(names: string[]): {
    score: number;
    breakdown: VarietyBreakdown;
};
