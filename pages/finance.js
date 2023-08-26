import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ReactGA from "react-ga4";
import useTwitterPixel from '../TwitterPixel';
import BaseUrl from '../baseUrl';
const FinanceBanner = dynamic(() => import('../page-section/Finance/FinanceBanner'));
const FinanceService = dynamic(() => import('../page-section/Finance/FinanceService'));
const FinanceQualitySMEs = dynamic(() => import('../page-section/Finance/FinanceQualitySMEs'));
const FinanceMadeSimple = dynamic(() => import('../page-section/Finance/FinanceMadeSimple'));


export default function Finance() {
  const classes = useStyles();
  const { locale } = useRouter();
  const { t } = useTranslation('common');
  const canonicalUrl = (
    BaseUrl + `${locale}/finance`
  );
  const router = useRouter();
  useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: "/faq",});
    }, [router]);
  useTwitterPixel('o7ukz');
  return (
    <div className={classes.mainSection}>
      <Head>
        <title>Finance | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <section>
        <FinanceBanner />
      </section>
      <section className={classes.financeService}>
        <FinanceService />
      </section>
      <section className={classes.financeQualitySMEs}>
        <FinanceQualitySMEs />
      </section>
      <section className={classes.financeMadeSimple}>
        <FinanceMadeSimple />
      </section>
      <section className={classes.WariningMainGrid}>
        <Container style={{ maxWidth: '100%', }}>
          <Grid container spacing={2}>
            <Grid className={classes.WariningGrid} item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography className={classes.WariningTextTitle}>{t('finance.finaceQualityWariningSpan')} <span className={classes.WariningTextDiscription}>{t('finance.finaceQualityWariningMsg1')}</span>
                <span className={classes.WariningTextDiscription}> <Link href={`/${locale}/selectionProcess`}>{t('finance.finaceQualityWariningMsg2')}</Link> </span>
                <span className={classes.WariningTextDiscription}>{t('finance.finaceQualityWariningMsg3')}</span>
              </Typography>
            </Grid>
          </Grid>
        </Container>
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
  },
  financeService: {
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
  financeQualitySMEs: {
    [theme.breakpoints.up('xl')]: {
      position: 'relative',
      top: "-40px",
    },
    [theme.breakpoints.down('xl')]: {
      position: 'relative',
      top: "-40px",
    },
    [theme.breakpoints.down('lg')]: {
      position: 'relative',
      top: "-40px",
    },
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      top: "60px",
    },
    [theme.breakpoints.between('sm', 'md')]: {
      position: 'relative',
      top: "60px !important",
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      top: "60px",
    },
    [theme.breakpoints.down('sx')]: {
      position: 'relative',
      top: "60px",
    }
    // position: 'relative',
    // top: "50px !important",
    // [theme.breakpoints.up('xl')]: {
    //   position: 'relative',
    //   top: "-50px !important",
    //   padding:'0px 10px 0px 10px'
    // },
    // [theme.breakpoints.up('lg')]: {
    //   position: 'relative',
    //   top: "-50px !important",
    //   padding:'0px 10px 0px 10px'
    // },
    // [theme.breakpoints.up('md')]: {
    //   position: 'relative',
    //   top: "-50px !important",
    // },
    // [theme.breakpoints.up('sm')]: {
    //   position: 'relative',
    //   top: "-50px !important",
    // },
    // [theme.breakpoints.down('sm')]: {
    //   position: 'relative',
    //   top: "50px !important",
    // },
  },

  financeMadeSimple: {
    position: 'relative',
    top: "-30px",
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      top: "30px",
      padding: '50px 20px 50px 20px'
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      top: "30px",
      padding: '50px 20px 50px 20px'
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
    textAlign: 'center',
    color: "#35A052",
   padding:'20px',
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