'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generic_1 = __importDefault(require("../generators/generic"));
const generatorset_1 = __importDefault(require("../generatorset"));
class GermanicSet extends generatorset_1.default {
    constructor() {
        super();
        this.name = 'germanic';
        this.country = country();
        this.culture = culture();
        this.family = family();
        this.female = female();
        this.male = male();
        this.town = town();
    }
}
exports.default = GermanicSet;
function culture() {
    let gen = new generic_1.default();
    gen.patterns = ['kmlMyNmN', 'kmlMyNm', 'kmTHmk'];
    return gen;
}
function country() {
    let gen = new generic_1.default();
    gen.patterns = ['pmkLAND', 'lyMvNIEN', 'evtLAND', 'pvtmNIEN', 'eynMARK'];
    return gen;
}
function family() {
    let gen = new generic_1.default();
    gen.patterns = [
        'ivRSoMANN',
        'SCHnveZLmR',
        'SCHnve',
        'wvnZFRyD',
        'kmnvG',
        'kmnvR',
        'kmnIG',
        'wmnFRyD',
    ];
    return gen;
}
function female() {
    let gen = new generic_1.default();
    gen.patterns = [
        'avNNIiER',
        'sAnoRA',
        'sARA',
        'smlInA',
        'imlEN',
        'imlENA',
        'yLnA',
        'bAlIA',
        'hAlIA',
        'wILnA',
        'NAbIA',
        'NmbIA',
        'kARmlINE',
        'vLmNORA',
    ];
    return gen;
}
function male() {
    let gen = new generic_1.default();
    gen.patterns = [
        'Mvlk',
        'vRNmn',
        'MmTHIAS',
        'NmkO',
        'kOnRAD',
        'kmnR',
        'oInO',
        'lUoA',
        'LvRs',
        'MvGnUs',
        'Nvo',
    ];
    return gen;
}
function town() {
    let gen = new generic_1.default();
    gen.patterns = [
        'vpENBERG',
        'vpmnBERG',
        'vpnSBERG',
        'kvnBERG',
        'pmRpENHEIM',
        'pmRpHEIM',
        'imnENFELD',
        'imRSFELD',
        'vpENBURG',
        'vpmnBURG',
        'vpnSBURG',
        'kvnBURG',
    ];
    return gen;
}
