"use strict";
import GeneratorSet from "../generator_set.js";
import GenericNameGenerator from "../generic_name_generator.js";
export default class DwarfSet extends GeneratorSet {
    constructor() {
        super();
        this.name = "dwarf";
        this.family = family();
        this.female = female();
        this.male = male();
    }
}
function family() {
    let gen = new GenericNameGenerator();
    const prefixes = [
        "BATTLE",
        "BROAD",
        "COPPER",
        "FIRE",
        "GEM",
        "GOLD",
        "INGOT",
        "JADE",
        "OAK",
        "ONYX",
        "ROCK",
        "RUBY",
        "SILVER",
        "STEEL",
        "STONE",
    ];
    const suffixes = [
        "BANE",
        "BEARD",
        "BREWER",
        "CHIN",
        "FALL",
        "FOOT",
        "GRIP",
        "HAMMER",
        "HILL",
        "MOUNTAIN",
        "RIVER",
        "TUNNEL",
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
        "pvRINv",
        "pWvlINA",
        "pvlInv",
        "THvlIn",
        "pvMLInA",
        "pvNLInA",
        "pvFURA",
        "pvFvlA",
        "slvlINA",
    ];
    return gen;
}
function male() {
    let gen = new GenericNameGenerator();
    gen.patterns = [
        "pvRIN",
        "pWvlIN",
        "pvlIN",
        "THvlIN",
        "THvlIM",
        "pvMLI",
        "pvNLI",
        "plxIN",
        "pvFUR",
        "pvFvl",
        "slvlIN",
    ];
    return gen;
}
