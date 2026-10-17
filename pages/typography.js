import Head from 'next/head';
import { Libre_Caslon_Display } from 'next/font/google';

const caslon = Libre_Caslon_Display({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-caslon',
});

/* Editorial New (Pangram Pangram) is NOT on Google Fonts — it is a paid
   license. If you own it, drop the woff2 into /public/fonts and load it with
   next/font/local; the specimen block below is ready to duplicate for it. */

const SPECIMENS = [
  {
    name: 'Instrument Serif',
    note: 'Current — high-contrast, slim, modern editorial',
    familyClass: 'font-serif',
    italicAvailable: true,
  },
  {
    name: 'Libre Caslon Display',
    note: 'Alternative — classic luxury, warmer, lower contrast',
    familyStyle: { fontFamily: `var(--font-caslon), Georgia, serif` },
    italicAvailable: false,
  },
];

const HEADLINE = 'We help brands grow awareness and increase sales';
const LOGOTYPE = 'PILOT';
const BODY =
  'Strategy, creative and media under one roof — a bird’s eye view of digital marketing, as an extension of your team.';

const Specimen = ({ s }) => (
  <div className="rounded-xl border border-ink/10 bg-white/60 p-8 md:p-12">
    <p className="eyebrow">{s.name}</p>
    <p className="mb-10 text-sm text-ink/60">{s.note}</p>

    <p
      className={`display balance text-4xl text-ink md:text-5xl ${s.familyClass || ''}`}
      style={s.familyStyle}
    >
      {HEADLINE}
    </p>

    <div className="mt-12 flex items-baseline gap-8 border-t border-ink/10 pt-8">
      <span
        className={`display italic tracking-[0.04em] text-4xl text-ink ${s.familyClass || ''}`}
        style={s.familyStyle}
      >
        {LOGOTYPE}
      </span>
      <span
        className={`display tracking-[0.04em] text-4xl text-ink ${s.familyClass || ''}`}
        style={s.familyStyle}
      >
        {LOGOTYPE}
      </span>
    </div>

    <p
      className={`mt-10 max-w-xl font-serif text-xl leading-relaxed text-ink/75 ${s.familyClass || ''}`}
      style={s.familyStyle}
    >
      {BODY}
    </p>

    <p
      className={`mt-8 text-lg text-ink/60 ${s.familyClass || ''}`}
      style={s.familyStyle}
    >
      ABCDEFGHIJKLMNOPQRSTUVWXYZ &amp; 1234567890 — @ # € £
    </p>
  </div>
);

export default function Typography() {
  return (
    <div className={`min-h-screen bg-paper ${caslon.variable}`}>
      <Head>
        <title>Type comparison — Instrument Serif vs alternatives</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="shell py-16 md:py-24">
        <a href="/" className="eyebrow mb-10 inline-block hover:text-flame">
          ← Back to site
        </a>

        <h1 className="display balance max-w-3xl text-4xl text-ink md:text-6xl">
          Which display serif best fits Pilot?
        </h1>
        <p className="mt-6 max-w-xl font-serif text-xl leading-relaxed text-ink/70">
          The exact same specimen — headline, logotype (italic + roman), body copy
          and full alphabet — set in each candidate. Both are self-hosted through
          next/font, so there is no layout shift and no third-party request.
        </p>

        <div className="mt-16 grid gap-12">
          {SPECIMENS.map((s) => (
            <Specimen key={s.name} s={s} />
          ))}
        </div>

        <div className="mt-16 max-w-2xl rounded-xl border border-flame/30 bg-flame/5 p-8">
          <p className="eyebrow mb-3 text-flame">Verdict</p>
          <p className="font-serif text-lg leading-relaxed text-ink">
            <strong>Instrument Serif</strong> keeps the slim, high-contrast
            magazine contour that matches the thin-rule editorial layout and the
            blue/red signature lines — it reads contemporary-luxury.{' '}
            <strong>Libre Caslon Display</strong> is warmer and more classical
            (think heritage house rather than fashion magazine); it will look
            heavier at display sizes because of its lower contrast and larger
            x-height.
          </p>
          <p className="mt-4 font-serif text-lg leading-relaxed text-ink">
            <strong>Editorial New</strong> (Pangram Pangram) is not on Google
            Fonts — it is a paid license. If you own it, drop the woff2 into{' '}
            <code className="rounded bg-ink/5 px-1.5 py-0.5 text-sm">/public/fonts</code>{' '}
            and load it with{' '}
            <code className="rounded bg-ink/5 px-1.5 py-0.5 text-sm">
              next/font/local
            </code>
            ; duplicate one Specimen block above for it.
          </p>
        </div>
      </div>
    </div>
  );
}
