"use strict";
import GenericNameGenerator from "./generic_name_generator.js";
export default class GeneratorSet {
    constructor() {
        this.name = "";
        this.culture = new GenericNameGenerator();
        this.country = new GenericNameGenerator();
        this.family = new GenericNameGenerator();
        this.female = new GenericNameGenerator();
        this.male = new GenericNameGenerator();
        this.town = new GenericNameGenerator();
    }
}
