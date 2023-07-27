'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generic_1 = __importDefault(require("../generators/generic"));
const generatorset_1 = __importDefault(require("../generatorset"));
class GnomeSet extends generatorset_1.default {
    constructor() {
        super();
        this.family = family();
        this.female = female();
        this.male = male();
    }
}
exports.default = GnomeSet;
function family() {
    let gen = new generic_1.default();
    gen.patterns = ['vPSpvMS', 'cvnKLER', 'cvdLER', 'cvdER', 'pvpLOp'];
    const prefixes = [
        'AGATE',
        'ALLOY',
        'COPPER',
        'CRYSTAL',
        'DIAMOND',
        'DUST',
        'GEM',
        'GOLD',
        'IRON',
        'JADE',
        'JET',
        'JEWEL',
        'ONYX',
        'OPAL',
        'PELLET',
        'RUBY',
        'SAPPHIRE',
        'SILVER',
        'WIRE',
    ];
    const suffixes = [
        'BITER',
        'BOPPER',
        'BRANDER',
        'CHARMER',
        'CHEST',
        'DROPPER',
        'HAMMER',
        'MALLET',
        'POPPER',
        'SEEDER',
        'SENDER',
        'SHAPER',
        'SWEEPER',
        'TINKER',
        'TRADER',
        'WATCHER',
        'WEAVER',
        'WINKER',
        'WOOSHER',
        'WORKER',
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
        'avNNA',
        'SHvNvDDI',
        'MvoLI',
        'voAnA',
        'voAnI',
        'vvTHNE',
        'ovpv',
        'SNvflvnv',
        'pvdvnv',
    ];
    return gen;
}
function male() {
    let gen = new generic_1.default();
    gen.patterns = ['Blvocvf', 'oOdvp', 'pvnlv', 'pvnp', 'cvlVER', 'wvlVER', 'pvlwvl', 'pvlwv'];
    return gen;
}
