import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

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
