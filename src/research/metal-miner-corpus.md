# Metal Miner (Dwarf) Corpus Notes

This file documents the first-pass seed corpus in `src/research/metal-miner-corpus.json`.

## Scope

- The corpus mirrors the six categories in `src/cultures/metal_miner.json`.
- Entries are raw source names, not generator patterns.
- The intent is **dwarf / delver** phonetics: hard consonants, underground holds, clan names, and Khuzdul-adjacent or classic fantasy dwarf given names.
- The `culture` category lists kindreds, craft-born groups, and hold traditions (beard, axe, forge, deep, ore motifs).
- The `country` category mixes legendary mountain kingdoms and generic mountain-realm placeholders suitable as large regions.
- The `family` category aligns with clan and house names; many mirror `culture` entries to stress bloodline voice.
- The `female` and `male` categories use short to medium Norse- and fantasy-dwarf-styled given names; the set includes well-known examples from major fantasy lore as anchors.
- The `town` category favors gates, fords, deeps, and hold-style settlement names.

## Category Rules

- `culture`: dwarf kindreds, guilds, and named traditions.
- `country`: mountain realms, deep kingdoms, and large delver regions.
- `family`: clans, houses, and patronymic-style surnames.
- `female`: given names in feminine dwarf naming tradition (often shorter, sometimes shared roots with masculine forms).
- `male`: given names in masculine dwarf naming tradition.
- `town`: holds, gates, fords, and underground or mountainside settlements.

## Selection Rules

- Prefer **stops and velars** (K, G, R, TH where appropriate) and compact syllable count for given names.
- Hyphenated or multiword place names are allowed when they match real corpus examples (e.g., compound strongholds).
- When expanding, add original holds and clans alongside iconic names to preserve breadth.

## Next Pass

- Audit overlap between `country` and `town` (same lexical item at different scales).
- Derive stress and cluster patterns from the corpus before refining `src/cultures/metal_miner.json`.
