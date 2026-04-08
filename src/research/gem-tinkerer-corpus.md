# Gem Tinkerer (Gnome) Corpus Notes

This file documents the first-pass seed corpus in `src/research/gem-tinkerer-corpus.json`.

## Scope

- The corpus mirrors the six categories in `src/cultures/gem_tinkerer.json`.
- Entries are raw source names, not generator patterns.
- The intent is a **gnome / tinker** voice: playful compounds, tool- and craft-adjacent roots, and small-scale place names.
- The `culture` category lists guild-like, clan-like, and whimsical kin labels (e.g., gear, spring, gem, lens motifs).
- The `country` and `town` categories use cozy, slightly absurd geography suited to hills, workshops, and fiddly landscapes.
- The `family` category repeats some craft motifs as surnames or house names; many entries echo `culture` phonetically on purpose to stress generator fit to that voice.
- The `female` and `male` categories favor short, bouncy given names and light consonant clusters.

## Category Rules

- `culture`: guilds, tribes, kin groups, and tinkering orders named as proper nouns.
- `country`: whimsical regions and shire-scale realms.
- `family`: house names, clan surnames, and compound craft surnames.
- `female`: given names with a light, quick-footed sound.
- `male`: given names with the same general register as `female`, often equally short.
- `town`: villages, hamlets, and workshop settlements.

## Selection Rules

- Prefer **compound or blended tokens** (two roots jammed together) over single flat syllables when adding entries.
- Keep consonant clusters modest; gnome flavor here leans cute rather than harsh.
- Avoid duplicating the same token across `town` and `country` where it blurs scale; prefer distinct settlement vs region names when expanding.

## Next Pass

- Split or diversify `family` vs `culture` if overlap becomes too high for variety metrics.
- Derive nickname and diminutive patterns from the corpus before editing `src/cultures/gem_tinkerer.json`.
