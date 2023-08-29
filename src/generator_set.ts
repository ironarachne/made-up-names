"use strict";

import NameGenerator from "./generator.js";
import GenericNameGenerator from "./generic_name_generator.js";

export default class GeneratorSet {
  name: string;
  culture: NameGenerator;
  country: NameGenerator;
  family: NameGenerator;
  female: NameGenerator;
  male: NameGenerator;
  town: NameGenerator;

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
