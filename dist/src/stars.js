import * as Invented from "./invented.js";
/**
 * Generates a star name.
 *
 * @returns {string} The name.
 * @since 0.0.0
 */
export function generate() {
    const patterns = [
        "pvn",
        "pvnvn",
        "pvnvv",
        "slvnvn",
        "lvfv",
        "lvfvn",
        "tvtv",
        "pvtv+n",
        "pvtv+",
        "pv+c+v",
        "tv+c+v",
        "slv+c+vv",
        "pvnvlv",
        "pvnvlvnv",
        "svnvlvnv",
        "pv+llvlv",
        "pvpvpv+n",
        "slv+c+v+n",
        "slvc+vn",
        "slvc+vnv",
        "slvpvpv",
        "slvpv+pv",
    ];
    return Invented.generate(patterns);
}
