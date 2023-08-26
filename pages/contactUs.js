import { makeStyles } from '@mui/styles';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ReactGA from "react-ga4";
import useTwitterPixel from '../TwitterPixel';
import BaseUrl from '../baseUrl';
const ContactUsBanner = dynamic(() => import('../page-section/ContactUs/ContactUsBanner'));
const ContactUsSection = dynamic(() => import('../page-section/ContactUs/ContactUsSection'));

const useStyles = makeStyles((theme, locale) => ({
  mainSection: {
    backgroundColor: "#EFEFF0",
    marginTop: '110px',
    height: '100% !important',
    overflow: 'hidden',
    padding:'0px 0px 50px 0px',
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
  },
}));

export default function ContactUs(props) {
  const classes = useStyles();
  const { locale } = useRouter();
  const { t } = useTranslation();
  const canonicalUrl = (
    BaseUrl + `${locale}/contactUs`
  );
  const router = useRouter();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/contactUs",});
  }, [router]);
  useTwitterPixel('o7ukz');


  return (
    <div className={classes.mainSection}>
      <Head>
        <title>Contact | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <section>
        <ContactUsBanner />
      </section>
      <section>
        <ContactUsSection />
      </section>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
