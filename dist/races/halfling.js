'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generic_1 = __importDefault(require("../generators/generic"));
const generatorset_1 = __importDefault(require("../generatorset"));
class HalflingSet extends generatorset_1.default {
    constructor() {
        super();
        this.family = family();
        this.female = female();
        this.male = male();
    }
}
exports.default = HalflingSet;
function family() {
    let gen = new generic_1.default();
    gen.patterns = ['BvdvnS', 'pvMpu'];
    const prefixes = [
        'BRANDY',
        'FEATHER',
        'HAIRY',
        'HOG',
        'HORN',
        'LITTLE',
        'LONG',
        'OAK',
        'OLD',
        'PROUD',
        'PUDDI',
        'SWIFT',
        'UNDER',
        'WANDER',
        'WHIT',
    ];
    const suffixes = ['BELLY', 'BOTTOM', 'DALE', 'FOOT', 'HOUSE', 'PEN', 'WOOD', 'WORT'];
    for (let i = 0; i < prefixes.length; i++) {
        for (let j = 0; j < suffixes.length; j++) {
            gen.patterns.push(prefixes[i] + suffixes[j]);
        }
    }
    return gen;
}
function female() {
    let gen = new generic_1.default();
    gen.patterns = ['oEOnY', 'oEARL', 'pELInDA', 'mvlvnoA', 'plvSovn', 'Mvovlpvlo', 'pvfvnA'];
    return gen;
}
function male() {
    let gen = new generic_1.default();
    gen.patterns = ['BvlBv', 'svnwvsE', 'pvPPvn', 'pvlvplvn', 'wvnflvo', 'pvlnO', 'vovlpvRT'];
    return gen;
}
