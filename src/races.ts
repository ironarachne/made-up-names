"use strict";

import GeneratorSet from "./generator_set.js";
import DragonbornSet from "./races/dragonborn.js";
import DwarfSet from "./races/dwarf.js";
import ElfSet from "./races/elf.js";
import GnomeSet from "./races/gnome.js";
import HalfElfSet from "./races/half_elf.js";
import HalfOrcSet from "./races/half_orc.js";
import HalflingSet from "./races/halfling.js";
import HumanSet from "./races/human.js";
import TieflingSet from "./races/tiefling.js";

export function all(): GeneratorSet[] {
  return [
    new DragonbornSet(),
    new DwarfSet(),
    new ElfSet(),
    new GnomeSet(),
    new HalfElfSet(),
    new HalflingSet(),
    new HalfOrcSet(),
    new HumanSet(),
    new TieflingSet(),
  ];
}
