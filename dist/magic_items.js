import * as Invented from "./invented.js";
/**
 * Generates a magic item name.
 *
 * @returns {string} The name.
 * @since 0.0.0
 */
export function generate() {
    const patterns = [
        "cvpv",
        "vc+vc",
        "gvcvc",
        "cvDAR",
        "cvcDRING",
        "cApERI",
        "cvcAcI",
        "cApERv",
        "cvs'gARvc",
    ];
    return Invented.generate(patterns);
}
