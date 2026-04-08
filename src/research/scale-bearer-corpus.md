# Scale Bearer (Dragon / Dragonborn) Corpus Notes

This file documents the first-pass seed corpus in `src/research/scale-bearer-corpus.json`.

## Scope

- The corpus mirrors the six categories in `src/cultures/scale_bearer.json`.
- Entries are raw source names, not generator patterns.
- The intent blends **draconic epic** naming (elements, flights, maws) with **tabletop dragonborn**-style given names often built from short morphemes.
- The `culture` category lists orders, kin flights, and epithet-heavy group names (fire, storm, void, scale motifs).
- The `country` and `town` categories use peaks, reaches, holds, and gates at macro vs local scale; some tokens differ only by suffix to capture parallel naming habits.
- The `family` category treats bloodlines, flights, and clan epithets as surnames.
- The `female` category uses longer, often polysyllabic invented names with sibilant and vowel-rich shapes.
- The `male` category includes short morpheme-style names common in published dragonborn name lists, plus a few compact invented forms.

## Category Rules

- `culture`: draconic orders, flights, and named kin groups.
- `country`: volcanic ranges, storm coasts, and realm-scale wyrm geography.
- `family`: bloodlines, flight names, and clan epithets.
- `female`: given names with epic or lyrical dragon-adjacent sound.
- `male`: given names with clipped, morpheme-heavy dragonborn flavor.
- `town`: citadels, gates, rests, and lairs as settlements.

## Selection Rules

- Balance **long lyrical** (`female`) and **short punchy** (`male`) so the generator can be scored on both.
- Use elemental vocabulary (ash, frost, thunder, void) but vary roots so n-grams do not overfit one element.
- When expanding, disambiguate `country` vs `town` entries that share the same stem.

## Next Pass

- Reduce stem reuse between `country` and `town` where metrics show collapse.
- Derive morpheme pools and epithet syntax from the corpus before editing `src/cultures/scale_bearer.json`.
