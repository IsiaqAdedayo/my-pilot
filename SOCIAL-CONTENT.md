# Pilot Site — Social Content Calendar (LinkedIn + X)

**What this file is:** a 5-day content plan for launching/sharing the Pilot website rebuild.
Every post below is ready to paste as-is, OR you can feed this whole file to an AI agent
(the agent instructions are in the last section) to rewrite them in your voice.

**Schedule:** Mon → Fri (one post per platform per day). To compress to 3 days, keep
Days 1, 2, 3 and merge Day 5's bug story into Day 4.
**Best posting times:** LinkedIn Tue–Thu 9–11am your local time · X weekday mornings.

---

## 1. Project facts (source of truth — never invent numbers outside this list)

- **Project:** Pilot — a marketing agency website ("A human-centred approach to digital marketing"), rebuilt as an editorial scroll experience.
- **Stack:** Next.js (pages router) + Tailwind CSS 2.2 + `next/font` (self-hosted fonts).
- **Scroll story:** a 210vh runway with a sticky full-screen hero stage; the next section ("Our clients") slides over the pinned hero as a solid card with a shadow edge, and the pin releases at the *exact* scroll position where the card's top edge reaches the viewport top (geometry verified pixel-exact: both at 124.7vh in testing).
- **Signature motif:** a two-line intro rule — deep navy blue left half, signal red right half — echoed as the top border of the Clients section.
- **Typography:** swapped Fraunces → **Instrument Serif** (slim, high-contrast, magazine-style) with Inter for UI text; italic logotype (PILOT) and italic serif "eyebrow" section labels; `text-wrap: balance` on all big headlines.
- **Comparison page:** a `/typography` specimen page rendering the identical headline/logotype/body in Instrument Serif vs Libre Caslon Display, both self-hosted (zero layout shift, no third-party font requests).
- **Motion:** a custom canvas "floating field" component in two tones — ink dots + constellation lines on the light sections, a starfield on the dark footer; pauses when off-screen (IntersectionObserver), respects `prefers-reduced-motion`, DPR capped at 2.
- **Performance:** production build = 4/4 static pages, **85.4 kB shared first-load JS**, fonts self-hosted with `size-adjust` fallbacks (no CLS), images through the Next optimizer.
- **Details:** arch-shaped hero image (rounded top), mirrored inverted arch in the footer, unified 1152px content shell (identical margins on every section), custom SVG + ICO favicon.
- **Bugs hit during the build (real, shareable lessons):**
  1. Tailwind **v2** puts the `!important` modifier at the *end* of a class (`mb-10!`); v3 moved it to the front (`!mb-10`). The wrong order compiles to nothing — the class silently does nothing.
  2. In `next/font`, forgetting the `variable: '--font-caslon'` option means the CSS variable never exists — the specimen silently fell back to Inter until caught via computed styles.
  3. Running `next build` while `next dev` is running corrupts `.next/` (stale chunks, MODULE_NOT_FOUND 500s). Fix: kill dev, `rm -rf .next`, rebuild.

---

## 2. Voice & rules

- **First person**, builder/maker tone. Specific over generic. No "🚀 game-changer" energy.
- **LinkedIn:** hook in the first line (it truncates after ~2 lines behind "see more"), 600–1,200 chars, short paragraphs + line breaks, 2–3 hashtags max at the end, end with a question or invite.
- **X:** ≤ 280 chars per tweet (a link counts as 23). At most 1 hashtag. Screenshots outperform text.
- Never claim metrics not in the facts list. No client names beyond what's already public on the site.
- Image attachments: reference by the shot names in §3.

---

## 3. Image shot list — do this first (~5 minutes)

Capture at **1440×900** browser window, then export at **1600×900 (16:9)** for X
(LinkedIn accepts any ratio; 16:9 works everywhere).

| # | Name | Where | What you should see |
|---|------|-------|---------------------|
| 1 | `01-hero.png` | Home page, at the very top, no scroll | Blue/red signature lines, italic PILOT logo, the big serif headline + arch image |
| 2 | `02-sweep.png` | Home page, console: `window.scrollTo({top: innerHeight*0.747, behavior:'instant'})` | The "Our clients" card sweeping up over the *still-pinned* hero, covering exactly the bottom half |
| 3 | `03-cover.png` | Console: `window.scrollTo({top: innerHeight*1.247, behavior:'instant'})` | Card fully covering the hero — shadow edge + blue/red top border + "OUR CLIENTS" eyebrow visible |
| 4 | `04-footer.png` | Home page, scroll to the bottom | Dark starfield motion space, big serif headline, inverted-arch photo, italic PILOT in the bottom bar |
| 5 | `05-type.png` | `localhost:3000/typography` | Side-by-side Instrument Serif vs Libre Caslon Display specimens |
| 6 | `06-mobile.png` *(optional)* | 390px-wide responsive mode, top of home | Mobile hero with signature lines |

**Optional but high-performing:** a 5–8s screen recording of one continuous scroll from
top → footer (signature lines → pin → card sweep → footer starfield). Export as MP4.
This is the single best asset for both platforms — use it on Day 2.

---

## 4. The calendar

### DAY 1 — The reveal

**LinkedIn**

> I rebuilt a marketing agency website as an editorial scroll experience.
>
> The brief to myself: make scrolling feel like turning pages in a magazine.
>
> What shipped:
>
> — A pinned hero on a 210vh runway. The next section slides over it as a solid card, and the pin releases at the exact pixel where the card reaches the top of the screen.
> — A navy/red signature line that opens the page and reappears as the section border.
> — Instrument Serif for display type: slim, high-contrast, with an italic logotype and italic serif section labels.
> — A custom canvas motion field in two tones — ink dots on light sections, a starfield on the dark footer — that pauses off-screen and respects reduced-motion.
> — Next.js static build: 85.4 kB first-load JS, self-hosted fonts, zero layout shift.
>
> The fun was in the geometry and the typography, not the framework.
>
> Which part should I break down next — the scroll mechanics or the type system?
>
> #NextJS #WebDesign #Typography

**X**

> Rebuilt a marketing site as an editorial scroll experience:
>
> • pinned hero on a 210vh runway
> • next section sweeps over it as a card, pin releases pixel-exact
> • Instrument Serif + italic logotype
> • canvas motion field, 85.4 kB first load
>
> breakdown incoming this week ⬇️

*(attach `01-hero.png`, or the scroll recording if you have it)*

---

### DAY 2 — The scroll interaction (deep dive)

**LinkedIn**

> The scroll transition on the Pilot rebuild gets its own post, because the math was too satisfying not to share.
>
> The hero pins for a 210vh runway. The "Our clients" card is pulled up by 100vh, so its top edge sits 110vh into the runway. Do the arithmetic:
>
> • Pin releases at 110vh of scroll.
> • Card top reaches the viewport top at 110vh of scroll.
>
> Same number — by construction, not by luck. The card sweeps the entire pinned stage and lands fully covered at the exact moment the pin lets go. No gap, no overlap of two frames, no jank.
>
> Two screenshots: mid-sweep (50% covered, hero still pinned) and the landing.
>
> Do you prefer choreographed scroll experiences, or do they annoy you? Honest answers welcome.
>
> #WebDevelopment #CSS

**X**

> scroll transitions are just arithmetic with taste:
>
> runway 210vh − overlap 100vh = pin releases at 110vh
> card top = 110vh
>
> identical by construction → the card covers the hero exactly when the pin lets go. no gap.
>
> *(attach `02-sweep.png` + `03-cover.png` — side by side)*

---

### DAY 3 — Typography

**LinkedIn**

> Swapped the display font on this project and it changed the entire personality of the site.
>
> Before: Fraunces — warm, heavy, a bit literary.
> After: Instrument Serif — slim, high-contrast, high-fashion. It does at weight 400 what the old synthetic thin weight was fighting to do.
>
> The system around it:
>
> — PILOT logotype set in italic with a hair of positive tracking, header and footer.
> — Section labels ("OUR CLIENTS", "ARTICLES") as italic serif eyebrows, uppercase, wide-tracked.
> — `text-wrap: balance` on every big headline so nothing ends on a sad orphan word.
> — Both candidates self-hosted through next/font — no third-party requests, no layout shift.
>
> I built a specimen page rendering the identical headline, logotype and body copy in Instrument Serif vs Libre Caslon Display so the choice could be judged side by side, not imagined.
>
> Instrument Serif won for this layout: Caslon reads heritage-house, this site needed fashion-magazine.
>
> What's your current display serif?
>
> #Typography #WebDesign

**X**

> Fraunces → Instrument Serif and the whole site stopped looking like a blog and started looking like a magazine.
>
> italic PILOT logotype, italic serif eyebrows, balanced headlines, self-hosted via next/font.
>
> side-by-side specimen vs Libre Caslon below 👇
>
> *(attach `05-type.png`)*

---

### DAY 4 — The motion field

**LinkedIn**

> A small custom component doing a lot of quiet work on this build: a canvas "floating field" rendered in two moods.
>
> On the light sections: ink-toned dots with depth layering (darker = deeper, faster = nearer) plus faint constellation lines, fading out at the section edge so it dissolves instead of stopping.
>
> On the dark footer: a starfield with flame-red accents.
>
> The part I care about more than the visuals:
>
> — pauses entirely when scrolled off-screen (IntersectionObserver)
> — paints a static frame and stops under prefers-reduced-motion
> — devicePixelRatio capped at 2 so it stays cheap on high-DPI laptops
> — 90 particles max, one rAF loop, no allocation per frame
>
> Pretty is easy. Pretty that doesn't cost the user anything is the job.
>
> How do you handle canvas animations in production — library or hand-rolled?
>
> #Frontend #WebPerformance

**X**

> hand-rolled canvas motion field for the Pilot rebuild:
>
> ink dots + constellation lines on light sections, starfield on dark
> pauses off-screen, static frame under reduced-motion, dpr ≤ 2, 90 particles max
>
> the boring constraints are what make it shippable
>
> *(attach `04-footer.png` or a short loop recording)*

---

### DAY 5 — Three bugs worth sharing

**LinkedIn**

> Three bugs from this build, in the order they wasted my time:
>
> 1. Tailwind's `!important` modifier moved between v2 and v3 — v2 wants it at the end (`mb-10!`), v3 at the front (`!mb-10`). I wrote the v3 form in a v2 project. The class compiled to nothing, the layout "worked", and the margin silently never applied. Caught it by reading computed styles, not by looking at the page.
>
> 2. In next/font I forgot the `variable` option. The font loaded, the class rendered — and every specimen quietly fell back to Inter because the CSS variable never existed. Same fix: measure, don't eyeball.
>
> 3. Running `next build` while `next dev` was alive corrupted `.next/` — 500s and MODULE_NOT_FOUND from stale chunks. Now: kill dev → rm -rf .next → build → restart. Every time.
>
> Common thread: all three failed *silently*. The page still rendered. Something just wasn't true anymore.
>
> What's the sneakiest silent failure you've hit recently?
>
> #SoftwareEngineering #WebDevelopment

**X**

> 3 silent bugs from this build:
>
> 1. Tailwind v2 wants mb-10! — I wrote v3's !mb-10, compiles to nothing
> 2. forgot variable: in next/font → font loaded, CSS var never existed
> 3. next build while next dev ran → corrupted .next/, 500s
>
> none crashed. they stopped being true.

---

### Optional Day 6/7 — If you need to stretch

**X (single):**

> the site has one idea: a magazine that scrolls.
>
> blue/red rule at the top → pinned hero → card slides over it → starfield footer.
>
> built with next.js + tailwind, 85kb first load.
>
> *(attach `04-footer.png`)*

**LinkedIn:** repost Day 1 with a 30-day-later reflection if you have real numbers by then (Lighthouse, time-on-page) — only if they're measured, per the facts rule.

---

## 5. Feed this to your AI agent

Copy everything in this fenced block as the agent prompt. Attach the image files you
captured from §3 (or tell the agent which shot number goes with which post).

```text
You are the social copywriter for a freelance web developer launching a portfolio
project: "Pilot", a marketing-agency website rebuilt as an editorial scroll
experience (Next.js pages router, Tailwind 2.2, custom canvas animations).

Read the project file SOCIAL-CONTENT.md in full. It contains:
- §1 project facts (the ONLY source of truth — never invent numbers, features, or
  metrics that are not listed there)
- §2 voice rules (first person, specific over generic, no hype words)
- §3 the image shot list — reference images by their shot numbers
- §4 a 5-day calendar with draft posts for LinkedIn and X

TASK: For each day 1–5, produce a FINAL version of the LinkedIn post and the X
post by rewriting the §4 draft in a slightly fresh way — keep every factual claim
identical to §1, keep the same hook and structure, vary the wording. Constraints:
- LinkedIn: 600–1,200 characters, hook in the first line, line breaks between
  short paragraphs, ≤3 hashtags from {#NextJS, #WebDesign, #Typography,
  #WebDevelopment, #Frontend, #WebPerformance, #SoftwareEngineering}, end with a
  question.
- X: ≤280 characters INCLUDING spaces, ≤1 hashtag, no thread unless I ask.
- Output format: one section per day, each with "LinkedIn:" and "X:" followed by
  the post text and a "[Image: 0X-name]" tag where an attachment belongs.
- Never add claims about traffic, clients, revenue, or awards.
If I later give you measurements (Lighthouse score, page views), you may add them
to Day 6 posts as new facts.
```

**Quick variant request examples** (send these after feeding the file):
- "Make Day 1 punchier and cut it to 400 characters for X."
- "Turn Day 2 into a 6-tweet thread with the two screenshots attached to tweet 2."
- "Rewrite Day 3 for a designer audience — fewer build details, more type talk."
- "Give me a Hindi + English mixed version of Days 1 and 3."
