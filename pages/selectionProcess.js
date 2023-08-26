import { makeStyles } from '@mui/styles';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ReactGA from "react-ga4";
import useTwitterPixel from '../TwitterPixel';
import BaseUrl from '../baseUrl';
const SelectionProcessSection = dynamic(() => import('../page-section/SelectionProcess/SelectionProcessSection'));

export default function SelectionProcess() {
    const classes = useStyles();
    const { locale } = useRouter();
    const canonicalUrl = (
        BaseUrl + `${locale}/selectionProcess`
    );
    const router = useRouter();
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: "/selectionProcess",});
      }, [router]);
    useTwitterPixel('o7ukz');
    return (
        <div className={classes.mainSection}>
        <Head>
            <title>Selection Process | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia" />
            <link rel="canonical" href={canonicalUrl} />
        </Head>
            <section >
                <SelectionProcessSection />
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
        marginTop: '110px',
        height: '100% !important',
        overflow: 'hidden',
        padding:'75px 0px 50px 0px',
        [theme.breakpoints.down('md')]: {
            backgroundColor: "#fff",
          marginTop: '110px',
          height: '100% !important',
          overflow: 'hidden',
        },
        [theme.breakpoints.down('sm')]: {
            padding:'35px 20px 35px 20px',
            backgroundColor: "#fff",
          marginTop: '110px',
          height: '100% !important',
          overflow: 'hidden',
        }
      },

}));