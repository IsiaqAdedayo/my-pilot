import Image from 'next/image';
import Reveal from './Reveal';
import FloatingField from './FloatingField';

const Banner = () => {
  return (
    <section className="relative" aria-label="Introduction">
      {/* Tall runway: content pins while the user scrolls through.
          210vh pairs with Clients' 100vh overlap so the card fully covers
          the pinned stage exactly when the pin releases. */}
      <div className="relative md:h-[210vh]">
        <div className="md:sticky md:top-0 md:h-screen md:overflow-hidden">
          <div className="relative h-full overflow-hidden">
            {/* Light 3D field behind the hero */}
            <FloatingField tone="ink" className="absolute inset-0 h-full w-full" maxParticles={90} />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(100% 80% at 50% 100%, rgba(252,251,248,0) 0%, rgba(252,251,248,0.65) 70%, rgba(252,251,248,0.95) 100%)',
              }}
              aria-hidden
            />
            <div className="shell relative grid h-full grid-rows-[auto_1fr] gap-6 md:grid-cols-12 md:grid-rows-none md:gap-6">
              {/* Headline column */}
              <div className="flex flex-col justify-center md:col-span-7">
                <Reveal>
                  <div className="rule-pair mb-10 max-w-xs md:hidden">
                    <span />
                    <span />
                  </div>
                  <h1 className="display balance text-5xl text-ink sm:text-6xl lg:text-7xl">
                    We help brands grow awareness and&nbsp;increase sales
                  </h1>
                  <p className="mt-8 hidden max-w-md font-serif text-xl leading-relaxed text-ink/70 md:block">
                    Strategy, creative and media under one roof — a bird&rsquo;s eye view of digital
                    marketing, as an extension of your team.
                  </p>
                  <a
                    href="#clients"
                    className="group mt-10 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-ink"
                  >
                    <span className="underline decoration-flame decoration-2 underline-offset-8 group-hover:text-flame">
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
              </div>

              {/* Hero image column with gentle counter-parallax */}
              <div className="relative flex items-center md:col-span-5">
                <Reveal delay={150} className="w-full">
                  <div
                    className="zoom-img float-y relative mx-auto aspect-[4/5] w-full max-w-sm md:max-w-none"
                    style={{
                      borderRadius: '999px 999px 20px 20px',
                      overflow: 'hidden',
                      boxShadow: '0 30px 60px -30px rgba(10, 22, 80, 0.35)',
                    }}
                  >
                    <Image
                      src="/images/banner-editorial.jpg"
                      alt="Editorial fashion photograph of a brand campaign"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  <span aria-hidden className="mx-auto mb-2 mt-3 block h-9 w-px bg-flame md:hidden" />
                </Reveal>
              </div>
            </div>

            {/* Scroll runway hint */}
            <div
              className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
              aria-hidden
            >
              <div
                className="scroll-hint h-12 w-px"
                style={{ background: 'linear-gradient(to bottom, rgba(10,22,80,0.0), rgba(10,22,80,0.55))' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
