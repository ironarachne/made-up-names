"use strict";

import ElvishSet from "./cultures/elvish";
import FantasySet from "./cultures/fantasy";
import GermanicSet from "./cultures/germanic";
import JapanishSet from "./cultures/japanish";
import GeneratorSet from "./generatorset";

export function all(): GeneratorSet[] {
  return [new GermanicSet(), new FantasySet(), new JapanishSet(), new ElvishSet()];
}
