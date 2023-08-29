"use strict";
import GeneratorSet from "../generator_set.js";
import GenericNameGenerator from "../generic_name_generator.js";
export default class TieflingSet extends GeneratorSet {
    constructor() {
        super();
        this.name = "tiefling";
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
    return gen;
}
function female() {
    let gen = new GenericNameGenerator();
    gen.patterns = ["vnvlA", "vnv", "vdvlvN", "vlvnA", "vcnvA", "cvlvNIA", "cvlvNA", "pySSvka"];
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
    ];
    return gen;
}
