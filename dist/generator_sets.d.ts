import GeneratorSet from "./generator_set.js";
/**
 * Returns generator sets for all cultures and races.
 *
 * @returns {GeneratorSet[]} All generator sets
 */
export declare function all(): GeneratorSet[];
/**
 * Returns a generator set by name.
 *
 * @param {string} name Name of the generator set.
 * @param {GeneratorSet[]} sets Generator sets.
 * @returns {GeneratorSet} Generator set with the given name.
 */
export declare function getSetByName(name: string, sets: GeneratorSet[]): GeneratorSet;
