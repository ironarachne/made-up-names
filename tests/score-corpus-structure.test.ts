import { resolve } from "node:path";
import { describe, expect, test } from "vitest";
import {
  cosineSimilarity,
  defaultForestDwellerCorpusPath,
  meanLength,
  ngramCounts,
  parseCorpusStructureCliArgs,
  skeletonNgramCosine,
  suffixPoolMatchRate,
  toSkeleton,
} from "../tools/corpus-structure-score.js";

describe("toSkeleton", () => {
  test("maps letters to V and C", () => {
    expect(toSkeleton("Arwen")).toBe("VCCVC");
    expect(toSkeleton("Beleg")).toBe("CVCVC");
  });

  test("strips non-letters", () => {
    expect(toSkeleton("Gil-galad")).toBe("CVCCVCVC");
  });
});

describe("ngramCounts and cosineSimilarity", () => {
  test("identical strings have cosine 1 for bigrams", () => {
    const a = ngramCounts(["VCVC"], 2);
    const b = ngramCounts(["VCVC"], 2);
    expect(cosineSimilarity(a, b)).toBeCloseTo(1, 5);
  });

  test("orthogonal distributions have cosine 0", () => {
    const a = ngramCounts(["VVV"], 2);
    const b = ngramCounts(["CCC"], 2);
    expect(cosineSimilarity(a, b)).toBe(0);
  });
});

describe("skeletonNgramCosine", () => {
  test("matches when structures align", () => {
    const ref = ["Arwen", "Earwen"];
    const gen = ["Idril", "Aerin"];
    const score = skeletonNgramCosine(ref, gen, 2);
    expect(score).toBeGreaterThan(0);
    expect(score).toBeLessThanOrEqual(1);
  });
});

describe("suffixPoolMatchRate", () => {
  test("detects shared suffix skeletons", () => {
    const ref = ["Galadriel"];
    const gen = ["Celebrian"];
    expect(suffixPoolMatchRate(ref, gen, 3)).toBeGreaterThan(0);
  });

  test("returns 0 when no overlap", () => {
    expect(suffixPoolMatchRate(["Abc"], ["Xyz"], 3)).toBe(0);
  });
});

describe("meanLength", () => {
  test("averages grapheme counts", () => {
    expect(meanLength(["ab", "cd"])).toBe(2);
  });
});

describe("defaultForestDwellerCorpusPath", () => {
  test("resolves under cwd", () => {
    expect(defaultForestDwellerCorpusPath()).toBe(
      resolve(process.cwd(), "src/research/forest-dweller-corpus.json"),
    );
  });
});

describe("parseCorpusStructureCliArgs", () => {
  test("defaults corpus path when json omitted", () => {
    const opts = parseCorpusStructureCliArgs(["fantasy", "male", "10", "1"]);
    expect(opts.culture).toBe("fantasy");
    expect(opts.category).toBe("male");
    expect(opts.count).toBe(10);
    expect(opts.seed).toBe(1);
    expect(opts.corpusPath).toBe(defaultForestDwellerCorpusPath());
  });

  test("accepts leading corpus path", () => {
    const opts = parseCorpusStructureCliArgs([
      "./src/research/forest-dweller-corpus.json",
      "fantasy",
      "female",
      "5",
      "2",
    ]);
    expect(opts.corpusPath).toBe(
      resolve(process.cwd(), "./src/research/forest-dweller-corpus.json"),
    );
    expect(opts.count).toBe(5);
  });
});
