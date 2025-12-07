import { describe, expect, test } from "@jest/globals";
import * as Taverns from "../src/taverns";
import * as Planets from "../src/planets";
import * as MagicItems from "../src/magic_items";
import * as Invented from "../src/invented";
// Deterministic seed for repeatable tests
const SEED = 12345;
describe("Tavern name generator", () => {
    test("generates a tavern name with a seed", () => {
        const name = Taverns.generate(SEED);
        expect(typeof name).toBe("string");
        expect(name.length).toBeGreaterThan(0);
    });
    test("generates the same name for the same seed", () => {
        const name1 = Taverns.generate(SEED);
        const name2 = Taverns.generate(SEED);
        expect(name1).toBe(name2);
    });
});
describe("Planet name generator", () => {
    test("generates a planet name with a seed", () => {
        const name = Planets.generate(SEED);
        expect(typeof name).toBe("string");
        expect(name.length).toBeGreaterThan(0);
    });
    test("generates the same name for the same seed", () => {
        const name1 = Planets.generate(SEED);
        const name2 = Planets.generate(SEED);
        expect(name1).toBe(name2);
    });
});
describe("Magic item generator", () => {
    test("generates a magic item with a seed", () => {
        const item = MagicItems.generate(SEED);
        expect(typeof item).toBe("string");
        expect(item.length).toBeGreaterThan(0);
    });
    test("generates the same item for the same seed", () => {
        const item1 = MagicItems.generate(SEED);
        const item2 = MagicItems.generate(SEED);
        expect(item1).toBe(item2);
    });
});
describe("Invented name generator", () => {
    test("generates a name from a pattern with a seed", () => {
        const patterns = ["POTATO"];
        const names = Invented.generate(patterns, SEED, 1);
        expect(Array.isArray(names)).toBe(true);
        expect(names.length).toBe(1);
        expect(names[0]).toBe("Potato");
    });
    test("generates the same name for the same seed and pattern", () => {
        const patterns = ["POTATO"];
        const names1 = Invented.generate(patterns, SEED, 1);
        const names2 = Invented.generate(patterns, SEED, 1);
        expect(names1[0]).toBe(names2[0]);
    });
});
