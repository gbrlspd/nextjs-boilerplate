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
        <link rel='manifest' href='/manifest.json' />
        <meta name='description' content='A simple TypeScript React project' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
