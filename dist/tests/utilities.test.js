import { describe, expect, test } from "@jest/globals";
import * as GeneratorSets from "../src/generator_sets";
import * as Cultures from "../src/cultures";
import * as Races from "../src/races";
describe("GeneratorSets utility functions", () => {
    test("all() returns an array of generator sets", () => {
        const sets = GeneratorSets.all();
        expect(Array.isArray(sets)).toBe(true);
        expect(sets.length).toBeGreaterThan(0);
        expect(sets[0]).toHaveProperty("name");
    });
    test("getSetByName returns correct set for culture", () => {
        const set = GeneratorSets.getSetByName("easterling", Cultures.all());
        expect(set).toBeDefined();
        expect(set.name).toBe("easterling");
    });
    test("getSetByName returns correct set for race", () => {
        const set = GeneratorSets.getSetByName("orc", Races.all());
        expect(set).toBeDefined();
        expect(set.name).toBe("orc");
    });
    test("getSetByName throws for missing set", () => {
        expect(() => GeneratorSets.getSetByName("notarealset", Cultures.all())).toThrow();
    });
});
