import Image from 'next/image';
import Reveal from './Reveal';
import FloatingField from './FloatingField';

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/showande-adedayo-789a42195/' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'X', href: 'https://x.com' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink text-paper">
      {/* Top — motion space */}
      <div className="relative overflow-hidden">
        <FloatingField tone="space" className="absolute inset-0 h-full w-full" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 90% at 50% 0%, rgba(10,22,80,0) 0%, rgba(10,22,80,0.55) 55%, rgba(10,22,80,0.92) 100%)',
          }}
          aria-hidden
        />
        <div className="shell relative py-24 md:grid md:grid-cols-12 md:items-center md:gap-8 md:py-36">
          <Reveal className="md:col-span-7">
            <p className="eyebrow text-paper/50">Our approach</p>
            <h2 className="display balance text-4xl md:text-6xl">
              A human-centred approach to digital marketing
            </h2>
            <p className="mt-8 max-w-md font-serif text-xl leading-relaxed text-paper/75">
              Strategy, creative and media under one roof — from your first brief to the final
              report, one team carries the work.
            </p>
            <a
              href="mailto:hello@pilot.studio"
              className="group mt-10 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em]"
            >
              <span className="underline decoration-flame decoration-2 underline-offset-8 transition-colors group-hover:text-flame">
                Learn more
              </span>
              <span
                aria-hidden
                className="transition-transform duration-300 ease-luxe group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </Reveal>

          <Reveal delay={120} className="mt-16 md:col-span-5 md:mt-0">
            <div className="relative mx-auto aspect-[4/5] w-4/5 md:w-full">
              <div
                className="relative h-full w-full overflow-hidden"
                style={{
                  borderRadius: '20px 20px 999px 999px',
                  boxShadow: '0 30px 60px -30px rgba(0, 0, 0, 0.55)',
                }}
              >
                <Image
                  src="/images/footer-portrait.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 80vw, 33vw"
                  className="object-cover"
                />
              </div>
              {/* Paper keyring detail — mirrors the banner arch */}
              <span aria-hidden className="absolute -bottom-6 left-1/2 h-9 w-px bg-paper/40" />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/15">
        <div className="shell py-10 md:py-12">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <p className="text-xs uppercase tracking-[0.22em] text-paper/70 md:col-span-3">
              © {year} Pilot
            </p>

            <div className="flex items-center gap-6 md:col-span-6 md:justify-center">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase tracking-[0.22em] text-paper/80 transition-colors hover:text-flame"
                >
                  {s.label}
                </a>
              ))}
            </div>

            <div className="md:col-span-3 md:text-right">
              <a
                href="#top"
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-paper/80 transition-colors hover:text-flame"
              >
                <span
                  aria-hidden
                  className="transition-transform duration-300 ease-luxe group-hover:-translate-y-0.5"
                >
                  ↑
                </span>
                Back to top
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start gap-2 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
            <span className="display italic tracking-[0.04em] text-3xl md:text-4xl">PILOT</span>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-xs uppercase tracking-[0.22em] text-paper/70">
              <a href="tel:+2348091163372" className="transition-colors hover:text-flame">
                +234 809 116 3372
              </a>
              <a href="mailto:hello@pilot.studio" className="transition-colors hover:text-flame">
                hello@pilot.studio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
