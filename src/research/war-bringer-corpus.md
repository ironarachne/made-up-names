# War Bringer (Orc) Corpus Notes

This file documents the first-pass seed corpus in `src/research/war-bringer-corpus.json`.

## Scope

- The corpus mirrors the six categories in `src/cultures/war_bringer.json`.
- Entries are raw source names, not generator patterns.
- The intent is **orc / horde** flavor: war clans, brutal geography, guttural personal names, and epithet surnames. Iconic franchise spellings were avoided or altered where the seed set risked reading as a single IP’s gazetteer.
- The `culture` category lists tribes and war bands named with weapon, beast, and rage imagery.
- The `country` category uses wastes, fens, marches, and harsh regions at large scale.
- The `family` category mirrors `culture` as clan surnames and war-epithets.
- The `female` and `male` categories use short, often trochaic or abrupt names with frequent K, G, R, and Z sounds.
- The `town` category lists camps, gates, holds, and war settlements.

## Category Rules

- `culture`: hordes, tribes, and named war bands.
- `country`: badlands, fens, and march-scale regions.
- `family`: war clans and epithet surnames.
- `female`: given names in feminine orc-naming tradition for fantasy RPGs.
- `male`: given names in masculine orc-naming tradition.
- `town`: strongholds, camps, and brutalist settlements.

## Selection Rules

- Prefer **hard initials and short rimes**; allow two-syllable names with stress on the first syllable.
- Keep apostrophes out of the JSON unless patterns in `war_bringer.json` explicitly support them.
- When expanding, add original clan and place names alongside any famous-sounding anchors.

## Next Pass

- Revisit `female` vs `male` balance if one list skews too uniform in endings (-a vs -k).
- Derive clan epithet grammar (Noun+Noun, Noun+Verb) from the corpus before updating `src/cultures/war_bringer.json`.
