# Mud Grubber (Goblin) Corpus Notes

This file documents the first-pass seed corpus in `src/research/mud-grubber-corpus.json`.

## Scope

- The corpus mirrors the six categories in `src/cultures/mud_grubber.json`.
- Entries are raw source names, not generator patterns.
- The intent is **goblin / bog** flavor: harsh, clipped sounds; swamp and refuse imagery; tribe and gang labels.
- The `culture` category lists tribes, bands, and epithet-style group names (rot, muck, skull, pit motifs).
- The `country` and `town` categories use fen, marsh, pit, and gutter geography at region vs settlement scale.
- The `family` category doubles as warren, gang, and clan surnames, often overlapping phonetically with `culture` by design.
- The `female` and `male` categories use very short given names with strong consonants and sometimes grimy or feral connotations.

## Category Rules

- `culture`: tribes, gangs, and named bands.
- `country`: bog-scale regions, fens, and wastelands.
- `family`: warren names, gang surnames, and clan epithets.
- `female`: short given names (sometimes unconventional as everyday human names).
- `male`: short given names with guttural or abrupt endings.
- `town`: holes, pits, ends, and miserable little settlements.

## Selection Rules

- Favor **one or two syllables** for personal names where possible; allow three for exceptional grit.
- Repeat consonants or use clusters (GR, SK, KR) sparingly enough that generated names stay pronounceable.
- When expanding, add variety to `female` and `male` so they do not collapse to a single suffix pattern.

## Next Pass

- Thin exact duplicates across `culture`, `family`, and `country` if variety scores suffer.
- Derive grunt-like and reduplication patterns from the corpus before editing `src/cultures/mud_grubber.json`.
