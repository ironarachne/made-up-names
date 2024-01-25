import NameGenerator from "./generator.js";
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
export default class GenericNameGenerator implements NameGenerator {
    name: string;
    patterns: string[];
    constructor();
    generate(numberOfNames: number): string[];
}
