import { makeStyles } from '@mui/styles';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ReactGA from "react-ga4";
import useTwitterPixel from '../TwitterPixel';
import BaseUrl from '../baseUrl';
const LegalData = dynamic(() => import('../page-section/Legal/LegalData'));

export default function Legal() {
    const classes = useStyles();
    const { locale } = useRouter();
    const canonicalUrl = (
        BaseUrl + `${locale}/legal`
    );
    const router = useRouter();
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: "/legal",});
      }, [router]);
    useTwitterPixel('o7ukz');
    return (
        <div className={classes.mainSection}>
            <Head>
                <title>Legal | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia" />
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <section >
                <LegalData />
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
const useStyles = makeStyles((theme) => ({
    mainSection: {
        backgroundColor: "#fff",
        marginTop: '140px',
        height: '65vh !important',
        overflow: 'hidden',
        padding:'100px 300px 100px 300px',
        [theme.breakpoints.down('md')]: {
            backgroundColor: "#fff",
          marginTop: '140px',
          height: '100% !important',
          overflow: 'hidden',
          padding:'100px 100px 100px 100px',
        },
        [theme.breakpoints.down('sm')]: {
         backgroundColor: "#fff",
         marginTop: '140px',
          height: '100% !important',
          overflow: 'hidden',
          padding:'40px 0px 10px 0px',
        }
      },




}));