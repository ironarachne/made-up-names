"use strict";

import NameGenerator from "../generator.js";
import GeneratorSet from "../generator_set.js";
import GenericNameGenerator from "../generic_name_generator.js";

export default class HumanSet extends GeneratorSet {
  constructor() {
    super();
    this.name = "human";
    this.family = family();
    this.female = female();
    this.male = male();
  }
}

function family(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = [
    "Apvlnvn",
    "vpvcnvn",
    "vSHlvnp",
    "SnvTH",
    "pvvLOR",
    "pv+PER",
    "sLvTCHER",
    "svRRIER",
    "pvnDElSON",
    "pvnDElS",
    "vvpSBURG",
    "vvpSBERG",
    "vlnvTHION",
    "vpRvHAM",
    "vcpLAND",
    "vcpLvND",
    "vcfFORD",
    "vcnFvRD",
  ];

  return gen;
}

function female(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ["vnvlA", "vnv", "vc+vlvN", "vlvnA", "vcnvA", "cvlvNIA", "cvlvNA", "pySSvka"];

  return gen;
}

function male(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = [
    "vFFlvn",
    "cvclvn",
    "vpvlvn",
    "cvLLvvn",
    "cvlvpul",
    "vp+vl",
    "pvspvn",
    "pulvn",
    "pvlsvp",
    "pvDRvC",
  ];

  return gen;
}
