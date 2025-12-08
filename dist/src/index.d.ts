import { RNG } from "@ironarachne/rng";
import { WordGenerator } from "@ironarachne/word-generator";
/**
 * A name generator.
 */
export type NameGenerator = {
    /**
     * The name of the generator.
     */
    name: string;
    /**
     * Generates a list of names.
     *
     * @param numberOfNames - The number of names to generate.
     * @returns A list of generated names.
     */
    generate: (numberOfNames: number) => string[];
};
/**
 * A combination of strings used to generate a name.
 */
export type Combination = string[][];
/**
 * A set of patterns and combinations used to generate names.
 */
export type PatternSet = {
    /**
     * A list of patterns.
     */
    patterns: string[];
    /**
     * A list of combinations.
     */
    combinations?: Combination[];
};
/**
 * A set of name generator patterns for a culture.
 */
export type NameGeneratorPatternSet = {
    /**
     * The name of the pattern set.
     */
    name: string;
    /**
     * Patterns for culture names.
     */
    culture: string[] | PatternSet;
    /**
     * Patterns for country names.
     */
    country: string[] | PatternSet;
    /**
     * Patterns for family names.
     */
    family: string[] | PatternSet;
    /**
     * Patterns for female names.
     */
    female: string[] | PatternSet;
    /**
     * Patterns for male names.
     */
    male: string[] | PatternSet;
    /**
     * Patterns for town names.
     */
    town: string[] | PatternSet;
};
/**
 * A base class for name generators.
 */
export declare class BaseNameGenerator implements NameGenerator {
    name: string;
    patterns: string[];
    combinations: Combination[];
    random: RNG;
    wordGenerator: WordGenerator;
    /**
     * Creates a new instance of BaseNameGenerator.
     *
     * @param name - The name of the generator.
     * @param patterns - The patterns to use for generation.
     * @param random - The random number generator to use.
     */
    constructor(name: string, patterns: string[] | PatternSet, random: RNG);
    /**
     * Generates a list of names.
     *
     * @param numberOfNames - The number of names to generate.
     * @returns A list of generated names.
     */
    generate(numberOfNames: number): string[];
    /**
     * Generates a single name.
     *
     * @returns A generated name.
     */
    private generateOne;
}
/**
 * Gets a name generator pattern set for a given culture name.
 *
 * @param name - The name of the culture.
 * @returns The name generator pattern set for the culture.
 * @throws Error if the culture name is unknown.
 */
export declare function getCultureNamePatternSet(name: string): NameGeneratorPatternSet;
/**
 * Gets a name generator for magic items.
 *
 * @param rng - The random number generator to use.
 * @returns A name generator for magic items.
 */
export declare function getMagicItemNameGenerator(rng?: RNG): NameGenerator;
/**
 * Gets a name generator for model numbers.
 *
 * @param rng - The random number generator to use.
 * @returns A name generator for model numbers.
 */
export declare function getModelNumberNameGenerator(rng?: RNG): NameGenerator;
/**
 * Gets a name generator for a given pattern set.
 *
 * @param name - The name of the generator.
 * @param patterns - The patterns to use for generation.
 * @param rng - The random number generator to use.
 * @returns A name generator for the pattern set.
 */
export declare function getNameGeneratorForPatternSet(name: string, patterns: string[] | PatternSet, rng?: RNG): NameGenerator;
/**
 * Gets a name generator for planets.
 *
 * @param rng - The random number generator to use.
 * @returns A name generator for planets.
 */
export declare function getPlanetNameGenerator(rng?: RNG): NameGenerator;
/**
 * Gets a name generator pattern set for a classic fantasy race.
 *
 * It supports the following values for `name`:
 *
 * - dragonborn
 * - dwarf
 * - elf
 * - gnome
 * - goblin
 * - half-elf
 * - half-orc
 * - halfling
 * - human
 * - orc
 * - tiefling
 * - troll
 *
 * @param name - The name of the race.
 * @returns The name generator pattern set for the race.
 * @throws Error if the race name is unknown.
 */
export declare function getClassicRaceNamePatternSet(name: string): NameGeneratorPatternSet;
/**
 * Gets a name generator for stars.
 *
 * @param rng - The random number generator to use.
 * @returns A name generator for stars.
 */
export declare function getStarNameGenerator(rng?: RNG): NameGenerator;
/**
 * Gets a name generator for star nations.
 *
 * @param rng - The random number generator to use.
 * @returns A name generator for star nations.
 */
export declare function getStarNationNameGenerator(rng?: RNG): NameGenerator;
