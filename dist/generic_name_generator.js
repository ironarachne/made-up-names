"use strict";
import * as Words from "@ironarachne/words";
import * as Invented from "./invented.js";
export default class GenericNameGenerator {
    constructor() {
        this.name = "generic";
        this.patterns = [];
    }
    generate(numberOfNames) {
        let names = [];
        for (let i = 0; i < numberOfNames; i++) {
            let name = Invented.generate(this.patterns);
            name = Words.title(name);
            names.push(name);
        }
        return names;
    }
}
