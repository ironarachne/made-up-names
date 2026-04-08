# Old Worlder (Germanic) Corpus Notes

This file documents the first-pass seed corpus in `src/research/old-worlder-corpus.json`.

## Scope

- The corpus mirrors the six categories in `src/cultures/old_worlder.json`.
- Entries are raw source names, not generator patterns.
- The intent is **German and broader Germanic** flavor in Latin script: historic regions, cities, common surnames, and given names (romanized spellings without umlauts where the JSON uses ASCII for tooling consistency).
- The `culture` category lists regional and ethnic-style labels (Bavarian, Saxon, and similar demonym-like tokens as proper nouns).
- The `country` category uses Länder-scale and historic realm names suitable as large regions.
- The `family` category lists frequent German surnames as spelled in international or ASCII forms (Mueller, Schroeder, etc.).
- The `female` and `male` categories are traditional given names common in German-speaking contexts.
- The `town` category uses well-known cities and historic towns in Latin spelling.

## Category Rules

- `culture`: regional peoples and historic group labels as name-like tokens.
- `country`: large regions, historic states, and realm-scale geography.
- `family`: surnames (family names).
- `female`: given names presented as feminine in typical usage.
- `male`: given names presented as masculine in typical usage.
- `town`: cities and notable towns.

## Selection Rules

- Prefer **ASCII spellings** in the corpus file to match current skeleton heuristics; note true orthography in this Markdown if needed for future IPA work.
- Mix stem lengths so compound surname patterns (Schmidt, Zimmermann) appear alongside shorter roots.
- Add Austrian, Swiss, or Low German variants sparingly when expanding to widen vowel profiles.

## Next Pass

- Introduce umlaut-equivalent forms consistently (ae/oe/ue vs stripped vowels) if the scorer gains better Unicode vowel handling.
- Derive compound-surname and diminutive patterns from the corpus before updating `src/cultures/old_worlder.json`.
