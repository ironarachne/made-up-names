'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generic_1 = __importDefault(require("../generators/generic"));
const generatorset_1 = __importDefault(require("../generatorset"));
class ElfSet extends generatorset_1.default {
    constructor() {
        super();
        this.family = family();
        this.female = female();
        this.male = male();
    }
}
exports.default = ElfSet;
function family() {
    let gen = new generic_1.default();
    gen.patterns = ['vlpvlvn'];
    let prefixes = [
        'WHITE',
        'GREEN',
        'BLUE',
        'WILD',
        'SUMMER',
        'WINTER',
        'WIND',
        'BEACH',
        'DAWN',
        'DUSK',
        'SKY',
        'NIGHT',
    ];
    let suffixes = [
        'FLOWER',
        'WALKER',
        'SONG',
        'RUNNER',
        'CROWN',
        'BLOSSOM',
        'BELL',
        'WATCHER',
        'GUARD',
        'STAR',
        'GROVE',
    ];
    for (let i = 0; i < prefixes.length; i++) {
        for (let j = 0; j < suffixes.length; j++) {
            gen.patterns.push(prefixes[i] + suffixes[j]);
        }
    }
    return gen;
}
function female() {
    let gen = new generic_1.default();
    gen.patterns = [
        'vlpvlvnA',
        'pvLvDRIEL',
        'pvLvTHRIEL',
        'vlWEN',
        'vlvnwA',
        'vlvnwE',
        'vLLUvn',
        'vsvLME',
        'cvlwEN',
        'vnovMIEL',
        'vlIxN',
    ];
    return gen;
}
function male() {
    let gen = new generic_1.default();
    gen.patterns = [
        'vlpvlvn',
        'vnvnvnpv',
        'pARvTHION',
        'vlMIEL',
        'vlMvRION',
        'vRvnoUR',
        'vNxlION',
        'vNDxRIL',
        'vNDxNE',
        'vRvNxRE',
    ];
    return gen;
}
