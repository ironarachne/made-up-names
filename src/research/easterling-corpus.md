# Easterling Corpus Notes

This file documents the first-pass seed corpus in `src/research/easterling-corpus.json`.

## Scope

- The corpus mirrors the six categories in `src/cultures/easterling.json`.
- Entries are raw source names, not generator patterns.
- The intent is to anchor the culture in **Japanese romanization flavor**: regions and historic province names, common surnames, and given names in Hepburn-style Latin script (no kana in the corpus).
- The `culture` category mixes geographic, historic, and broad regional labels that read as in-world divisions rather than modern prefecture codes alone.
- The `country` category uses realm- and province-scale names (historic or romanized place roots) suitable as nation or large region labels.
- The `family` category lists frequent Japanese surnames as research anchors for syllable weight and mora-like rhythm in Latin letters.
- The `female` and `male` categories are given names common in romanized form; they skew toward recognizable shapes for scoring generator output, not exhaustive census coverage.
- The `town` category uses city and notable settlement names in romanized form.

## Category Rules

- `culture`: regional, historic, or broad ethnic-style labels (in-world divisions).
- `country`: large regions, provinces, or realm-scale geography names.
- `family`: surnames (family names) in romanized Japanese.
- `female`: given names presented as feminine in typical usage.
- `male`: given names presented as masculine in typical usage.
- `town`: settlements: cities, towns, and named localities.

## Selection Rules

- Prefer **ASCII-friendly romanization** so V/C skeleton scoring in tooling behaves predictably; avoid macrons unless the project later extends skeleton heuristics.
- Favor a mix of short and medium lengths to capture open syllables and common endings (-ko, -o, -a, -i patterns where natural).
- Keep lists curated: expand with additional romanized names rather than dumping huge frequency tables.

## Next Pass

- Add more given names and surnames if pattern tuning needs finer gender or length balance.
- Derive syllable or mora-oriented notes from the corpus before tightening patterns in `src/cultures/easterling.json`.
