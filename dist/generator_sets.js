"use strict";
import * as Cultures from "./cultures.js";
import * as Races from "./races.js";
export function all() {
    const cultures = Cultures.all();
    const races = Races.all();
    let result = [];
    result = result.concat(cultures);
    result = result.concat(races);
    return result;
}
export function getSetByName(name, sets) {
    for (let i = 0; i < sets.length; i++) {
        if (sets[i].name === name) {
            return sets[i];
        }
    }
    throw new Error("failed to find set with name: " + name);
}
