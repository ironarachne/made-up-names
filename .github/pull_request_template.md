## What changed

<!-- A short description of the change and why it is needed. -->

## Related issue

<!-- e.g. Closes #123. Write "None" if this is not tied to an issue. -->

## Type of change

- [ ] Bug fix (non-breaking)
- [ ] New generator, culture, or pattern (non-breaking)
- [ ] Breaking change (changes existing behavior or the public API)
- [ ] Documentation or tooling only

## Determinism

- [ ] This change does **not** alter the names an existing seed produces.
- [ ] It does alter them, and I have called that out below as a breaking
      change.

<!--
Editing a culture's patterns or word element sets changes every name that
culture generates for every existing seed. That is a major version bump.
See CODE_STYLE.md.
-->

## Name quality

<!-- Only for changes to a culture's patterns or corpus. Delete otherwise. -->

- [ ] `npm run report:culture-quality -- <culture>` was run before and after,
      and the numbers are in the description below.

## Checklist

- [ ] `npm run check` passes locally (lint, typecheck, build, tests).
- [ ] Tests cover the new behavior, including boundaries and thrown errors.
- [ ] TSDoc comments are updated for any changed public API.
- [ ] `README.md` is updated if the public API changed.
- [ ] The change follows [CODE_STYLE.md](../CODE_STYLE.md).
