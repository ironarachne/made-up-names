import * as RNG from "@ironarachne/rng";
import * as Invented from "./invented.js";

/**
 * Generates a planet name.
 *
 * @returns {string} The name.
 * @since 0.0.0
 */
export function generate(seed: number = Date.now()): string {
  const random = new RNG.RNG(seed);
  const patterns = [
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

  let name = Invented.generate(patterns, seed)[0];

  const chanceOfOrdinalSuffix = random.int(1, 100);

  if (chanceOfOrdinalSuffix > 85) {
    const number = random.item(["Prime", "II", "Secondus", "III", "IV", "V", "VI", "VII"]);

    name += ` ${number}`;
  }

  return name;
}
