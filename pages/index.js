import Head from 'next/head';
import Header from '../components/Header';
import Line from '../components/Line';
import Banner from '../components/Banner';
import Clients from '../components/Clients';
import Articles from '../components/Articles';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col pt-2">
      <Head>
        <title>My Pilot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Line />
      <Banner />
      <Clients />
      <Articles />
      <Footer />
      
    </div>
  )
}
