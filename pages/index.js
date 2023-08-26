import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getConfig from 'next/config';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ReactGA from "react-ga4";
import useTwitterPixel from '../TwitterPixel';
import BaseUrl from '../baseUrl';
const HomeBanner = dynamic(() => import('../page-section/Home/HomeBanner'));
const HomeService = dynamic(() => import('../page-section/Home/HomeService'));
const HomeWereHere = dynamic(() => import('../page-section/Home/HomeWereHere'));
const HomeFinanceSolution = dynamic(() => import('../page-section/Home/HomeFinanceSolution'));
const HomeHowItWorks = dynamic(() => import('../page-section/Home/HomeHowItWorks'));
// const HomeBanner = dynamic(() => import('../page-section/Home/HomeBanner'), {
//   loading: () => <p>Loading...</p>, // This is the loading indicator
// });
const { publicRuntimeConfig } = getConfig();
export default function Home() {
  const classes = useStyles();
  const router = useRouter()
  const { locale } = useRouter();
  const { publicRuntimeConfig } = getConfig();
  const { t } = useTranslation('common');

  const canonicalUrl = (
    BaseUrl + `${locale}/`
  );
  useTwitterPixel('o7ukz');
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/Home",});
  }, [router]);

  const schemaData =
  {
    "@context": "http://www.schema.org",
    "@type": "Organization",
    "name": "Raqamyah",
    "url": "https://www.raqamyah.com/",
    "logo": "https://www.raqamyah.com/assetsNew/images/logo/logo.png",
    "description": " Raqamyah | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Raqamyah Platform, 3252 Prince Muhammad Ibn Abd Al Aziz, Al Dugaither Commercial Center number 2. Al Olaya",
      "addressLocality": "Riyadh",
      "addressRegion": "Riyadh",
      "postalCode": "12241-6231",
      "addressCountry": "Saudi Arabia"
    }
  }
  // const clearCacheAndReload = async () => {
  //   try {
  //     const version = localStorage.getItem('version');
  //     if (version !== publicRuntimeConfig.version) {
  //       if ('caches' in window) {
  //         const cacheNames = await window.caches.keys();
  //         await Promise.all(cacheNames.map((name) => window.caches.delete(name)));
  //       }
        
  //       localStorage.setItem('version', publicRuntimeConfig.version);
  //       // Reload the page to apply the changes
  //       3.
  //       window.location.reload(true);
  //     }
  //   } catch (error) {
  //     console.error('Cache clearing and reloading failed:', error);
  //   }
  // };

  // useEffect(() => {
  //   clearCacheAndReload();
  // });

  return (
    <div className={classes.mainSection}>
      <Head>
        <title>Raqamyah | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      </Head>
      <section>
        <HomeBanner />
      </section>
      <section className={classes.getFinanceService}>
        <HomeService />
      </section>
      <section className={classes.getFinancePurpose}>
        <HomeWereHere />
      </section>
      <section className={classes.getFinanceQuick}>
        <HomeFinanceSolution />
      </section>
      <section className={classes.HomeHowItWorks}>
        <HomeHowItWorks />
      </section>
      <section>
        <Container style={{ maxWidth: '100%', padding: '0px' }}>
          <Grid className={classes.WariningMainGrid} container spacing={2}>
            <Grid className={classes.WariningGrid} item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography className={classes.WariningTextTitle}>{t('home.Home wariningspan')} <span className={classes.WariningTextDiscription}>{t('home.Home wariningmsg')}</span></Typography>
            </Grid>
          </Grid>
        </Container>
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
    [theme.breakpoints.up('xl')]: {
      padding: '0px 100px 0px 100px'
    },
    [theme.breakpoints.down('xl')]: {
      padding: '0px 100px 0px 100px'
    },
     [theme.breakpoints.down('lg')]: {
      padding: '0px 100px 0px 100px'
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
    [theme.breakpoints.between('md','lg')]: {
      position: 'relative',
      top: "0px",
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
  HomeHowItWorks:{
    position: 'relative',
    top: "-30px",
    padding: '0px 0px 100px 0px',
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      top: "0px",
      padding: '0px 20px 70px 20px'
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      top: "0px",
      padding: '0px 20px 70px 20px'
    }
  },
  WariningGrid: {
    padding: '0px !important',
  },
  WariningTextTitle: {
    textAlign: 'center',
    color: "#35A052",
   padding:'10px 100px 10px 100px',
   [theme.breakpoints.down('sm')]: {
    padding:'10px 20px 10px 20px',
  }
  },
  WariningTextDiscription: {
    textAlign: 'center',
    color: '#1E396C',
 
  },
  WariningMainGrid: {
    background: '#fff',
    margin:'0px',
  }
}));