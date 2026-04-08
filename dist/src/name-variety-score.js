function clamp(value) {
    return Math.max(0, Math.min(1, value));
}
function normalizedDistinctCount(distinctCount, maxCount) {
    if (maxCount <= 1) {
        return 0;
    }
    return clamp((distinctCount - 1) / (maxCount - 1));
}
function isVowel(char) {
    return /[aeiouyáàâǎāéèêěēíìîǐīóòôǒōúùûǔūäëïöüæœãẽĩõũɑɔøåö]/i.test(char);
}
/** V/C skeleton; non-letters preserved (matches score-variety behavior). */
function toSkeleton(name) {
    return Array.from(name.toLowerCase())
        .map((char) => {
        if (/\p{L}/u.test(char)) {
            return isVowel(char) ? "V" : "C";
        }
        return char;
    })
        .join("");
}
function getShingles(name) {
    const normalized = name.toLowerCase();
    const source = Array.from(normalized);
    const size = source.length >= 3 ? 3 : 2;
    if (source.length < size) {
        return [];
    }
    const shingles = [];
    for (let index = 0; index <= source.length - size; index++) {
        shingles.push(source.slice(index, index + size).join(""));
    }
    return shingles;
}
/**
 * Composite variety score in 0–1000 plus normalized breakdown dimensions (0–1).
 */
export function scoreNameVariety(names) {
    if (names.length <= 1) {
        return {
            score: 0,
            breakdown: {
                uniqueNames: 0,
                structuralVariety: 0,
                lengthVariety: 0,
                prefixVariety: 0,
                suffixVariety: 0,
                shingleVariety: 0,
            },
        };
    }
    const normalized = names.map((name) => name.toLowerCase());
    const uniqueNames = new Set(normalized).size;
    const uniqueLengths = new Set(normalized.map((name) => name.length)).size;
    const uniqueSkeletons = new Set(normalized.map(toSkeleton)).size;
    const uniquePrefixes = new Set(normalized.map((name) => name.slice(0, Math.min(3, name.length)))).size;
    const uniqueSuffixes = new Set(normalized.map((name) => name.slice(Math.max(0, name.length - Math.min(3, name.length))))).size;
    const shingles = normalized.flatMap(getShingles);
    const uniqueShingles = new Set(shingles).size;
    const shingleVariety = shingles.length === 0 ? 0 : clamp(uniqueShingles / shingles.length);
    const breakdown = {
        uniqueNames: normalizedDistinctCount(uniqueNames, normalized.length),
        structuralVariety: normalizedDistinctCount(uniqueSkeletons, normalized.length),
        lengthVariety: normalizedDistinctCount(uniqueLengths, Math.min(normalized.length, 12)),
        prefixVariety: normalizedDistinctCount(uniquePrefixes, normalized.length),
        suffixVariety: normalizedDistinctCount(uniqueSuffixes, normalized.length),
        shingleVariety,
    };
    const composite = breakdown.uniqueNames * 0.4 +
        breakdown.structuralVariety * 0.15 +
        breakdown.lengthVariety * 0.1 +
        breakdown.prefixVariety * 0.1 +
        breakdown.suffixVariety * 0.1 +
        breakdown.shingleVariety * 0.15;
    return {
        score: Math.round(clamp(composite) * 1000),
        breakdown,
    };
}
