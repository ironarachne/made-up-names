import * as Words from "@ironarachne/words";
import * as Invented from "./invented.js";
/**
 * A generic name generator. Can be used when you only need a quick name.
 *
 * @since 0.0.0
 * @example
 * ```typescript
 * import { GenericNameGenerator } from "@ironarachne/made-up-names";
 *
 * const generator = new GenericNameGenerator();
 * generator.patterns = ["kmlMyNmN", "kmlMyNm", "kmTHmk"];
 *
 * const name = generator.generate(1);
 */
export default class GenericNameGenerator {
    name;
    patterns;
    seed;
    constructor(seed = Date.now()) {
        this.name = "generic";
        this.patterns = [];
        this.seed = seed;
    }
    generate(numberOfNames) {
        const names = Invented.generate(this.patterns, this.seed, numberOfNames);
        return names.map(Words.title);
    }
}
