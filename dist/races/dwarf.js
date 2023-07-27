'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generic_1 = __importDefault(require("../generators/generic"));
const generatorset_1 = __importDefault(require("../generatorset"));
class DwarfSet extends generatorset_1.default {
    constructor() {
        super();
        this.family = family();
        this.female = female();
        this.male = male();
    }
}
exports.default = DwarfSet;
function family() {
    let gen = new generic_1.default();
    const prefixes = [
        'BATTLE',
        'BROAD',
        'COPPER',
        'FIRE',
        'GEM',
        'GOLD',
        'INGOT',
        'JADE',
        'OAK',
        'ONYX',
        'ROCK',
        'RUBY',
        'SILVER',
        'STEEL',
        'STONE',
    ];
    const suffixes = [
        'BANE',
        'BEARD',
        'BREWER',
        'CHIN',
        'FALL',
        'FOOT',
        'GRIP',
        'HAMMER',
        'HILL',
        'MOUNTAIN',
        'RIVER',
        'TUNNEL',
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
        'pvRINv',
        'pWvlINA',
        'pvlInv',
        'THvlIn',
        'pvMLInA',
        'pvNLInA',
        'pvFURA',
        'pvFvlA',
        'slvlINA',
    ];
    return gen;
}
function male() {
    let gen = new generic_1.default();
    gen.patterns = [
        'pvRIN',
        'pWvlIN',
        'pvlIN',
        'THvlIN',
        'THvlIM',
        'pvMLI',
        'pvNLI',
        'plxIN',
        'pvFUR',
        'pvFvl',
        'slvlIN',
    ];
    return gen;
}
