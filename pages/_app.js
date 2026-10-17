import { Instrument_Serif, Inter } from 'next/font/google';
import '../styles/globals.css';

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-sans',
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${instrument.variable} ${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
