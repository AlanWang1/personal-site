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
