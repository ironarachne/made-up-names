import { resolve } from "node:path";
import { balanceGeometricMean1000, balanceLabel, corpusJsonPathForCulture, corpusStructureComposite1000, } from "@/culture-quality-report";
import { scoreNameVariety } from "@/name-variety-score";
import { describe, expect, test } from "vitest";
describe("corpusJsonPathForCulture", () => {
    test("slugifies culture name under src/research", () => {
        expect(corpusJsonPathForCulture("forest dweller")).toBe(resolve(process.cwd(), "src/research/forest-dweller-corpus.json"));
        expect(corpusJsonPathForCulture("Fantasy")).toBe(resolve(process.cwd(), "src/research/fantasy-corpus.json"));
    });
});
describe("corpusStructureComposite1000", () => {
    test("averages three unit scores to 1000", () => {
        expect(corpusStructureComposite1000(1, 1, 1)).toBe(1000);
    });
    test("zeros give 0", () => {
        expect(corpusStructureComposite1000(0, 0, 0)).toBe(0);
    });
});
describe("balanceGeometricMean1000", () => {
    test("full scores give 1000", () => {
        expect(balanceGeometricMean1000(1000, 1000)).toBe(1000);
    });
    test("one zero gives 0", () => {
        expect(balanceGeometricMean1000(1000, 0)).toBe(0);
    });
    test("mid scores", () => {
        expect(balanceGeometricMean1000(400, 900)).toBe(600);
    });
});
describe("balanceLabel", () => {
    test("detects variety-heavy", () => {
        expect(balanceLabel(500, 200)).toBe("variety_heavy");
    });
    test("detects structure-heavy", () => {
        expect(balanceLabel(200, 500)).toBe("structure_heavy");
        expect(balanceLabel(700, 1000)).toBe("structure_heavy");
    });
    test("balanced band", () => {
        expect(balanceLabel(400, 400)).toBe("balanced");
        expect(balanceLabel(730, 1000)).toBe("balanced");
        expect(balanceLabel(720, 1000)).toBe("balanced");
        expect(balanceLabel(710, 1000)).toBe("balanced");
    });
});
describe("scoreNameVariety", () => {
    test("matches prior composite on fixed sample", () => {
        const names = ["Alpha", "Bravo", "Charlie", "Delta", "Echo"];
        const { score, breakdown } = scoreNameVariety(names);
        expect(score).toBeGreaterThan(0);
        expect(breakdown.uniqueNames).toBeGreaterThan(0);
    });
});
