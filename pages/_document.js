import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta name="google-site-verification" content="YbP5-N7K62A7Ta9HpGrkKbIgxWV1hPS82aAcZ02xoq4" />
      <script
        async
        custom-element="amp-ad"
        src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"
        ></script>
      <amp-ad
        width="100vw"
        height="320"
        type="adsense"
        data-ad-client="ca-pub-7966611751536031"
        data-ad-slot="2750679352"
        data-auto-format="rspv"
        data-full-width=""
        >
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
