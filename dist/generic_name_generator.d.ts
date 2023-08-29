import NameGenerator from "./generator.js";
export default class GenericNameGenerator implements NameGenerator {
    name: string;
    patterns: string[];
    constructor();
    generate(numberOfNames: number): string[];
}
