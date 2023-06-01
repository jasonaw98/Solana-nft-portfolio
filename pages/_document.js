import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <script
        type="text/javascript"
        src="https://udbaa.com/bnr.php?section=General&pub=782563&format=300x250&ga=g"
      ></script>
      <noscript>
        <a href="https://yllix.com/publishers/782563" target="_blank">
          <img
            src="//ylx-aff.advertica-cdn.com/pub/300x250.png"
            style={{ border: 'none', margin: 0, padding: 0, verticalAlign: 'baseline' }}
            alt="ylliX - Online Advertising Network"
          />
        </a>
      </noscript> */}
      <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
      <amp-ad width="100vw" height="320"
        type="adsense"
        data-ad-client="ca-pub-7966611751536031"
        data-ad-slot="2750679352"
        data-auto-format="rspv"
        data-full-width="">
        <div overflow=""></div>
    </amp-ad>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
