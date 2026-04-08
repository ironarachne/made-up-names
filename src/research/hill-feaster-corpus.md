# Hill Feaster (Halfling) Corpus Notes

This file documents the first-pass seed corpus in `src/research/hill-feaster-corpus.json`.

## Scope

- The corpus mirrors the six categories in `src/cultures/hill_feaster.json`.
- Entries are raw source names, not generator patterns.
- The intent is **halfling / hobbit** flavor: shires, farthings, comfortable geography, botanical and homely given names, and well-known fantasy surnames used as research anchors.
- The `culture` category lists community- and clan-style labels with food, plant, and hearth imagery.
- The `country` category mixes broad regional labels (including classic shire-scale names) suitable as nation or macro-region tokens.
- The `family` category draws on familiar halfling surnames from major fantasy lore plus generic compound surnames.
- The `female` and `male` categories mix floral, domestic, and traditional given names; `male` includes several iconic character names as phonetic anchors.
- The `town` category lists settlements from the same broad tradition: villages, crossings, and delvings.

## Category Rules

- `culture`: named communities, kin groups, and cozy cultural labels.
- `country`: shires, farthings, and country-scale halfling regions.
- `family`: surnames and clan-style house names.
- `female`: given names with gentle, botanical, or domestic resonance.
- `male`: given names in the same register, including classic examples from source fiction.
- `town`: halfling-scaled settlements and named places.

## Selection Rules

- Favor **multisyllabic warmth** and soft consonants; avoid orc- or elvish-sharp profiles unless deliberately contrasting.
- When adding names from fiction, treat them as **phonetic anchors**; balance with original compounds so the corpus does not collapse to one author.
- Keep `town` entries settlement-sized; reserve macro regions for `country`.

## Next Pass

- Reduce overlap between `country` and `town` if the same place name appears at two scales.
- Derive hobbit-style syllable and hypocoristic patterns from the corpus before updating `src/cultures/hill_feaster.json`.
