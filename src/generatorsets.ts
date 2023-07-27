"use strict";

import * as RND from "@ironarachne/rng";
import GeneratorSet from "./generatorset";

export function randomGenSet(sets: GeneratorSet[]): GeneratorSet {
  return RND.item(sets);
}

export function getSetByName(name: string, sets: GeneratorSet[]): GeneratorSet {
  for (let i = 0; i < sets.length; i++) {
    if (sets[i].name === name) {
      return sets[i];
    }
  }

  throw new Error("failed to find set with name: " + name);
}
