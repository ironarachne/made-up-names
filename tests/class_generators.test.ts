import { describe, expect, test } from "@jest/globals";
import StarNationNameGenerator from "../src/star_nations";
import GenericNameGenerator from "../src/generic_name_generator";

const SEED = 54321;

describe("StarNationNameGenerator", () => {
  test("generates a star nation name deterministically", () => {
    const gen = new StarNationNameGenerator(SEED);
    const names1 = gen.generate(1);
    const names2 = new StarNationNameGenerator(SEED).generate(1);
    expect(Array.isArray(names1)).toBe(true);
    expect(names1.length).toBe(1);
    expect(names1[0]).toBe(names2[0]);
    expect(typeof names1[0]).toBe("string");
    expect(names1[0].length).toBeGreaterThan(0);
  });
});

describe("GenericNameGenerator", () => {
  test("generates a generic name deterministically", () => {
    const gen = new GenericNameGenerator(SEED);
    gen.patterns = ["POTATO"];
    const names1 = gen.generate(1);
    const gen2 = new GenericNameGenerator(SEED);
    gen2.patterns = ["POTATO"];
    const names2 = gen2.generate(1);
    expect(Array.isArray(names1)).toBe(true);
    expect(names1.length).toBe(1);
    expect(names1[0]).toBe(names2[0]);
    expect(typeof names1[0]).toBe("string");
    expect(names1[0].length).toBeGreaterThan(0);
  });
});
