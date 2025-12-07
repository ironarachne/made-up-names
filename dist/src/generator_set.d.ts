import NameGenerator from "./generator.js";
/**
 * A set of generators for a culture.
 *
 * @since 0.0.0
 */
export default interface GeneratorSet {
    name: string;
    culture: NameGenerator;
    country: NameGenerator;
    family: NameGenerator;
    female: NameGenerator;
    male: NameGenerator;
    town: NameGenerator;
}
