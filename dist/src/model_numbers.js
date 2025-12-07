import * as RNG from "@ironarachne/rng";
/**
 * Generates a model number for a starship, weapon, or similar.
 *
 * @returns {string} The generated model number
 */
export function generate(seed = Date.now()) {
    const random = new RNG.RNG(seed);
    const nameType = random.item([
        {
            generate: () => {
                const modelNumberPrefix = random.item(["Y", "M", "R", "X", "T", "S", "J", "G", "H"]);
                const modelNumberSuffix = random.int(1, 9) * 10;
                return `${modelNumberPrefix}-${modelNumberSuffix}`;
            },
        },
        {
            generate: () => {
                const modelNumberPrefix1 = random.item(["A", "E", "I", "O", "U"]);
                const modelNumberPrefix2 = random.item(["Y", "M", "R", "X", "T", "S", "J", "G", "H"]);
                const modelNumberSuffix = random.int(1, 9) * 10;
                return `${modelNumberPrefix1}${modelNumberPrefix2}-${modelNumberSuffix}`;
            },
        },
        {
            generate: () => {
                const modelNumberPrefix1 = random.item(["B", "R", "X", "S", "N"]);
                const modelNumberPrefix2 = random.item(["Y", "M", "I", "K", "T", "Q", "J", "G", "H"]);
                const modelNumberSuffix = random.int(1, 99) * 100;
                return `${modelNumberPrefix1}${modelNumberPrefix2}-${modelNumberSuffix}`;
            },
        },
    ]);
    return nameType.generate();
}
