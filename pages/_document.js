import React, { useEffect } from "react";
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from "styled-components";
import { ServerStyleSheets } from "@mui/styles";

function MyDocument(props) {
  const { locale, css } = props; // You need to provide `css` from your initial props
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <Html dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
      <Head>
        <link rel="preload" href="/font/Ample-Regular6_0.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/font/Tajawal-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/globalstyle.css" as="style" />

        {/* Your other scripts */}
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Inject your CSS styles into the head */}
        <style id="jss-server-side" dangerouslySetInnerHTML={{ __html: css }} />
      </body>
    </Html>
  );
}
MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const css = sheets.getStyleElement().props.dangerouslySetInnerHTML.__html;
  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    css,
  };
};

export default MyDocument;
