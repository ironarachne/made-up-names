'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generic_1 = __importDefault(require("../generators/generic"));
const generatorset_1 = __importDefault(require("../generatorset"));
class TieflingSet extends generatorset_1.default {
    constructor() {
        super();
        this.family = family();
        this.female = female();
        this.male = male();
    }
}
exports.default = TieflingSet;
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
    return gen;
}
function female() {
    let gen = new generic_1.default();
    gen.patterns = ['vnvlA', 'vnv', 'vdvlvN', 'vlvnA', 'vcnvA', 'cvlvNIA', 'cvlvNA', 'pySSvka'];
    return gen;
}
function male() {
    let gen = new generic_1.default();
    gen.patterns = [
        'vFFlvn',
        'cvclvn',
        'vpvlvn',
        'cvLLvvn',
        'cvlvpul',
        'vppvl',
        'pvspvn',
        'pv+lvn',
        'pvlsvp',
        'pvDRvC',
    ];
    return gen;
}
