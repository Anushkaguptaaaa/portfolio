import '../src/styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Anushka Gupta - Full-Stack & App Developer Portfolio" />
        <title>Anushka Gupta | Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
