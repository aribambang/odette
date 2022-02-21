import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Overlock:wght@700;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Sacramento:wght@400;600&family=Overlock:wght@700;900&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Pernikahan Ayu & Ari. Bekasi, 21 Mei 2022."
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Ayu & Ari" />
          <meta property="og:image" content="/images/og.jpg" />
          <meta
            property="og:description"
            content="Pernikahan Ayu & Ari. Bekasi, 21 Mei 2022."
          />
          <meta property="og:site_name" content="Ayu & Ari" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
