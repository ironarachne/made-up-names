import NameGenerator from "./generator.js";

export default interface GeneratorSet {
  name: string;
  culture: NameGenerator;
  country: NameGenerator;
  family: NameGenerator;
  female: NameGenerator;
  male: NameGenerator;
  town: NameGenerator;
}
