"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.all = void 0;
const dragonborn_1 = __importDefault(require("./races/dragonborn"));
const dwarf_1 = __importDefault(require("./races/dwarf"));
const elf_1 = __importDefault(require("./races/elf"));
const gnome_1 = __importDefault(require("./races/gnome"));
const halfelf_1 = __importDefault(require("./races/halfelf"));
const halfling_1 = __importDefault(require("./races/halfling"));
const halforc_1 = __importDefault(require("./races/halforc"));
const human_1 = __importDefault(require("./races/human"));
const tiefling_1 = __importDefault(require("./races/tiefling"));
function all() {
    return [
        new dragonborn_1.default(),
        new dwarf_1.default(),
        new elf_1.default(),
        new gnome_1.default(),
        new halfelf_1.default(),
        new halfling_1.default(),
        new halforc_1.default(),
        new human_1.default(),
        new tiefling_1.default(),
    ];
}
exports.all = all;
