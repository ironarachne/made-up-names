"use strict";
import GeneratorSet from "../generator_set.js";
import GenericNameGenerator from "../generic_name_generator.js";
export default class GoblinSet extends GeneratorSet {
    constructor() {
        super();
        this.name = "goblin";
        this.family = family();
        this.female = female();
        this.male = male();
    }
}
function family() {
    let gen = new GenericNameGenerator();
    gen.patterns = ["BvdvnS", "pvMpu"];
    const prefixes = [
        "BIG",
        "CRAZE",
        "FEATHER",
        "FLEA",
        "GREASE",
        "HAIRY",
        "HOG",
        "HORN",
        "LONG",
        "OIL",
        "OLD",
        "PUDDING",
        "SLUDGE",
        "SMALL",
        "UGLY",
        "UNDER",
        "WANDER",
    ];
    const suffixes = [
        "BELLY",
        "BOTTOM",
        "BUCKET",
        "DALE",
        "FACE",
        "FOOT",
        "HOUSE",
        "NOSE",
        "STENCH",
        "TOOTH",
        "WART",
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
    gen.patterns = ["oEOnY", "oEARL", "pELInDA", "mvlvnoA", "plvSovn", "Mvovlpvlo", "pvfvnA"];
    return gen;
}
function male() {
    let gen = new GenericNameGenerator();
    gen.patterns = ["BvlBvK", "svnwvsENK", "pvPPvnK", "pvlvplvS", "wvnflvo", "pvlnO", "vovlpvRT"];
    return gen;
}
