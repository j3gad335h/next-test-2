import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ReactGA from "react-ga4";
import useTwitterPixel from '../TwitterPixel';
import BaseUrl from '../baseUrl';
const AboutBanner = dynamic(() => import('../page-section/About/AboutBanner'));
const AboutWhoWeAre = dynamic(() => import('../page-section/About/AboutWhoWeAre'));
const AboutTeam = dynamic(() => import('../page-section/About/AboutTeam'));
const FinanicalReports = dynamic(() => import('../page-section/About/FinanicalReports'));
export default function About() {
  const classes = useStyles();
  const { locale } = useRouter();
  const router = useRouter();
  const { t } = useTranslation('common');
  const canonicalUrl = (
    BaseUrl + `${locale}/about`
  );
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/about",});
  }, [router]);
  useTwitterPixel('o7ukz');
  return (
    <div className={classes.mainSection}>
      <Head>
        <title>About | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <section>
        <AboutBanner />
      </section>
      <section className={classes.aboutAboutWhoWeAre}>
        <AboutWhoWeAre />
      </section>
      <section className={classes.aboutAboutTeam}>
        <AboutTeam />
      </section>
      <section>
        <FinanicalReports/>
      </section>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

const useStyles = makeStyles((theme, locale) => ({
  mainSection: {
    backgroundColor: "#EFEFF0",
    marginTop: '110px',
    height: '100% !important',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      backgroundColor: "#EFEFF0",
      marginTop: '110px',
      height: '100% !important',
      overflow: 'hidden',
    },
    [theme.breakpoints.down('sm')]: {
      backgroundColor: "#EFEFF0",
      marginTop: '110px',
      height: '100% !important',
      overflow: 'hidden',
    }
  }
}));