---
name: release
description: "Cut a release of @ironarachne/made-up-names — bump the version through a pull request, tag main, and verify the tag-driven publish to npm. Use when the user asks to cut, publish, or ship a release, bump the version, or mentions a version number to release."
---

# Releasing @ironarachne/made-up-names

Publishing is **irreversible**. npm never lets a version number be reused, even
after an unpublish. Confirm the version with the user before pushing the tag,
and never push a tag speculatively.

`main` is protected, so the version bump cannot be pushed directly. It goes
through a pull request like any other change. Do not use `npm version` without
`--no-git-tag-version` — it creates the tag locally at the wrong commit, before
the bump has merged.

## Arguments

`/release` takes `patch`, `minor`, `major`, or an explicit version like
`2.5.0`. If none is given, ask which — do not guess from the diff.

Reach for `major` whenever the change alters the names an existing seed
produces, even with no signature change. Editing anything under `src/cultures/`
does exactly that. Adding a brand new culture or generator does not. See
`CODE_STYLE.md` for why that is the contract that matters in this package.

## 1. Preflight

Run these before touching anything. Stop and report if any fails.

```bash
git rev-parse --abbrev-ref HEAD          # must be main
git status --porcelain                   # must be empty
git fetch origin -q && git status -sb    # must not be behind origin/main
npm run check                            # lint, typecheck, build, tests
```

Also confirm the version is actually new:

```bash
npm view @ironarachne/made-up-names versions --json
```

## 2. Bump on a branch

```bash
git checkout -b release/<X.Y.Z>
npm version <X.Y.Z> --no-git-tag-version
git commit -aq -m "chore: release <X.Y.Z>"
git push -u origin release/<X.Y.Z>
```

Open the pull request with `gh pr create --base main`. Summarize what is in the
release; if `src/` is unchanged, say so plainly rather than implying substance.
If culture data changed, include the `report:culture-quality` numbers.

## 3. Merge the bump

Wait for all four required checks — `Lint` and `Test (Node 20.x|22.x|24.x)`:

```bash
until [ "$(gh pr checks <N> --json bucket --jq 'length>0 and all(.[]; .bucket != "pending")')" = "true" ]; do sleep 10; done
gh pr checks <N>
```

Then merge and resync. Keep the merge as its own command — combining it with
local git operations tends to trip the permission classifier.

```bash
gh pr merge <N> --squash --delete-branch
```

```bash
git checkout main -q; git pull -q; node -p "require('./package.json').version"
```

Confirm the printed version matches before continuing.

## 4. Tag

This is the irreversible step. The tag must point at the merged bump commit on
`main`, and must match `package.json` — the workflow's Verify job fails the
release otherwise.

```bash
git tag -a v<X.Y.Z> -m "Release <X.Y.Z>"
git push origin v<X.Y.Z>
```

## 5. Verify

The push triggers `.github/workflows/release.yml`: Verify → Publish to npm →
GitHub Release.

```bash
id=$(gh run list --workflow=release.yml --limit 1 --json databaseId --jq '.[0].databaseId')
until [ "$(gh run view $id --json status --jq .status)" = "completed" ]; do sleep 15; done
gh run view $id --json conclusion,jobs --jq '{conclusion, jobs:[.jobs[]|{name,conclusion}]}'
```

**npm takes 1–2 minutes to propagate.** A registry check immediately after a
successful publish will still show the previous version. That is not a failure
— do not report one. Poll instead:

```bash
for i in $(seq 1 40); do
  v=$(curl -s https://registry.npmjs.org/@ironarachne%2Fmade-up-names | python3 -c "import json,sys;print(json.load(sys.stdin).get('dist-tags',{}).get('latest'))")
  [ "$v" = "<X.Y.Z>" ] && { echo "propagated: $v"; break; }
  sleep 15
done
```

Finally confirm the artifact is genuinely the one that workflow built — the
shasum should match the `npm notice shasum:` line in the publish log, and the
attestation proves the provenance chain:

```bash
curl -s https://registry.npmjs.org/@ironarachne%2Fmade-up-names/<X.Y.Z> \
  | python3 -c "import json,sys; d=json.load(sys.stdin); print(d['dist']['shasum'], d['dist'].get('attestations'))"
gh release view v<X.Y.Z> --json tagName,isDraft,url
```

## When the publish fails

**Do not cut a new version number.** The tag is already pushed and correct;
burning the next version to retry loses nothing but gains nothing either. Fix
the underlying cause and re-run the failed run:

```bash
gh run rerun <id> --failed
```

Verify runs before Publish, so a failure there means nothing was published and
the tag can simply be re-run once fixed. If the tag itself is wrong — pointing
at the wrong commit, or mismatching `package.json` — delete it from both
places (`git push origin :refs/tags/vX.Y.Z`) and redo step 4 correctly.

## Authentication

There is no npm token anywhere in this repository, and none should be added.
The publish job authenticates over OIDC against the trusted publisher
configured on npmjs.com for `release.yml` and the `release` environment.
`CONTRIBUTING.md` documents the exact field values.

If a publish fails with an auth error, the cause is the trusted publisher
config or the npm version on the runner — npm 11.5.1+ is required, which is
why the publish job pins Node 24.x while the test matrix spans 20/22/24. Adding
a token is the wrong fix.
