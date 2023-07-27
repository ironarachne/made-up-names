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
    const nameType = RND.item([
        {
            generate: function () {
                const modelNumberPrefix = RND.item(['Y', 'M', 'R', 'X', 'T', 'S', 'J', 'G', 'H']);
                const modelNumberSuffix = random_1.default.int(1, 9) * 10;
                return `${modelNumberPrefix}-${modelNumberSuffix}`;
            },
        },
        {
            generate: function () {
                const modelNumberPrefix1 = RND.item(['A', 'E', 'I', 'O', 'U']);
                const modelNumberPrefix2 = RND.item(['Y', 'M', 'R', 'X', 'T', 'S', 'J', 'G', 'H']);
                const modelNumberSuffix = random_1.default.int(1, 9) * 10;
                return `${modelNumberPrefix1}${modelNumberPrefix2}-${modelNumberSuffix}`;
            },
        },
        {
            generate: function () {
                const modelNumberPrefix1 = RND.item(['B', 'R', 'X', 'S', 'N']);
                const modelNumberPrefix2 = RND.item(['Y', 'M', 'I', 'K', 'T', 'Q', 'J', 'G', 'H']);
                const modelNumberSuffix = random_1.default.int(1, 99) * 100;
                return `${modelNumberPrefix1}${modelNumberPrefix2}-${modelNumberSuffix}`;
            },
        },
    ]);
    return nameType.generate();
}
exports.generate = generate;
