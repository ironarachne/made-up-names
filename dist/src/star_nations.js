import GenericNameGenerator from "./generic_name_generator.js";
/**
 * A generator for star nation names.
 *
 * @since 0.0.0
 */
export default class StarNationNameGenerator extends GenericNameGenerator {
    constructor(seed = Date.now()) {
        super(seed);
        this.patterns = [
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
    }
}
