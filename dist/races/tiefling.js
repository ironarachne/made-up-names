"use strict";
import GenericNameGenerator from "../generators/generic.js";
import GeneratorSet from "../generatorset.js";
export default class TieflingSet extends GeneratorSet {
    constructor() {
        super();
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
