# Fantasy Corpus Notes

This file documents the first-pass seed corpus in `src/research/fantasy-corpus.json`.

## Scope

- The corpus mirrors the six categories in `src/cultures/fantasy.json`.
- Entries are raw source names, not generator patterns.
- The current file is a seed set intended to support later expansion and curation.
- The `male` category now includes a wizard-heavy expansion drawn from major fantasy franchises and should be treated as broad but not exhaustive.
- The `female` category has been broadened with additional names from major fantasy franchises and currently mixes heroic, noble, magical, and adventuring figures.
- The `family` category now includes a broader mix of surnames, dynasties, houses, and clan-style names from major fantasy franchises.
- The `town` category now includes a broader mix of settlements, capitals, ports, and strongholds from major fantasy franchises.
- The `country` category now includes a broader mix of kingdoms, realms, provinces, and nation-scale fantasy places from major franchises.
- The `culture` category now includes a broader mix of demonyms, peoples, orders, and named cultural groups from major fantasy franchises.

## Category Rules

- `culture`: demonyms, peoples, and culturally named groups.
- `country`: kingdoms, realms, provinces, and nation-scale places.
- `family`: surnames, dynasties, clans, houses, and lineage names.
- `female`: given names presented as feminine in the source material.
- `male`: given names presented as masculine in the source material.
- `town`: settlements, keeps, ports, capitals, and named inhabited places.

## Selection Rules

- Favor names that read as broadly traditional fantasy instead of being tightly bound to one franchise voice.
- Keep source variety broad so later pattern extraction does not collapse toward a single setting.
- Prefer names with useful phonetic or compound-name structure over names included only for fame.
- Remove entries later if they prove too iconic or distort category balance.

## Next Pass

- Expand category counts, especially `culture`, `country`, and `town`.
- Track per-franchise balance during additions even if the corpus remains category-first.
- Mark names for exclusion if they are too setting-specific for reusable pattern work.
- Derive phonetic notes from the curated corpus before editing `src/cultures/fantasy.json`.
