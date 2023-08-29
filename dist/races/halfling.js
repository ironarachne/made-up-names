"use strict";
import GeneratorSet from "../generator_set.js";
import GenericNameGenerator from "../generic_name_generator.js";
export default class HalflingSet extends GeneratorSet {
    constructor() {
        super();
        this.name = "halfling";
        this.family = family();
        this.female = female();
        this.male = male();
    }
}
function family() {
    let gen = new GenericNameGenerator();
    gen.patterns = ["BvdvnS", "pvMpu"];
    const prefixes = [
        "BRANDY",
        "FEATHER",
        "HAIRY",
        "HOG",
        "HORN",
        "LITTLE",
        "LONG",
        "OAK",
        "OLD",
        "PROUD",
        "PUDDI",
        "SWIFT",
        "UNDER",
        "WANDER",
        "WHIT",
    ];
    const suffixes = ["BELLY", "BOTTOM", "DALE", "FOOT", "HOUSE", "PEN", "WOOD", "WORT"];
    for (let i = 0; i < prefixes.length; i++) {
        for (let j = 0; j < suffixes.length; j++) {
            gen.patterns.push(prefixes[i] + suffixes[j]);
        }
    }
    return gen;
}
function female() {
    let gen = new GenericNameGenerator();
    gen.patterns = ["oEOnY", "oEARL", "pELInDA", "mvlvnoA", "plvSovn", "Mvovlpvlo", "pvfvnA"];
    return gen;
}
function male() {
    let gen = new GenericNameGenerator();
    gen.patterns = ["BvlBv", "svnwvsE", "pvPPvn", "pvlvplvn", "wvnflvo", "pvlnO", "vovlpvRT"];
    return gen;
}
