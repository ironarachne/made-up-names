import * as Words from "@ironarachne/words";
import NameGenerator from "./generator.js";
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
export default class GenericNameGenerator implements NameGenerator {
  name: string;
  patterns: string[];

  constructor() {
    this.name = "generic";
    this.patterns = [];
  }

  generate(numberOfNames: number): string[] {
    const names = [];

    for (let i = 0; i < numberOfNames; i++) {
      let name = Invented.generate(this.patterns);
      name = Words.title(name);
      names.push(name);
    }

    return names;
  }
}
