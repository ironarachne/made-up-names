import { cloneDeep } from "lodash";
import fantasy from "./cultures/fantasy.js";
import forest_dweller from "./cultures/forest_dweller.js";
import gem_tinkerer from "./cultures/gem_tinkerer.js";
import hill_feaster from "./cultures/hill_feaster.js";
import metal_miner from "./cultures/metal_miner.js";
import mud_grubber from "./cultures/mud_grubber.js";
import scale_bearer from "./cultures/scale_bearer.js";
import war_bringer from "./cultures/war_bringer.js";
import GeneratorSet from "./generator_set.js";

export function all(): GeneratorSet[] {
  let elf = cloneDeep(forest_dweller);
  elf.name = "elf";

  let dwarf = cloneDeep(metal_miner);
  dwarf.name = "dwarf";

  let dragonborn = cloneDeep(scale_bearer);
  dragonborn.name = "dragonborn";

  let gnome = cloneDeep(gem_tinkerer);
  gnome.name = "gnome";

  let goblin = cloneDeep(mud_grubber);
  goblin.name = "goblin";

  let halfling = cloneDeep(hill_feaster);
  halfling.name = "halfling";

  let half_elf = cloneDeep(fantasy);
  half_elf.name = "half-elf";

  let half_orc = cloneDeep(fantasy);
  half_orc.name = "half-orc";

  let human = cloneDeep(fantasy);
  human.name = "human";

  let orc = cloneDeep(war_bringer);
  orc.name = "orc";

  let tiefling = cloneDeep(fantasy);
  tiefling.name = "tiefling";

  let troll = cloneDeep(war_bringer);
  troll.name = "troll";

  return [
    dragonborn,
    dwarf,
    elf,
    gnome,
    goblin,
    half_elf,
    half_orc,
    halfling,
    human,
    orc,
    tiefling,
    troll,
  ];
}
