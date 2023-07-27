"use strict";
import { WordGenerator } from "@ironarachne/word-generator";
import * as Words from "@ironarachne/words";
export function generate(patterns) {
    /**
     * Generate a name from a set of patterns
     *
     * @param {string[]} patterns - The patterns to use
     * @returns {string}
     */
    let generator = new WordGenerator();
    generator.patterns = patterns;
    let name = generator.generate();
    return Words.capitalize(name);
}
