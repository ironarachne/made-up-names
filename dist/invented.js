import { WordGenerator } from "@ironarachne/word-generator";
import * as Words from "@ironarachne/words";
/**
 * Generates a name from a set of patterns.
 *
 * @param {string[]} patterns - The patterns to use
 * @returns {string} The generated name
 */
export function generate(patterns) {
    /**
     * Generate a name from a set of patterns
     *
     * @param {string[]} patterns - The patterns to use
     * @returns {string}
     */
    const generator = new WordGenerator();
    generator.patterns = patterns;
    const name = generator.generate();
    return Words.capitalize(name);
}
