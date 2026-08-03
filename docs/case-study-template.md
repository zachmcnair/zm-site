# Case-study template

A repeatable scaffold for `app/content/case-studies/*.mdx`. The MDX body already
renders headings, prose, and images — so filling this in requires **no code
changes**. Copy the block below into a study and replace the *italic prompts*.

## The one rule
Lead with the **outcome**, prove the **thinking**, be explicit about **your role**.
A hiring manager should learn *what it was, what you did, and what happened* in the
first 5 seconds, then be able to go deeper. Screenshots show taste; this shows judgment.

## Length & rhythm
- Aim for **~150–350 words of prose** total — a scannable story, not an essay.
- **Every image gets a one-line caption** that says what we're looking at and why it matters. Uncaptioned screenshots are the #1 thing that makes work read as a gallery.
- Front-load. The first sentence is the whole pitch.

## Never
- Never invent metrics. If you don't have a number, describe the tangible change or what the client said. Bracketed `[placeholders]` below mark anything factual — fill or delete them, never ship them.

---

## Copy-paste MDX body

```mdx
---
title: <Project Name>
description: <ONE sharp sentence — what it is + the single biggest result. This is the meta description and the home/portfolio blurb, so make it earn its place.>
tags:
  - <Primary discipline>
  - <Secondary>
client: <Client>
published: true
portfolioItems:
  - src: /portfolio/<hero-image>.webp
    alt: <Client> - <what it shows>
    title: <Project Name>
    metatags:
      - <tag>
    featured: true
    hidden: false
    aspectRatio: wide
    category: <product | brand | music | web3>
---

<!-- HERO / TL;DR — the 5-second read. One or two sentences: what it was,
     what you did, and the most important result. Lead with the punch. -->
<Write the hero line here.>

## The brief
*What was the situation and what had to happen? 2–4 sentences.*
- Who is the client and what stage were they at?
- What was broken, missing, or at stake?
- The constraints you worked inside (timeline, team size, tech, brand, budget).

## My role
*Be explicit about what YOU owned vs. the team — managers scan for exactly this.*
- Your title and scope on this project.
- What you personally led, decided, and made.
- One line on who you partnered with (full credits live at the bottom).

## Approach
*The heart of it — how you thought, not just what shipped. Show 2–4 key decisions,
each with the reasoning/tradeoff behind it, and pair each with a captioned image.*

<Decision 1 — what you did and WHY. What did you weigh?>
![What this shows and why it matters](/portfolio/<image-1>.webp)

<Decision 2 — the next move and the reasoning.>
![What this shows and why it matters](/portfolio/<image-2>.webp)

<Decision 3 — optional.>
![Caption](/portfolio/<image-3>.webp){full}

## Outcome
*The "so what." One concrete result beats none.*
- <Result 1 — a number, a launch, adoption, what it unlocked.>
- <Result 2 — reach, revenue, retention, a first, longevity.>
- <If numbers are private: the tangible change, what it enabled, or a client quote.>

## Reflection *(optional)*
*One honest line — what you'd do differently, or what you learned. Signals seniority.*

## Collaborators
Creative Direction: Zach McNair
<Role: Name>

## Project Images
![alt](/portfolio/<image>.webp){full}
```

---

## Two flavors (same arc, different proof)

Your work splits into two lanes. The skeleton is identical; the **Approach** and
**Outcome** prompts differ.

### Product / platform (ThinkOS, 6079, Wistia, Indeed, Safeclip)
- **Approach:** research insight → design decision → what changed. Show a flow, a
  system, a before/after, a hard tradeoff (e.g. "local-first meant we couldn't rely on X, so…").
- **Outcome:** users, adoption, launch, activation, time saved, a technical/UX first.
  ("Shipped to `[N]` users," "cut onboarding from `[x]` to `[y]`," "first `[thing]` to do `[W]`.")

### Brand / creative (Mutemath, Underoath, Son Lux, Hank & Booth, movie posters)
- **Approach:** the concept/idea → the craft choices → how it carries across touchpoints
  (packaging, tour, merch, video). Show the system, not just one hero shot.
- **Outcome:** cultural reach, sales, the moment, fan response, longevity.
  ("Toured internationally," "sold out `[run]`," "still the identity `[N]` years later.")

---

## Filled example (pattern only — replace every bracket with real facts)

```mdx
<!-- HERO -->
ThinkOS is a local-first operating system for the agentic web — private by default,
but able to give AI agents real access to the blockchain. I owned the design system
and product design end to end, and built the front end. [Launched to N users / in
private beta with N teams].

## The brief
THINK Foundation was building an OS for people who can't send their data to the
cloud, but still want agents that can act on-chain. The hard part: make something
this technical feel calm and trustworthy to non-crypto users — on a [X]-person team,
in [Y] months.

## My role
Design System & Product Design lead and front-end engineer. I set the visual system,
designed the core surfaces (home, apps, memories, settings, claim flow), and shipped
them in code. Partnered with [Product Lead] and [Backend] on architecture.

## Approach
Local-first changed everything, so I designed for "your machine, your keys" first —
the home screen leads with a single calm prompt, not a dashboard of jargon.
![The home surface: one prompt, agent access one tap away](/portfolio/ThinkOS-Browser-Landing.png)

For on-chain actions I hid the complexity behind plain-language confirmations, so a
first-time user never has to read a hash to feel safe.
![The claim flow reduces a multi-step on-chain action to one clear screen](/portfolio/thinkos-claim.png){full}

## Outcome
- [Shipped the OS front end and design system to production].
- [Powered the first N agent claims / onboarded N teams in beta].
- Gave a deeply technical product a UI that [non-crypto testers rated / a partner called] approachable.
```

Note the brackets — that example is a *shape*, not claims about the real project.
Fill them with true facts or cut them.

---

## Rollout (highest leverage first)
1. Rewrite your **top 3** studies with this — pick the ones closest to the role you want (likely ThinkOS, 6079/THINK, and one brand flagship like Mutemath or Underoath).
2. Add captions to every image in those three.
3. Then batch the rest — even just Hero + My role + Outcome per study lifts the whole site.
