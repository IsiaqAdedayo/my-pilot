import Image from 'next/image';
import Reveal from './Reveal';

const ARTICLES = [
  {
    title: "What can we learn from Amazon's London Hair Salon?",
    image: '/images/article-salon.jpg',
    featured: true,
  },
  {
    title: 'iOS 14.5: what is all the panic about?',
    image: '/images/article-ios.jpg',
  },
  {
    title: 'Retail media networks: the new growth lever',
    image: '/images/case-retail.jpg',
  },
  {
    title: 'Building a brand that people actually remember',
    image: '/images/case-street.jpg',
  },
];

const ArticleCard = ({ article }) => (
  <Reveal as="article" className="h-full">
    <a href="#articles" className="group flex h-full flex-col" aria-label={`Article: ${article.title}`}>
      <h3 className="text-center text-lg font-bold leading-snug text-ink group-hover:text-flame">
        {article.title}
      </h3>
      <div className="zoom-img relative mt-6 flex-1 overflow-hidden aspect-[4/5]">
        <Image
          src={article.image}
          alt=""
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
    </a>
  </Reveal>
);

const Articles = () => {
  return (
    <section
      id="articles"
      className="shell border-t-2 border-ink py-20 md:py-28"
      aria-label="Articles"
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        {/* Featured article, sticky on desktop */}
        <div className="md:col-span-6">
          <div className="md:sticky md:top-32">
            <Reveal>
              <h2 className="eyebrow">Articles</h2>
              <a href="#articles" className="group mt-8 block" aria-label="Featured article">
                <p className="display balance max-w-md text-3xl text-ink md:text-4xl">
                  {ARTICLES.find((a) => a.featured).title}
                </p>
                <div className="zoom-img relative mt-8 aspect-[3/2] w-full overflow-hidden">
                  <Image
                    src={ARTICLES.find((a) => a.featured).image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </a>
            </Reveal>
          </div>
        </div>

        {/* Grid of smaller articles */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:col-span-6">
          {ARTICLES.filter((a) => !a.featured).map((a) => (
            <ArticleCard key={a.title} article={a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
