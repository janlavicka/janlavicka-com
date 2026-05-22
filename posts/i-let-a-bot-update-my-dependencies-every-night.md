---
title: "I Let a Bot Update My Dependencies Every Night"
description: "Swap Dependabot for Renovate with a scheduled workflow and a personal token."
created: "2025-08-25"
---

Dependabot ships with GitHub and gets the basics done, but the moment I wanted grouped updates and lock file maintenance, I started fighting it. So I moved this site to [Renovate](https://docs.renovatebot.com/), running it self-hosted on GitHub Actions. No app to install, no third party touching the repo beyond a token I control.

## Why Renovate

A few things Dependabot either can't do or makes painful:

- **More than npm**: it updates Docker images, GitHub Actions and more, not just my package dependencies.
- **Grouping**: related packages land in one pull request instead of ten.
- **Lock file maintenance**: the lock file gets refreshed on a schedule, not only when a dependency bumps.
- **One config file**: everything lives in `renovate.json`, version-controlled and easy to reason about.

## The workflow

I run Renovate as a scheduled action. Create `.github/workflows/renovate.yaml`:

```yaml
name: Renovate Updates

on:
  schedule:
    - cron: "0 0 * * *"
  workflow_dispatch:

jobs:
  renovate:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v6

      - name: Self-hosted Renovate
        uses: renovatebot/github-action@v46.1.14
        with:
          configurationFile: renovate.json
          token: ${{ secrets.RENOVATE_TOKEN }}
```

It runs once a day, and `workflow_dispatch` lets me kick it off by hand whenever I want.

## The token

This is the part that trips people up. The built-in `GITHUB_TOKEN` won't do, because pull requests it opens don't trigger other workflows, so your CI would never run on a Renovate PR.

The fix is a personal access token. Create one with read and write access to the repository's contents and pull requests, then add it as a repository secret named `RENOVATE_TOKEN` under Settings → Secrets and variables → Actions. Now Renovate authenticates as me, and its PRs trigger CI like any other.

## The config

Finally, `renovate.json` ties it together:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["config:recommended", "group:monorepos"],
  "repositories": ["janlavicka/janlavicka-com"],
  "labels": ["dependencies"],
  "automerge": false,
  "dependencyDashboard": false,
  "lockFileMaintenance": {
    "enabled": true
  },
  "vulnerabilityAlerts": {
    "enabled": true
  }
}
```

`config:recommended` is a sane baseline and `group:monorepos` keeps monorepo bumps together. I leave `automerge` off because I like eyeballing updates myself.

## Conclusion

It's a bit more setup than flipping on Dependabot, but you do it once and end up with dependency updates that fit how you actually work: grouped, scheduled, and on your terms.
