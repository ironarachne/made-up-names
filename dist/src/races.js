import pkg from "lodash";
const { cloneDeep } = pkg;
import fantasy from "./cultures/fantasy.js";
import forest_dweller from "./cultures/forest_dweller.js";
import gem_tinkerer from "./cultures/gem_tinkerer.js";
import hill_feaster from "./cultures/hill_feaster.js";
import metal_miner from "./cultures/metal_miner.js";
import mud_grubber from "./cultures/mud_grubber.js";
import scale_bearer from "./cultures/scale_bearer.js";
import war_bringer from "./cultures/war_bringer.js";
/**
 * Returns a set of name generators using the conventional "race is culture" paradigm from old-school D&D.
 *
 * @returns {GeneratorSet[]} Array of name generator sets
 */
export function all() {
    const elf = cloneDeep(forest_dweller);
    elf.name = "elf";
    const dwarf = cloneDeep(metal_miner);
    dwarf.name = "dwarf";
    const dragonborn = cloneDeep(scale_bearer);
    dragonborn.name = "dragonborn";
    const gnome = cloneDeep(gem_tinkerer);
    gnome.name = "gnome";
    const goblin = cloneDeep(mud_grubber);
    goblin.name = "goblin";
    const halfling = cloneDeep(hill_feaster);
    halfling.name = "halfling";
    const half_elf = cloneDeep(fantasy);
    half_elf.name = "half-elf";
    const half_orc = cloneDeep(fantasy);
    half_orc.name = "half-orc";
    const human = cloneDeep(fantasy);
    human.name = "human";
    const orc = cloneDeep(war_bringer);
    orc.name = "orc";
    const tiefling = cloneDeep(fantasy);
    tiefling.name = "tiefling";
    const troll = cloneDeep(war_bringer);
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
