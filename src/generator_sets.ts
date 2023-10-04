import * as Cultures from "./cultures.js";
import GeneratorSet from "./generator_set.js";
import * as Races from "./races.js";

export function all(): GeneratorSet[] {
  const cultures = Cultures.all();
  const races = Races.all();

  let result: GeneratorSet[] = [];
  result = result.concat(cultures);
  result = result.concat(races);

  return result;
}

export function getSetByName(name: string, sets: GeneratorSet[]): GeneratorSet {
  for (let i = 0; i < sets.length; i++) {
    if (sets[i].name === name) {
      return sets[i];
    }
  }

  throw new Error("failed to find set with name: " + name);
}
