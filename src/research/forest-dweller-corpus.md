# Forest Dweller (Elven) Corpus Notes

This file documents the first-pass seed corpus in `src/research/forest-dweller-corpus.json`.

## Scope

- The corpus mirrors the six categories in `src/cultures/forest_dweller.json`.
- Entries are raw source names, not generator patterns.
- The intent is to provide a heavy foundation of traditional High Fantasy Elven phonetics, primarily drawing from J.R.R. Tolkien's languages (Sindarin, Quenya, Silvan) and classic Dungeons & Dragons (e.g., Forgotten Realms elven names).
- The `male` and `female` categories feature prominent elven characters from major lore, focusing on flow, soft consonants, and multiple vowels.
- The `family` category incorporates both canonical patronymics/matronymics (e.g., Oropherion) and translated compound names common in tabletop RPGs (e.g., Greenleaf, Moonwhisper, Sianodel).
- The `town` and `country` categories focus on elven realms, woodland domains, hidden cities, and fey-influenced geography.
- The `culture` category includes various elven clans, kindreds, and scholarly subsets (e.g., Noldor, Sindar, Vanyar).

## Category Rules

- `culture`: kindreds, tribes, scholarly or cultural divisions of elves.
- `country`: mythical realms, ancient forests, elven empires, and grand regions.
- `family`: patronymics, royal houses, and nature-themed surname translations.
- `female`: given names presented as feminine in the source material.
- `male`: given names presented as masculine in the source material.
- `town`: hidden cities, tree-top settlements, havens, and refuges.

## Selection Rules

- Heavily favor Tolkien linguistics to establish the core 'Elven' sound (frequent use of L, R, TH, AE, IE, and I).
- Use D&D elves to diversify the phonetic spread and avoid strict adherence to just one author's work.
- Favor names that have clear vowel clustering (e.g., 'ae', 'ui') and liquid consonants.
- Prefer elegant, flowing structures and nature-associated root words.

## Next Pass

- Expand categories with additional high fantasy properties as needed.
- Derive phonetic notes and syllable tables from the curated corpus before updating the patterns in `src/cultures/forest_dweller.json`.
