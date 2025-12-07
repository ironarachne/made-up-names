import { describe, expect, jest, test } from "@jest/globals";
import * as Cultures from "../src/cultures";
import * as GeneratorSets from "../src/generator_sets";
import * as Races from "../src/races";
jest.useFakeTimers();
const cultureSets = Cultures.all();
const raceSets = Races.all();
describe("race generator sets", () => {
    test("should get the human generator set", () => {
        expect(GeneratorSets.getSetByName("human", raceSets).name).toEqual("human");
    });
    test("should get the tiefling generator set", () => {
        expect(GeneratorSets.getSetByName("tiefling", raceSets).name).toEqual("tiefling");
    });
    test("should get the orc generator set", () => {
        expect(GeneratorSets.getSetByName("orc", raceSets).name).toEqual("orc");
    });
});
describe("culture generator sets", () => {
    test("should get the easterling generator set", () => {
        expect(GeneratorSets.getSetByName("easterling", cultureSets).name).toEqual("easterling");
    });
    test("should get the war bringer generator set", () => {
        expect(GeneratorSets.getSetByName("war bringer", cultureSets).name).toEqual("war bringer");
    });
});
