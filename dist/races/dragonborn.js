'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generic_1 = __importDefault(require("../generators/generic"));
const generatorset_1 = __importDefault(require("../generatorset"));
class DragonbornSet extends generatorset_1.default {
    constructor() {
        super();
        this.family = family();
        this.female = female();
        this.male = male();
    }
}
exports.default = DragonbornSet;
function family() {
    let gen = new generic_1.default();
    gen.patterns = ['vlpvlvn', 'ovlMvRvV', 'pvRRcYlION', 'pvRRcYlIvN', 'pvdcYlIvN', 'cvRvXIUS'];
    let prefixes = [
        'WHITE',
        'GREEN',
        'BLUE',
        'WILD',
        'SUMMER',
        'WINTER',
        'WIND',
        'DAWN',
        'DUSK',
        'SKY',
        'NIGHT',
        'FIRE',
        'FLAME',
        'RAGE',
        'HAMMER',
        'RED',
        'DARK',
        'SPELL',
        'WAR',
    ];
    let suffixes = ['BLADE', 'BROW', 'SCALE', 'SPEAR', 'RIDER', 'WALKER', 'RUNNER', 'TALON'];
    for (let i = 0; i < prefixes.length; i++) {
        for (let j = 0; j < suffixes.length; j++) {
            gen.patterns.push(prefixes[i] + suffixes[j]);
        }
    }
    return gen;
}
function female() {
    let gen = new generic_1.default();
    gen.patterns = ['tvMvt', 'cv+l', 'cvlv', 'ovRRv', 'lAIvNN'];
    return gen;
}
function male() {
    let gen = new generic_1.default();
    gen.patterns = ['vlKvSIA', 'cvLvSAR', 'cvlvt', 'ovnv+R'];
    return gen;
}
