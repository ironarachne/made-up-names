"use strict";
import GeneratorSet from "../generator_set.js";
import GenericNameGenerator from "../generic_name_generator.js";
export default class GnomeSet extends GeneratorSet {
    constructor() {
        super();
        this.name = "gnome";
        this.family = family();
        this.female = female();
        this.male = male();
    }
}
function family() {
    let gen = new GenericNameGenerator();
    gen.patterns = ["vPSpvMS", "cvnKLER", "cvdLER", "cvdER", "pvpLOp"];
    const prefixes = [
        "AGATE",
        "ALLOY",
        "COPPER",
        "CRYSTAL",
        "DIAMOND",
        "DUST",
        "GEM",
        "GOLD",
        "IRON",
        "JADE",
        "JET",
        "JEWEL",
        "ONYX",
        "OPAL",
        "PELLET",
        "RUBY",
        "SAPPHIRE",
        "SILVER",
        "WIRE",
    ];
    const suffixes = [
        "BITER",
        "BOPPER",
        "BRANDER",
        "CHARMER",
        "CHEST",
        "DROPPER",
        "HAMMER",
        "MALLET",
        "POPPER",
        "SEEDER",
        "SENDER",
        "SHAPER",
        "SWEEPER",
        "TINKER",
        "TRADER",
        "WATCHER",
        "WEAVER",
        "WINKER",
        "WOOSHER",
        "WORKER",
    ];
    for (let i = 0; i < prefixes.length; i++) {
        for (let j = 0; j < suffixes.length; j++) {
            gen.patterns.push(prefixes[i] + suffixes[j]);
        }
    }
    return gen;
}
function female() {
    let gen = new GenericNameGenerator();
    gen.patterns = [
        "avNNA",
        "SHvNvDDI",
        "MvoLI",
        "voAnA",
        "voAnI",
        "vvTHNE",
        "ovpv",
        "SNvflvnv",
        "pvdvnv",
    ];
    return gen;
}
function male() {
    let gen = new GenericNameGenerator();
    gen.patterns = ["Blvocvf", "oOdvp", "pvnlv", "pvnp", "cvlVER", "wvlVER", "pvlwvl", "pvlwv"];
    return gen;
}
