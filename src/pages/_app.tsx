import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '@/styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Spada - Boilerplate</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/favicon.ico' />
        <meta name='description' content='A simple TypeScript React project' />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
