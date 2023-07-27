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
const random_1 = __importDefault(require("random"));
function generate() {
    let name = 'The ';
    const adjectiveChance = random_1.default.int(0, 100);
    if (adjectiveChance > 60) {
        name += RND.item(adjectives()) + ' ';
    }
    name += RND.item(nouns());
    return name;
}
exports.generate = generate;
function adjectives() {
    return [
        'Blue',
        'Red',
        'Green',
        'White',
        'Black',
        'Gold',
        'Ivory',
        'Steel',
        'Iron',
        'Old',
        'Little',
        'Fat',
        'Laughing',
        'Growling',
        'Chortling',
        'Dancing',
    ];
}
function nouns() {
    return [
        'Dolphyn',
        'Griffin',
        'Dragon',
        'Wyvern',
        'Wolf',
        'Boar',
        'Pannier',
        "King's Head",
        'Pot',
        "Horse's Head",
        "Ram's Head",
        'Crane',
        'Cony',
        'Ball',
        'Basket',
        'Cross',
        'Cup',
        'Garland',
        'Gate',
        'Hammer',
        'Lattice',
        'Rose',
        'Ship',
        'Mare',
        'Sheep',
        'Pig',
    ];
}
