import NameGenerator from "@/generator.js";
import GenericNameGenerator from "../generic_name_generator.js";

/**
 * Old worlder names are based on German names.
 */
export default {
  name: "old worlder",
  country: country(),
  culture: culture(),
  family: family(),
  female: female(),
  male: male(),
  town: town(),
};

function culture(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ["kmlMyNmN", "kmlMyNm", "kmTHmk"];

  return gen;
}

function country(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ["pmkLAND", "lyMvNIEN", "evtLAND", "pvtmNIEN", "eynMARK"];

  return gen;
}

function family(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = [
    "ivRSoMANN",
    "SCHnveZLmR",
    "SCHnve",
    "wvnZFRyD",
    "kmnvG",
    "kmnvR",
    "kmnIG",
    "wmnFRyD",
  ];

  return gen;
}

function female(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = [
    "avNNIiER",
    "sAnoRA",
    "sARA",
    "smlInA",
    "imlEN",
    "imlENA",
    "yLnA",
    "bAlIA",
    "hAlIA",
    "wILnA",
    "NAbIA",
    "NmbIA",
    "kARmlINE",
    "vLmNORA",
  ];

  return gen;
}

function male(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = [
    "Mvlk",
    "vRNmn",
    "MmTHIAS",
    "NmkO",
    "kOnRAD",
    "kmnR",
    "oInO",
    "lUoA",
    "LvRs",
    "MvGnUs",
    "Nvo",
  ];

  return gen;
}

function town(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = [
    "vpENBERG",
    "vpmnBERG",
    "vpnSBERG",
    "kvnBERG",
    "pmRpENHEIM",
    "pmRpHEIM",
    "imnENFELD",
    "imRSFELD",
    "vpENBURG",
    "vpmnBURG",
    "vpnSBURG",
    "kvnBURG",
  ];

  return gen;
}
