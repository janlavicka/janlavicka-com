---
title: "Beat NPM Supply Chain Attacks by Doing Nothing"
description: "Delay installing fresh packages to dodge supply chain attacks."
created: "2026-05-22"
---

Another month, another NPM supply chain attack. The latest one hit [TanStack](https://tanstack.com/blog/npm-supply-chain-compromise-postmortem), where 42 packages were hijacked through a poisoned CI cache and an extracted OIDC token, then republished with malware that harvested cloud credentials and SSH keys.

![I wake up, there's a new supply-chain attack](/images/posts/supply-chain-attack-meme.jpg)

The interesting part is how short the window was. The malicious versions lived for only a few hours before they were deprecated and pulled from the registry. That short window is exactly what we can use to defend ourselves.

## The idea

Most supply chain attacks rely on speed. A malicious version gets published, automated installs and CI pipelines pull it within minutes, and the damage is done long before anyone notices and the package is removed.

So flip it around: refuse to install any version that is less than a few days old. By the time you would touch it, the rest of the ecosystem has already vetted it and the bad releases have been caught and yanked. NPM calls this minimum release age, and as of [NPM 11.10.0](https://docs.npmjs.com/cli/v11/using-npm/config) you can turn it on with a single line.

## How to set it up

Add this to the `.npmrc` in your project root:

```
min-release-age=7
```

The value is in days. NPM now only resolves versions that have been public for at least seven days. Fresh releases are simply invisible to your installs and CI until they have had time to age.

I use seven days. Three is the common minimum floating around, but a week costs me almost nothing and buys a lot more breathing room for an attack to be spotted.

## Other package managers

I only use NPM these days, so this is the setup I actually run. But this isn't unique to NPM. pnpm, Yarn and the rest have their own equivalent, and a quick look through your package manager's documentation will get you there.

One caveat that applies everywhere: this only kicks in at install time. Tools like Renovate and Dependabot decide what to _suggest_ on their own, so set a matching cooldown there too.

## Renovate

I let [Renovate](https://docs.renovatebot.com/) keep my dependencies up to date, and the cooldown matters just as much there. Without it, Renovate would happily open a pull request for a version published minutes ago, no matter what my install gate says.

So the same seven days go into `renovate.json`:

```json
{
  "minimumReleaseAge": "7 days"
}
```

Now Renovate holds a pending status check on any update until the version is a week old, and only then opens the PR. The install gate and the update suggestions stay in sync.

## Conclusion

You can't audit every transitive dependency, and you can't out-react an automated attack. But you can wait. A one-line cooldown turns the attacker's biggest advantage, speed, into your defense, for the price of installing packages a week later than everyone else. That's a trade I'll take every time.
