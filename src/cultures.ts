import easterling from "./cultures/easterling.js";
import fantasy from "./cultures/fantasy.js";
import forest_dweller from "./cultures/forest_dweller.js";
import gem_tinkerer from "./cultures/gem_tinkerer.js";
import hill_feaster from "./cultures/hill_feaster.js";
import metal_miner from "./cultures/metal_miner.js";
import mud_grubber from "./cultures/mud_grubber.js";
import old_worlder from "./cultures/old_worlder.js";
import scale_bearer from "./cultures/scale_bearer.js";
import war_bringer from "./cultures/war_bringer.js";
import GeneratorSet from "./generator_set.js";

/**
 * Returns generator sets for all cultures.
 *
 * @returns {GeneratorSet[]} Generator sets for all cultures.
 * @since 0.0.0
 */
export function all(): GeneratorSet[] {
  return [
    easterling,
    fantasy,
    forest_dweller,
    gem_tinkerer,
    hill_feaster,
    metal_miner,
    mud_grubber,
    old_worlder,
    scale_bearer,
    war_bringer,
  ];
}
