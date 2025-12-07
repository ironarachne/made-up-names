import * as Cultures from "./cultures.js";
import * as Races from "./races.js";
/**
 * Returns generator sets for all cultures and races.
 *
 * @returns {GeneratorSet[]} All generator sets
 */
export function all() {
    const cultures = Cultures.all();
    const races = Races.all();
    let result = [];
    result = result.concat(cultures);
    result = result.concat(races);
    return result;
}
/**
 * Returns a generator set by name.
 *
 * @param {string} name Name of the generator set.
 * @param {GeneratorSet[]} sets Generator sets.
 * @returns {GeneratorSet} Generator set with the given name.
 */
export function getSetByName(name, sets) {
    for (let i = 0; i < sets.length; i++) {
        if (sets[i].name === name) {
            return sets[i];
        }
    }
    throw new Error(`failed to find set with name: ${name}`);
}
