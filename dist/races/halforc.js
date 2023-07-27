'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generic_1 = __importDefault(require("../generators/generic"));
const generatorset_1 = __importDefault(require("../generatorset"));
class HalfOrcSet extends generatorset_1.default {
    constructor() {
        super();
        this.family = family();
        this.female = female();
        this.male = male();
    }
}
exports.default = HalfOrcSet;
function family() {
    let gen = new generic_1.default();
    gen.patterns = [
        'Apvlnvn',
        'vpvcnvn',
        'vSHlvnp',
        'SnvTH',
        'pvvLOR',
        'pv+PER',
        'sLvTCHER',
        'svRRIER',
        'pvnDElSON',
        'pvnDElS',
        'vvpSBURG',
        'vvpSBERG',
        'vlnvTHION',
        'vpRvHAM',
        'vcpLAND',
        'vcpLvND',
        'vcfFORD',
        'vcnFvRD',
    ];
    const prefixes = [
        'SMASH',
        'BULL',
        'RAGE',
        'DEATH',
        'MURDER',
        'SKULL',
        'FIGHT',
        'BREAK',
        'WAR',
        'BATTLE',
        'GROG',
        'FEAR',
    ];
    const suffixes = ['FIST', 'SMASH', 'REND', 'BLADE', 'AXE', 'CHOPPER', 'CUTTER', 'KILLER'];
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
        'vnvlA',
        'vnv',
        'vdvlvN',
        'vlvnA',
        'vcnvA',
        'cvlvNIA',
        'cvlvNA',
        'pvc+vpa',
        'vpBvZA',
        'vppvsA',
    ];
    return gen;
}
function male() {
    let gen = new generic_1.default();
    gen.patterns = [
        'vFFlvn',
        'cvclvn',
        'vpvlvn',
        'cvLLvvn',
        'cvlvpv+l',
        'vppvl',
        'pvspvn',
        'pv+lvn',
        'pvlsvp',
        'pvDRvC',
        'pvp',
        'pvpvp',
        'pvppvs',
        'pAlpvs',
        'pAlpvG',
        'svRM',
        'svRN',
        'svRNpvK',
        'pv+pvK',
    ];
    return gen;
}
