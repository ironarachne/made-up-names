import { describe, expect, jest, test } from "@jest/globals";
import { generate } from "../src/invented";

jest.useFakeTimers();

describe("generate", () => {
  test("should return a 'Potato' with the pattern 'POTATO'", () => {
    expect(generate(["POTATO"])).toEqual("Potato");
  });
});
