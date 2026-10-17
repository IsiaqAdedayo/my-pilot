import Image from 'next/image';
import Reveal from './Reveal';

const CASE_STUDIES = [
  {
    name: 'Commercial Bay',
    blurb: "Our work with Commercial Bay to become Auckland's top food & retail precinct.",
    image: '/images/case-retail.jpg',
  },
  {
    name: 'Christopher Esber',
    blurb: 'We helped Christopher develop its direct-to-customer sales channel.',
    image: '/images/case-fashion.jpg',
  },
  {
    name: 'Mina',
    blurb: 'We helped Mina become the top-of-mind ethical option.',
    image: '/images/case-craft.jpg',
  },
  {
    name: 'Tosca & Salome',
    blurb: 'Our work with boho-inspired boutique Tosca & Salome.',
    image: '/images/case-street.jpg',
  },
  {
    name: 'Caughley',
    blurb: 'We helped Caughley solidify its position as top womens wear boutique.',
    image: '/images/case-boutique.jpg',
  },
];

const Clients = () => {
  return (
    <section
      id="clients"
      className="cover-card relative z-10 -mt-[45vh] bg-paper shadow-[0_-40px_80px_-60px_rgba(10,22,80,0.45)] md:-mt-[100vh]"
      aria-label="Our clients"
    >
      {/* Top edge carries the blue/red signature pair from the intro */}
      <div className="shell">
        <div className="rule-pair" aria-hidden>
          <span />
          <span />
        </div>
      </div>
      <div className="shell grid gap-10 py-20 md:grid-cols-12 md:py-28">
      {/* Sticky intro column */}
      <div className="md:col-span-7">
        <div className="md:sticky md:top-32">
          <Reveal>
            <p className="eyebrow">Our clients</p>
            <h2 className="display balance max-w-xl text-4xl text-ink md:text-5xl">
              We take a bird&rsquo;s eye view of digital marketing, operating as an extension of your
              team
            </h2>
            <div className="mt-12 flex gap-10">
              <a
                href="#clients"
                className="text-sm font-bold uppercase tracking-[0.2em] text-ink underline decoration-flame decoration-2 underline-offset-8 hover:text-flame"
              >
                How we help
              </a>
              <a
                href="#articles"
                className="text-sm font-bold uppercase tracking-[0.2em] text-ink underline decoration-flame decoration-2 underline-offset-8 hover:text-flame"
              >
                Our clients
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Case studies column */}
      <div className="md:col-span-5">
        <ul className="space-y-24">
          {CASE_STUDIES.map((cs, i) => (
            <Reveal as="li" key={cs.name} delay={i % 2 ? 100 : 0}>
              <a href="#clients" className="group block" aria-label={`Case study: ${cs.name}`}>
                <div className="zoom-img relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={cs.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 text-center text-lg font-bold text-ink group-hover:text-flame">
                  {cs.name}
                </h3>
                <p className="mx-auto mt-2 max-w-sm text-center font-serif text-lg leading-relaxed text-ink">
                  {cs.blurb}
                </p>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
      </div>
    </section>
  );
};

export default Clients;
