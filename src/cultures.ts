"use strict";

import ElvishSet from "./cultures/elvish.js";
import FantasySet from "./cultures/fantasy.js";
import GermanicSet from "./cultures/germanic.js";
import JapanishSet from "./cultures/japanish.js";
import GeneratorSet from "./generatorset.js";

export function all(): GeneratorSet[] {
  return [new GermanicSet(), new FantasySet(), new JapanishSet(), new ElvishSet()];
}
