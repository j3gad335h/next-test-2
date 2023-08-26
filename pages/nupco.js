import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import ReactGA from "react-ga4";
import useTwitterPixel from '../TwitterPixel';
import BaseUrl from '../baseUrl';
const NupcoBanner = dynamic(() => import('../page-section/Nupco/NupcoBanner'));
const NupcoEaseOfApply = dynamic(() => import('../page-section/Nupco/NupcoEaseOfApply'));
const NupcoForm = dynamic(() => import('../page-section/Nupco/NupcoForm'));

export default function Nupco() {
  const classes = useStyles();
  const router = useRouter();
    const {locale,push  } = useRouter();
  const { t } = useTranslation('common');
  const yourRef1 = useRef();
  if (typeof window !== "undefined") {
    var prevPath = new window.URL(document.location);
    let token = prevPath.pathname.split("/")[1];
    console.log(token, "test");
    if (token === "en") {
      router.push(router.asPath, undefined, { locale: "ar" })
  
      // window.top.location.href=String(window.top.location.href).replace("/en","/ar")
    };
  }

  
  const canonicalUrl = (
    BaseUrl + `${locale}/nupco`
  );

  useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: "/nupco",});
    }, [router]);
  useTwitterPixel('o7ukz');
  return (
    <><html lang={locale} />
    <div className={classes.mainSection}>
      <Head>
        <title>Nupco | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <section>
        <NupcoBanner />
      </section>
      <section>
        <NupcoEaseOfApply />
      </section>
      <section>
        <NupcoForm   ref={yourRef1}/>
      </section>

    </div></>
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
  },
  getFinanceService: {
    [theme.breakpoints.down('lg')]: {
      padding: '0px 10px 0px 10px'
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 10px 0px 10px'
    },
  },
  getFinancePurpose: {
    position: 'relative',
    top: "-30px",
    [theme.breakpoints.down('lg')]: {
      position: 'relative',
      top: "50px",
    },
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      top: "50px",
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      top: "50px",
    }
  },
  getFinanceQuick: {
    position: 'relative',
    top: "-30px",
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      top: "30px",
      padding: '0px 20px 50px 20px'
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      top: "30px",
      padding: '0px 20px 50px 20px'
    }
  },
  WariningGrid: {
    padding: '0px !important',
  },
  WariningTextTitle: {
    textAlign: 'center',
    color: "#35A052",
  },
  WariningTextDiscription: {
    textAlign: 'center',
    color: '#1E396C',
  },
  WariningMainGrid: {
    background: '#fff',
    padding: '5px'
  }
}));