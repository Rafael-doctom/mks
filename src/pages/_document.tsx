/**
 * IMPORTS
 */
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

/**
 * I override the document component default.
 */
class MyDocument extends Document {
  // enables server-side rendering
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    // get styled components
    const sheet = new ServerStyleSheet();

    // get original render page
    const originalRenderPage = ctx.renderPage;

    // override render page properties
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      // get initial properties
      const initialProps = await Document.getInitialProps(ctx);

      // return page properties
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  // render document
  render(): React.ReactElement {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />

          <link rel="icon" type="image/svg" sizes="32x32" href="/logo.svg" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

/**
 * EXPORTS
 */
export default MyDocument;
