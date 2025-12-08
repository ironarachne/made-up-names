import { RNG } from "@ironarachne/rng";
import { WordGenerator } from "@ironarachne/word-generator";
import * as Words from "@ironarachne/words";
import easterling from "./cultures/easterling.json";
import fantasy from "./cultures/fantasy.json";
import forestDweller from "./cultures/forest_dweller.json";
import gemTinkerer from "./cultures/gem_tinkerer.json";
import hillFeaster from "./cultures/hill_feaster.json";
import metalMiner from "./cultures/metal_miner.json";
import mudGrubber from "./cultures/mud_grubber.json";
import oldWorlder from "./cultures/old_worlder.json";
import scaleBearer from "./cultures/scale_bearer.json";
import warBringer from "./cultures/war_bringer.json";
/**
 * A base class for name generators.
 */
export class BaseNameGenerator {
    name;
    patterns;
    combinations;
    random;
    wordGenerator;
    /**
     * Creates a new instance of BaseNameGenerator.
     *
     * @param name - The name of the generator.
     * @param patterns - The patterns to use for generation.
     * @param random - The random number generator to use.
     */
    constructor(name, patterns, random) {
        this.name = name;
        this.random = random;
        this.wordGenerator = new WordGenerator(this.random);
        if (Array.isArray(patterns)) {
            this.patterns = patterns;
            this.combinations = [];
        }
        else {
            this.patterns = patterns.patterns || [];
            this.combinations = patterns.combinations || [];
        }
        this.wordGenerator.patterns = this.patterns;
    }
    /**
     * Generates a list of names.
     *
     * @param numberOfNames - The number of names to generate.
     * @returns A list of generated names.
     */
    generate(numberOfNames) {
        const names = [];
        for (let i = 0; i < numberOfNames; i++) {
            names.push(this.generateOne());
        }
        return names.map(Words.capitalize);
    }
    /**
     * Generates a single name.
     *
     * @returns A generated name.
     */
    generateOne() {
        const totalOptions = this.patterns.length + this.combinations.length;
        if (totalOptions === 0)
            return "";
        const choice = this.random.int(0, totalOptions - 1);
        if (choice < this.patterns.length) {
            return this.wordGenerator.generate();
        }
        const combinationIndex = choice - this.patterns.length;
        const combination = this.combinations[combinationIndex];
        let name = "";
        for (const partSet of combination) {
            if (partSet.length > 0) {
                name += this.random.item(partSet);
            }
        }
        return Words.title(name);
    }
}
/**
 * Gets a name generator pattern set for a given culture name.
 *
 * @param name - The name of the culture.
 * @returns The name generator pattern set for the culture.
 * @throws Error if the culture name is unknown.
 */
export function getCultureNamePatternSet(name) {
    switch (name) {
        case "easterling":
            return easterling;
        case "fantasy":
            return fantasy;
        case "forest dweller":
            return forestDweller;
        case "gem tinkerer":
            return gemTinkerer;
        case "hill feaster":
            return hillFeaster;
        case "metal miner":
            return metalMiner;
        case "mud grubber":
            return mudGrubber;
        case "old worlder":
            return oldWorlder;
        case "scale bearer":
            return scaleBearer;
        case "war bringer":
            return warBringer;
        default:
            throw new Error(`Unknown culture name pattern set: ${name}`);
    }
}
/**
 * Gets a name generator for magic items.
 *
 * @param rng - The random number generator to use.
 * @returns A name generator for magic items.
 */
export function getMagicItemNameGenerator(rng = new RNG(Date.now())) {
    const patterns = [
        "cvpv",
        "vc+vc",
        "gvcvc",
        "cvDAR",
        "cvcDRING",
        "cApERI",
        "cvcAcI",
        "cApERv",
        "cvs'gARvc",
    ];
    return new BaseNameGenerator("magic_item", patterns, rng);
}
/**
 * Gets a name generator for model numbers.
 *
 * @param rng - The random number generator to use.
 * @returns A name generator for model numbers.
 */
export function getModelNumberNameGenerator(rng = new RNG(Date.now())) {
    const patterns = ["vc-##", "cvc-##", "cc-###", "ccc-###"];
    return new BaseNameGenerator("model_number", patterns, rng);
}
/**
 * Gets a name generator for a given pattern set.
 *
 * @param name - The name of the generator.
 * @param patterns - The patterns to use for generation.
 * @param rng - The random number generator to use.
 * @returns A name generator for the pattern set.
 */
export function getNameGeneratorForPatternSet(name, patterns, rng = new RNG(Date.now())) {
    return new BaseNameGenerator(name, patterns, rng);
}
/**
 * Gets a name generator for planets.
 *
 * @param rng - The random number generator to use.
 * @returns A name generator for planets.
 */
export function getPlanetNameGenerator(rng = new RNG(Date.now())) {
    const patterns = [
        "avnvs",
        "svavvn",
        "lvfvn",
        "lvc+vn",
        "svc+vvn",
        "svpv",
        "svpvn",
        "svpvs",
        "pvpv",
        "pvpvn",
        "lvpvc+IA",
        "pvlv+n",
        "pvlv+nI",
        "pvlv+nIA",
        "svc+v+n",
        "pvpOOINE",
    ];
    return new BaseNameGenerator("planet", patterns, rng);
}
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
export function getClassicRaceNamePatternSet(name) {
    switch (name) {
        case "dragonborn":
            return getCultureNamePatternSet("scale bearer");
        case "dwarf":
            return getCultureNamePatternSet("metal miner");
        case "elf":
            return getCultureNamePatternSet("forest dweller");
        case "gnome":
            return getCultureNamePatternSet("gem tinkerer");
        case "goblin":
            return getCultureNamePatternSet("mud grubber");
        case "half-elf":
            return getCultureNamePatternSet("fantasy");
        case "half-orc":
            return getCultureNamePatternSet("fantasy");
        case "halfling":
            return getCultureNamePatternSet("hill feaster");
        case "human":
            return getCultureNamePatternSet("old worlder");
        case "orc":
            return getCultureNamePatternSet("war bringer");
        case "tiefling":
            return getCultureNamePatternSet("fantasy");
        case "troll":
            return getCultureNamePatternSet("war bringer");
        default:
            throw new Error(`Unknown classic race name pattern set: ${name}`);
    }
}
/**
 * Gets a name generator for stars.
 *
 * @param rng - The random number generator to use.
 * @returns A name generator for stars.
 */
export function getStarNameGenerator(rng = new RNG(Date.now())) {
    const patterns = [
        "pvn",
        "pvnvn",
        "pvnvv",
        "slvnvn",
        "lvfv",
        "lvfvn",
        "tvtv",
        "pvtv+n",
        "pvtv+",
        "pv+c+v",
        "tv+c+v",
        "slv+c+vv",
        "pvnvlv",
        "pvnvlvnv",
        "svnvlvnv",
        "pv+llvlv",
        "pvpvpv+n",
        "slv+c+v+n",
        "slvc+vn",
        "slvc+vnv",
        "slvpvpv",
        "slvpv+pv",
    ];
    return new BaseNameGenerator("star", patterns, rng);
}
/**
 * Gets a name generator for star nations.
 *
 * @param rng - The random number generator to use.
 * @returns A name generator for star nations.
 */
export function getStarNationNameGenerator(rng = new RNG(Date.now())) {
    const patterns = [
        "pvn",
        "pvnvn",
        "pvnvv",
        "slvnvn",
        "lvfv",
        "lvfvn",
        "tvtv",
        "pvtv+n",
        "pvtv+",
        "pv+c+v",
        "tv+c+v",
        "slv+c+vv",
        "pvnvlv",
        "pvnvlvnv",
        "svnvlvnv",
        "pv+llvlv",
        "pvpvpv+n",
        "slv+c+v+n",
        "slvc+vn",
        "slvc+vnv",
        "slvpvpv",
        "slvpv+pv",
    ];
    return new BaseNameGenerator("star_nation", patterns, rng);
}
