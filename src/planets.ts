"use strict";

import * as RND from "@ironarachne/rng";
import * as Invented from "./invented.js";

import random from "random";

export function generate(): string {
  let patterns = [
    "avnvs",
    "svavvn",
    "lvfvn",
    "lvc+vn",
    "svc+vvn",
    "svpv",
    "svpvn",
    "svpvs",
    "pvpv",
    "pvpvn",
    "lvpvc+IA",
    "pvlv+n",
    "pvlv+nI",
    "pvlv+nIA",
    "svc+v+n",
    "pvpOOINE",
  ];

  let name = Invented.generate(patterns);

  const chanceOfOrdinalSuffix = random.int(1, 100);

  if (chanceOfOrdinalSuffix > 85) {
    const number = RND.item(["Prime", "II", "Secondus", "III", "IV", "V", "VI", "VII"]);

    name += " " + number;
  }

  return name;
}
