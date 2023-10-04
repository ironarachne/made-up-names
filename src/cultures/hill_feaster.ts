import NameGenerator from "../generator.js";
import GenericNameGenerator from "../generic_name_generator.js";

export default {
  name: "hill feaster",
  country: country(),
  culture: culture(),
  family: family(),
  female: female(),
  male: male(),
  town: town(),
};

function culture(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ["pmlMy", "pmlMyN", "w(m,y)e(IE,Y)", "vpvlY"];

  return gen;
}

function country(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ["evlvlIA", "lvevk+IA", "vnmlvbA", "vlxRIA"];

  return gen;
}

function family(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ["BvdvnS", "pvMpu"];

  const prefixes = [
    "BRANDY",
    "FEATHER",
    "HAIRY",
    "HOG",
    "HORN",
    "LITTLE",
    "LONG",
    "OAK",
    "OLD",
    "PROUD",
    "PUDDI",
    "SWIFT",
    "UNDER",
    "WANDER",
    "WHIT",
  ];

  const suffixes = ["BELLY", "BOTTOM", "DALE", "FOOT", "HOUSE", "PEN", "WOOD", "WORT"];

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

  gen.patterns = ["BvlBv", "svnwvsE", "pvPPvn", "pvlvplvn", "wvnflvo", "pvlnO", "vovlpvRT"];

  return gen;
}

function town(): NameGenerator {
  let gen = new GenericNameGenerator();

  const first = [
    "Autumn",
    "Better",
    "Gold",
    "Green",
    "Jolly",
    "Spring",
    "Summer",
    "Warm",
    "White",
  ];

  const second = [
    "Falls",
    "Ford",
    "Glade",
    "Haven",
    "Hill",
    "Hollow",
    "Home",
    "Lodge",
    "Meadow",
    "Shire",
    "Top",
    "Wood",
  ];

  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      gen.patterns.push(first[i].toUpperCase() + " " + second[j].toUpperCase());
      gen.patterns.push(first[i].toUpperCase() + second[j].toUpperCase());
    }
  }

  return gen;
}
