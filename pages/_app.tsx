import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon/" href="/public/favicon.ico" />
      </Head>
      <main className="text-3xl font-mono bg-light">
        <Component {...pageProps} />
      </main>
    </>
  );
}
