'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generic_1 = __importDefault(require("../generators/generic"));
const generatorset_1 = __importDefault(require("../generatorset"));
class FantasySet extends generatorset_1.default {
    constructor() {
        super();
        this.name = 'fantasy';
        this.country = country();
        this.culture = culture();
        this.family = family();
        this.female = female();
        this.male = male();
        this.town = town();
    }
}
exports.default = FantasySet;
function culture() {
    let gen = new generic_1.default();
    gen.patterns = ['pmlMyNmN', 'kmlMyNm', 'kyTHmkI', 'pOhRAkI'];
    return gen;
}
function country() {
    let gen = new generic_1.default();
    gen.patterns = ['pvlvlIA', 'lvpvpIA', 'vnvlvpA', 'vpvlY', 'flvnv', 'vfpvlION', 'vlxRIA'];
    return gen;
}
function family() {
    let gen = new generic_1.default();
    gen.patterns = [
        'Apvlnvn',
        'vpvcnvn',
        'vSHlvnp',
        'SnvTH',
        'pvvLOR',
        'kyPER',
        'sLvTCHER',
        'sv(RR,R)IER',
        'pvn(D,T)ElS(E,O)N',
        'pvnDElS',
        'ypSBURG',
        'ypSBERG',
        'vlnvTHION',
        'vpRvHAM',
        'vkLAND',
        'yfpLmND',
        'vcfFORD',
        'vSnFvRD',
    ];
    return gen;
}
function female() {
    let gen = new generic_1.default();
    gen.patterns = ['vnvlA', 'ynA', 'vbvlyN', 'vlvnA', 'vcnvA', 'pvlvNIA', 'tvlvNA', 'pvSSvkA'];
    return gen;
}
function male() {
    let gen = new generic_1.default();
    gen.patterns = [
        'jmB',
        'vFFlvn',
        'evplvn',
        'vpylvn',
        'fvLLyn',
        'fvlvpml',
        'vppvl',
        'pmspvn',
        'pv+lvn',
        'pvlsvp',
        'pvDRvC',
    ];
    return gen;
}
function town() {
    let gen = new generic_1.default();
    const first = [
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
        'Ten',
        'Twin',
        'Triple',
        'Black',
        'White',
        'Blue',
        'Grey',
        'Green',
        'Purple',
        'Red',
        'Yellow',
    ];
    const second = [
        'Barrows',
        'Cliffs',
        'Falls',
        'Hills',
        'Hollows',
        'Mountains',
        'Peaks',
        'Ridges',
        'Rivers',
        'Rocks',
        'Streams',
        'Towers',
        'Trees',
        'Valleys',
        'Waters',
    ];
    for (let i = 0; i < first.length; i++) {
        for (let j = 0; j < second.length; j++) {
            gen.patterns.push(first[i].toUpperCase() + ' ' + second[j].toUpperCase());
        }
    }
    let firstNameGenerator = male();
    let firstNames = firstNameGenerator.patterns;
    firstNameGenerator = female();
    firstNames = firstNames.concat(firstNameGenerator.patterns);
    const suffixes = [
        'Folly',
        'Boon',
        'Rest',
        'Bequest',
        'Garden',
        'Repose',
        'Haven',
        'End',
        'Pass',
        'Forge',
        'Bulwark',
    ];
    for (let i = 0; i < firstNames.length; i++) {
        for (let j = 0; j < suffixes.length; j++) {
            gen.patterns.push(firstNames[i] + "'S " + suffixes[j].toUpperCase());
        }
    }
    let patterns = ['vlpvl', 'tvnv', 'lvpcv'];
    let additions = [
        'arm',
        'bend',
        'borough',
        'bury',
        'don',
        'end',
        'ford',
        'forge',
        'gale',
        'glade',
        'haven',
        'keep',
        'meet',
        'rock',
        'stead',
        'stone',
        'ton',
        'town',
        'vale',
        'ville',
    ];
    for (let i = 0; i < patterns.length; i++) {
        for (let j = 0; j < additions.length; j++) {
            gen.patterns.push(patterns[i] + additions[j].toUpperCase());
        }
    }
    patterns = [
        'Lake',
        'River',
        'Fire',
        'Mountain',
        'Stream',
        'Hill',
        'White',
        'Winter',
        'Fall',
        'Gold',
        'Silver',
        'Copper',
        'Iron',
        'Field',
        'Sky',
        'Summer',
        'Autumn',
        'Spring',
        'Night',
    ];
    additions = [
        'stead',
        'town',
        'bend',
        'bury',
        'ton',
        'vale',
        'borough',
        'haven',
        'keep',
        'meet',
        'forge',
        'gale',
        'stone',
        'rock',
        'glade',
        'ford',
    ];
    for (let i = 0; i < patterns.length; i++) {
        for (let j = 0; j < additions.length; j++) {
            gen.patterns.push(patterns[i].toUpperCase() + additions[j].toUpperCase());
        }
    }
    return gen;
}
