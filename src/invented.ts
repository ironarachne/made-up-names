import { WordGenerator } from "@ironarachne/word-generator";
import * as Words from "@ironarachne/words";

/**
 * Generates a name from a set of patterns.
 *
 * @param {string[]} patterns - The patterns to use
 * @returns {string} The generated name
 */
export function generate(patterns: string[], seed: number = Date.now(), count: number = 1): string[] {
  /**
   * Generate a name from a set of patterns
   *
   * @param {string[]} patterns - The patterns to use
   * @param {number} seed - The seed for random generation
   * @returns {string}
   */
  const generator = new WordGenerator(seed);
  generator.patterns = patterns;

  const names = [];
  for (let i = 0; i < count; i++) {
    names.push(generator.generate());
  }

  return names.map(Words.capitalize);
}
