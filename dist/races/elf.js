"use strict";
import GenericNameGenerator from "../generators/generic.js";
import GeneratorSet from "../generatorset.js";
export default class ElfSet extends GeneratorSet {
    constructor() {
        super();
        this.family = family();
        this.female = female();
        this.male = male();
    }
}
function family() {
    let gen = new GenericNameGenerator();
    gen.patterns = ["vlpvlvn"];
    let prefixes = [
        "WHITE",
        "GREEN",
        "BLUE",
        "WILD",
        "SUMMER",
        "WINTER",
        "WIND",
        "BEACH",
        "DAWN",
        "DUSK",
        "SKY",
        "NIGHT",
    ];
    let suffixes = [
        "FLOWER",
        "WALKER",
        "SONG",
        "RUNNER",
        "CROWN",
        "BLOSSOM",
        "BELL",
        "WATCHER",
        "GUARD",
        "STAR",
        "GROVE",
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
        "vlpvlvnA",
        "pvLvDRIEL",
        "pvLvTHRIEL",
        "vlWEN",
        "vlvnwA",
        "vlvnwE",
        "vLLUvn",
        "vsvLME",
        "cvlwEN",
        "vnovMIEL",
        "vlIxN",
    ];
    return gen;
}
function male() {
    let gen = new GenericNameGenerator();
    gen.patterns = [
        "vlpvlvn",
        "vnvnvnpv",
        "pARvTHION",
        "vlMIEL",
        "vlMvRION",
        "vRvnoUR",
        "vNxlION",
        "vNDxRIL",
        "vNDxNE",
        "vRvNxRE",
    ];
    return gen;
}
