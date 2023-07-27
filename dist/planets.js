'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const RND = __importStar(require("@ironarachne/rng"));
const Invented = __importStar(require("./invented"));
const random_1 = __importDefault(require("random"));
function generate() {
    let patterns = [
        'avnvs',
        'svavvn',
        'lvfvn',
        'lvc+vn',
        'svc+vvn',
        'svpv',
        'svpvn',
        'svpvs',
        'pvpv',
        'pvpvn',
        'lvpvc+IA',
        'pvlv+n',
        'pvlv+nI',
        'pvlv+nIA',
        'svc+v+n',
        'pvpOOINE',
    ];
    let name = Invented.generate(patterns);
    const chanceOfOrdinalSuffix = random_1.default.int(1, 100);
    if (chanceOfOrdinalSuffix > 85) {
        const number = RND.item(['Prime', 'II', 'Secondus', 'III', 'IV', 'V', 'VI', 'VII']);
        name += ' ' + number;
    }
    return name;
}
exports.generate = generate;
