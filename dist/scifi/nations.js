'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generic_1 = __importDefault(require("../generators/generic"));
class StarNationNameGenerator extends generic_1.default {
    constructor() {
        super();
        this.patterns = [
            'pvn',
            'pvnvn',
            'pvnvv',
            'slvnvn',
            'lvfv',
            'lvfvn',
            'tvtv',
            'pvtv+n',
            'pvtv+',
            'pv+c+v',
            'tv+c+v',
            'slv+c+vv',
            'pvnvlv',
            'pvnvlvnv',
            'svnvlvnv',
            'pv+llvlv',
            'pvpvpv+n',
            'slv+c+v+n',
            'slvc+vn',
            'slvc+vnv',
            'slvpvpv',
            'slvpv+pv',
        ];
    }
}
exports.default = StarNationNameGenerator;
