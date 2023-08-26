
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import { appWithTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import Router from "next/router";
import React, { Suspense, useEffect, useState } from "react";
import ReactGA from "react-ga4";
import ScrollToTop from "react-scroll-to-top";
import "../styles/Home.module.css";
import "../styles/fonts.css";
const Header = dynamic(() => import("../components/Header/Header"));
const Footer = dynamic(() => import("../components/Footer/Footer"));
const FooterCopyRights = dynamic(() => import("../components/Footer/FooterCopyRights"));

function App({ Component, pageProps, serverRenderedHeader }) {
  const { locale } = useRouter();

  const theme = createTheme({
    typography: {
      fontFamily: locale === "ar" ? "Tajawal" : "Ample",
      letterSpacing: "0.00938em !important",
      lineHeight: " 1.5 !important",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Raqamyah | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia" />
      </Head>

      <Header />
      {/* <Component {...pageProps} /> */}
      <Component {...pageProps} />
      <Footer />
      <ScrollToTop smooth color="#37A753" />
      <FooterCopyRights />
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
