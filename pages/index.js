import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Clients from '../components/Clients';
import Articles from '../components/Articles';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-paper">
      <Head>
        <title>Pilot — A human-centred approach to digital marketing</title>
        <meta
          name="description"
          content="Pilot helps brands grow awareness and increase sales. We take a bird's eye view of digital marketing, operating as an extension of your team."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Pilot — Human-centred digital marketing" />
        <meta
          property="og:description"
          content="We help brands grow awareness and increase sales."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/banner-editorial.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <Header />
      <main>
        <Banner />
        <Clients />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}
