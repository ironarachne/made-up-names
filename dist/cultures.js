"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.all = void 0;
const elvish_1 = __importDefault(require("./cultures/elvish"));
const fantasy_1 = __importDefault(require("./cultures/fantasy"));
const germanic_1 = __importDefault(require("./cultures/germanic"));
const japanish_1 = __importDefault(require("./cultures/japanish"));
function all() {
    return [new germanic_1.default(), new fantasy_1.default(), new japanish_1.default(), new elvish_1.default()];
}
exports.all = all;
