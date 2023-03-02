import Document, { Html, Head, Main, NextScript } from "next/document";
import test from "tailwindcss/";
class MyDocument extends Document {
  render() {
    return (
      <Html className="text-ink font-serif bg-beige">
        <Head>
          {/* Netlify Widget */}
          <script
            async
            src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐢</text></svg>"
            type="image/svg+xml"
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="title" content="Alan Wang" />
          <meta
            name="description"
            content="Alan Wang is a developer and computer science student at the University of Waterloo, passionate about software engineering, distributed systems, and tech for creatives"
          />

          <meta property="og:title" content="Alan Wang" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://alanwang.xyz" />
          <meta
            property="og:description"
            content="Alan Wang is a developer and computer science student at the University of Waterloo, passionate about software engineering, distributed systems, and tech for creatives"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
          `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
