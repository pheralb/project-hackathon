import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/Satoshi-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="manifest" href="/manifest.json"></link>
      </Head>
      <body className="bg-midnight font-sans text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
