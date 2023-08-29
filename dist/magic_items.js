"use strict";
import * as Invented from "./invented.js";
export function generate() {
    const patterns = [
        "cvpv",
        "vc+vc",
        "gvcvc",
        "cvDAR",
        "cvcDRING",
        "cApERI",
        "cvcAcI",
        "cApERv",
        "cvs'gARvc",
    ];
    return Invented.generate(patterns);
}
