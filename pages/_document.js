import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta property="og:title" content="Anushka Gupta | Portfolio" />
        <meta property="og:description" content="Full-Stack & App Developer Portfolio" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
