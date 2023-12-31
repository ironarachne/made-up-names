"use strict";
import GeneratorSet from "../generator_set.js";
import GenericNameGenerator from "../generic_name_generator.js";
export default class TrollSet extends GeneratorSet {
    constructor() {
        super();
        this.name = "troll";
        this.family = family();
        this.female = female();
        this.male = male();
    }
}
function family() {
    let gen = new GenericNameGenerator();
    gen.patterns = [
        "Apvlnvn",
        "vpvcnvn",
        "vSHlvnp",
        "SnvTH",
        "pvvLOR",
        "pv+PER",
        "sLvTCHER",
        "svRRIER",
        "pvnDElSON",
        "pvnDElS",
        "vvpSBURG",
        "vvpSBERG",
        "vlnvTHION",
        "vpRvHAM",
        "vcpLAND",
        "vcpLvND",
        "vcfFORD",
        "vcnFvRD",
    ];
    const prefixes = [
        "SMASH",
        "BULL",
        "RAGE",
        "DEATH",
        "MURDER",
        "SKULL",
        "FIGHT",
        "BREAK",
        "WAR",
        "BATTLE",
        "GROG",
        "FEAR",
    ];
    const suffixes = ["FIST", "SMASH", "REND", "BLADE", "AXE", "CHOPPER", "CUTTER", "KILLER"];
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
        "vnvlA",
        "vnv",
        "vc+vlvN",
        "vlvnA",
        "vcnvA",
        "cvlvNIA",
        "cvlvNA",
        "pvdvpa",
        "vpBvZA",
        "vppvsA",
    ];
    return gen;
}
function male() {
    let gen = new GenericNameGenerator();
    gen.patterns = [
        "vFFlvn",
        "cvclvn",
        "vpvlvn",
        "cvLLvvn",
        "cvlvpul",
        "vppvl",
        "pvspvn",
        "pv+lvn",
        "pvlsvp",
        "pvDRvC",
        "pvp",
        "pvpvp",
        "pvppvs",
        "pAlpvs",
        "pAlpvG",
        "svRM",
        "svRN",
        "svRNpvK",
        "pv+pvK",
    ];
    return gen;
}
