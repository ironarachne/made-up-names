"use strict";

import NameGenerator from "./generator.js";

export default class GeneratorSet {
  name: string;
  culture: NameGenerator | null;
  country: NameGenerator | null;
  family: NameGenerator | null;
  female: NameGenerator | null;
  male: NameGenerator | null;
  town: NameGenerator | null;

  constructor() {
    this.name = "";
    this.culture = null;
    this.country = null;
    this.family = null;
    this.female = null;
    this.male = null;
    this.town = null;
  }
}
