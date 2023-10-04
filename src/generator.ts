export default interface NameGenerator {
  name: string;
  patterns: string[];

  generate: (numberOfNames: number) => string[];
}
