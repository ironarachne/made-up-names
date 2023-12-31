"use strict";
import GeneratorSet from "../generator_set.js";
import GenericNameGenerator from "../generic_name_generator.js";
export default class DragonbornSet extends GeneratorSet {
    constructor() {
        super();
        this.name = "dragonborn";
        this.family = family();
        this.female = female();
        this.male = male();
    }
}
function family() {
    let gen = new GenericNameGenerator();
    gen.patterns = ["vlpvlvn", "ovlMvRvV", "pvRRcYlION", "pvRRcYlIvN", "pvdcYlIvN", "cvRvXIUS"];
    let prefixes = [
        "WHITE",
        "GREEN",
        "BLUE",
        "WILD",
        "SUMMER",
        "WINTER",
        "WIND",
        "DAWN",
        "DUSK",
        "SKY",
        "NIGHT",
        "FIRE",
        "FLAME",
        "RAGE",
        "HAMMER",
        "RED",
        "DARK",
        "SPELL",
        "WAR",
    ];
    let suffixes = ["BLADE", "BROW", "SCALE", "SPEAR", "RIDER", "WALKER", "RUNNER", "TALON"];
    for (let i = 0; i < prefixes.length; i++) {
        for (let j = 0; j < suffixes.length; j++) {
            gen.patterns.push(prefixes[i] + suffixes[j]);
        }
    }
    return gen;
}
function female() {
    let gen = new GenericNameGenerator();
    gen.patterns = ["tvMvt", "cv+l", "cvlv", "ovRRv", "lAIvNN"];
    return gen;
}
function male() {
    let gen = new GenericNameGenerator();
    gen.patterns = ["vlKvSIA", "cvLvSAR", "cvlvt", "ovnv+R"];
    return gen;
}
