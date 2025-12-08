import {
  getCultureNamePatternSet,
  getClassicRaceNamePatternSet,
  getMagicItemNameGenerator,
  getModelNumberNameGenerator,
  getPlanetNameGenerator,
  getStarNameGenerator,
  getStarNationNameGenerator,
  getNameGeneratorForPatternSet,
  BaseNameGenerator,
} from "@/index";
import { describe, test, expect } from "vitest";

describe("Culture Name Pattern Sets", () => {
  const cultures = [
    "easterling",
    "fantasy",
    "forest dweller",
    "gem tinkerer",
    "hill feaster",
    "metal miner",
    "mud grubber",
    "old worlder",
    "scale bearer",
    "war bringer",
  ];

  test.each(cultures)("should return pattern set for %s", (culture) => {
    const patternSet = getCultureNamePatternSet(culture);
    expect(patternSet).toBeDefined();
    expect(patternSet.name).toBe(culture);
    expect(patternSet.culture).toBeDefined();
    expect(patternSet.country).toBeDefined();
    expect(patternSet.family).toBeDefined();
    expect(patternSet.female).toBeDefined();
    expect(patternSet.male).toBeDefined();
    expect(patternSet.town).toBeDefined();
  });

  test("should throw error for unknown culture", () => {
    expect(() => getCultureNamePatternSet("unknown")).toThrow(
      "Unknown culture name pattern set: unknown"
    );
  });
});

describe("Classic Race Name Pattern Sets", () => {
  const races = [
    "dragonborn",
    "dwarf",
    "elf",
    "gnome",
    "goblin",
    "half-elf",
    "half-orc",
    "halfling",
    "human",
    "orc",
    "tiefling",
    "troll",
  ];

  test.each(races)("should return pattern set for %s", (race) => {
    const patternSet = getClassicRaceNamePatternSet(race);
    expect(patternSet).toBeDefined();
  });

  test("should throw error for unknown race", () => {
    expect(() => getClassicRaceNamePatternSet("unknown")).toThrow(
      "Unknown classic race name pattern set: unknown"
    );
  });
});

describe("Generators", () => {
  test("getMagicItemNameGenerator should return a generator", () => {
    const generator = getMagicItemNameGenerator();
    expect(generator).toBeInstanceOf(BaseNameGenerator);
    expect(generator.name).toBe("magic_item");
    const names = generator.generate(5);
    expect(names).toHaveLength(5);
    names.forEach((name) => expect(typeof name).toBe("string"));
  });

  test("getModelNumberNameGenerator should return a generator", () => {
    const generator = getModelNumberNameGenerator();
    expect(generator).toBeInstanceOf(BaseNameGenerator);
    expect(generator.name).toBe("model_number");
    const names = generator.generate(5);
    expect(names).toHaveLength(5);
    names.forEach((name) => expect(typeof name).toBe("string"));
  });

  test("getPlanetNameGenerator should return a generator", () => {
    const generator = getPlanetNameGenerator();
    expect(generator).toBeInstanceOf(BaseNameGenerator);
    expect(generator.name).toBe("planet");
    const names = generator.generate(5);
    expect(names).toHaveLength(5);
    names.forEach((name) => expect(typeof name).toBe("string"));
  });

  test("getStarNameGenerator should return a generator", () => {
    const generator = getStarNameGenerator();
    expect(generator).toBeInstanceOf(BaseNameGenerator);
    expect(generator.name).toBe("star");
    const names = generator.generate(5);
    expect(names).toHaveLength(5);
    names.forEach((name) => expect(typeof name).toBe("string"));
  });

  test("getStarNationNameGenerator should return a generator", () => {
    const generator = getStarNationNameGenerator();
    expect(generator).toBeInstanceOf(BaseNameGenerator);
    expect(generator.name).toBe("star_nation");
    const names = generator.generate(5);
    expect(names).toHaveLength(5);
    names.forEach((name) => expect(typeof name).toBe("string"));
  });

  test("getNameGeneratorForPatternSet should return a generator", () => {
    const patterns = ["test"];
    const generator = getNameGeneratorForPatternSet("test_gen", patterns);
    expect(generator).toBeInstanceOf(BaseNameGenerator);
    expect(generator.name).toBe("test_gen");
    const names = generator.generate(1);
    expect(names).toHaveLength(1);
    expect(typeof names[0]).toBe("string");
    expect(names[0].length).toBeGreaterThan(0);
  });
});
