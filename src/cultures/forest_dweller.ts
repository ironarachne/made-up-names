import NameGenerator from "../generator.js";
import GenericNameGenerator from "../generic_name_generator.js";

/**
 * Forest dweller names are meant to be similar to wood elf names from D&D.
 */
export default {
  name: "forest dweller",
  country: country(),
  culture: culture(),
  family: family(),
  female: female(),
  male: male(),
  town: town(),
};

function culture(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = [
    "(A,O)l(B,G,K)(I,U)l(O,A,E)n",
    "(A,E)(M,N)I(M,N)(I,U)(M,N)pv",
    "(B,G,K)(A,E)Rv(TH,l)ION",
    "vl(M,N)IEL",
    "vl(M,N)v(L,R)ION",
    "vR(I,A)noUR",
    "vNxlION",
    "vNDxRIL",
    "vNDxNE",
    "(A,I,O)RvNxRE",
  ];

  return gen;
}

function country(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = [
    "(A,O)l(B,G,K)(I,U)l(O,A,E)n",
    "(A,E)(M,N)I(M,N)(I,U)(M,N)pv",
    "(B,G,K)(A,E)Rv(TH,l)ION",
    "vl(M,N)IEL",
    "vl(M,N)v(L,R)ION",
    "vR(I,A)noUR",
    "vNxlION",
    "vNDxRIL",
    "vNDxNE",
    "(A,I,O)RvNxRE",
  ];

  return gen;
}

function family(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ["vlpvlvn"];

  let prefixes = [
    "WHITE",
    "GREEN",
    "BLUE",
    "WILD",
    "SUMMER",
    "WINTER",
    "WIND",
    "BEACH",
    "DAWN",
    "DUSK",
    "SKY",
    "NIGHT",
  ];

  let suffixes = [
    "FLOWER",
    "WALKER",
    "SONG",
    "RUNNER",
    "CROWN",
    "BLOSSOM",
    "BELL",
    "WATCHER",
    "GUARD",
    "STAR",
    "GROVE",
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

  gen.patterns = [
    "vlpvlvnA",
    "pvLvDRIEL",
    "pvLvTHRIEL",
    "vlWEN",
    "vlvnwA",
    "vlvnwE",
    "vLLUvn",
    "vsvLME",
    "cvlwEN",
    "vnovMIEL",
    "vlIxN",
  ];

  return gen;
}

function male(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = [
    "vl(D,G,K,B)vlvn",
    "vnvnvnpv",
    "pARv(TH,l)I(O,E)N",
    "vl(M,N)IEL",
    "vlMvRION",
    "vRvnoUR",
    "vNxlION",
    "vN(D,T)xRIL",
    "vN(D,T)xNE",
    "vRvNxRE",
  ];

  return gen;
}

function town(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = [
    "vlpvlvn",
    "vnvnvnpv",
    "pARvTHION",
    "vlMIEL",
    "vlMvRION",
    "vRvnoUR",
    "vNxlION",
    "vNDxRIL",
    "vNDxNE",
    "vRvNxRE",
  ];

  return gen;
}
