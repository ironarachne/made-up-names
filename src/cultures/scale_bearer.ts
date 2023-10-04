import NameGenerator from "../generator.js";
import GenericNameGenerator from "../generic_name_generator.js";

export default {
  name: "scale bearer",
  country: country(),
  culture: culture(),
  family: family(),
  female: female(),
  male: male(),
  town: town(),
};

function culture(): GenericNameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ["bml+vk", "lvl+vsI(A,E)(R,N)I", "pml+vsI(A,E)(R,N)", "pml+vsI"];

  return gen;
}

function country(): GenericNameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ["pvlvlIA", "lvpvpIA", "vnvlvpA", "vpvlY", "vlxRIA"];

  return gen;
}

function family(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ["vlpvlvn", "ovlMvRvV", "pvRRcYlION", "pvRRcYlIvN", "pvdcYlIvN", "cvRvXIUS"];

  let prefixes = [
    "WHITE",
    "GREEN",
    "BLUE",
    "WILD",
    "SUMMER",
    "WINTER",
    "WIND",
    "DAWN",
    "DUSK",
    "SKY",
    "NIGHT",
    "FIRE",
    "FLAME",
    "RAGE",
    "HAMMER",
    "RED",
    "DARK",
    "SPELL",
    "WAR",
  ];

  let suffixes = ["BLADE", "BROW", "SCALE", "SPEAR", "RIDER", "WALKER", "RUNNER", "TALON"];

  for (let i = 0; i < prefixes.length; i++) {
    for (let j = 0; j < suffixes.length; j++) {
      gen.patterns.push(prefixes[i] + suffixes[j]);
    }
  }

  return gen;
}

function female(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ["tvMvt", "cv+l", "cvlv", "ovRRv", "lAIvNN"];

  return gen;
}

function male(): NameGenerator {
  let gen = new GenericNameGenerator();

  gen.patterns = ["vlKvSIA", "cvLvSAR", "cvlvt", "ovnv+R"];

  return gen;
}

function town(): NameGenerator {
  let gen = new GenericNameGenerator();

  const first = [
    "CLAW",
    "FANG",
    "FIRE",
    "FLAME",
    "RAGE",
    "SCALE",
    "TALON",
    "TORCH",
  ];

  const second = [
    "CLIFF",
    "CRAG",
    "DEEP",
    "DELVE",
    "MOUNTAIN",
    "PEAK",
    "RIDGE",
    "ROCK",
  ];

  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      gen.patterns.push(first[i] + second[j]);
    }
  }

  return gen;
}
