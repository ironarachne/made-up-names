import NameGenerator from "../generator.js";
import GenericNameGenerator from "../generic_name_generator.js";

export default {
  name: "mud grubber",
  country: country(),
  culture: culture(),
  family: family(),
  female: female(),
  male: male(),
  town: town(),
};

function country(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ["pvlvlIA", "lvpvpIA", "vnvlvpA", "vpvlY", "flvnv", "vfpvlION", "vlxRIA"];

  return gen;
}

function culture(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ["pmlMyNmN", "kmlMyNm", "kyTHmkI", "pOhRAkI"];

  return gen;
}

function family(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ["BvdvnS", "pvMpu"];

  const prefixes = [
    "BIG",
    "CRAZE",
    "FEATHER",
    "FLEA",
    "GREASE",
    "HAIRY",
    "HOG",
    "HORN",
    "LONG",
    "OIL",
    "OLD",
    "PUDDING",
    "SLUDGE",
    "SMALL",
    "UGLY",
    "UNDER",
    "WANDER",
  ];

  const suffixes = [
    "BELLY",
    "BOTTOM",
    "BUCKET",
    "DALE",
    "FACE",
    "FOOT",
    "HOUSE",
    "NOSE",
    "STENCH",
    "TOOTH",
    "WART",
  ];

  for (let i = 0; i < prefixes.length; i++) {
    for (let j = 0; j < suffixes.length; j++) {
      gen.patterns.push(prefixes[i] + suffixes[j]);
    }
  }

  return gen;
}

function female(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ["oEOnY", "oEARL", "pELInDA", "mvlvnoA", "plvSovn", "Mvovlpvlo", "pvfvnA"];

  return gen;
}

function male(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ["BvlBvK", "svnwvsENK", "pvPPvnK", "pvlvplvS", "wvnflvo", "pvlnO", "vovlpvRT"];

  return gen;
}

function town(): NameGenerator {
  let gen = new GenericNameGenerator();

  const first = [
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Twin",
    "Triple",
    "Black",
    "White",
    "Blue",
    "Grey",
    "Green",
    "Purple",
    "Red",
    "Yellow",
  ];

  const second = [
    "Barrows",
    "Cliffs",
    "Falls",
    "Hills",
    "Hollows",
    "Mountains",
    "Peaks",
    "Ridges",
    "Rivers",
    "Rocks",
    "Streams",
    "Towers",
    "Trees",
    "Valleys",
    "Waters",
  ];

  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      gen.patterns.push(first[i].toUpperCase() + " " + second[j].toUpperCase());
    }
  }

  return gen;
}
