"use strict";
import * as RND from "@ironarachne/rng";
export function randomGenSet(sets) {
    return RND.item(sets);
}
export function getSetByName(name, sets) {
    for (let i = 0; i < sets.length; i++) {
        if (sets[i].name === name) {
            return sets[i];
        }
    }
    throw new Error("failed to find set with name: " + name);
}
