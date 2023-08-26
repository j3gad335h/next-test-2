import { Container, Grid, Typography } from '@mui/material';
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
const PosFinanceBanner = dynamic(() => import('../page-section/PosFinance/PosFinanceBanner'));
const PosFinanceService = dynamic(() => import('../page-section/PosFinance/PosFinanceService'));
const PosFinancePurpose = dynamic(() => import('../page-section/PosFinance/PosFinancePurpose'));
const PosFinanceMadeSimple = dynamic(() => import('../page-section/PosFinance/PosFinanceMadeSimple'));

export default function PosFinance() {
  const classes = useStyles();
  const { locale } = useRouter();
  const { t } = useTranslation('common');
  const canonicalUrl = (
    BaseUrl + `${locale}/posFinance`
  );
  const router = useRouter();
  useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: "/posFinance",});
    }, [router]);
  useTwitterPixel('o7ukz');
  return (
    <div className={classes.mainSection}>
      <Head>
        <title>Pos Finance | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <section>
        <PosFinanceBanner />
      </section>
      <section className={classes.getFinanceService}>
        <PosFinanceService />
      </section>
      <section className={classes.getFinancePurpose}>
        <PosFinancePurpose />
      </section>
      <section className={classes.getFinanceQuick}>
        <PosFinanceMadeSimple />
      </section>
      <section>
        <Container style={{ maxWidth: '100%', padding: '0px' }}>
          <Grid className={classes.WariningMainGrid} container spacing={2}>
            <Grid className={classes.WariningGrid} item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography className={classes.WariningTextTitle}>{t('posFinance.posFinaceQualityWariningSpan')} <span className={classes.WariningTextDiscription}>{t('posFinance.posFinaceQualityWariningMsg')}</span></Typography>
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
    [theme.breakpoints.up('xl')]: {
      position: 'relative',
      top: "-70px",
    },
    [theme.breakpoints.down('xl')]: {
      position: 'relative',
      top: "-70px",
    },
    [theme.breakpoints.down('lg')]: {
      position: 'relative',
      top: "-70px",
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
      top: "30px",
    },
    [theme.breakpoints.down('sx')]: {
      position: 'relative',
      top: "30px",
    }
  },
  getFinanceQuick: {
    position: 'relative',
    top: "-40px",
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      top: "30px",
      padding: '50px 20px 50px 20px'
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      top: "20px",
      padding: '50px 20px 50px 20px'
    }
  },
  WariningGrid: {
    paddingLeft: '50px !important',
    paddingRight: '50px',
    paddingTop: '0px !important',
    paddingBottom: '0px !important',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '50px !important',
      paddingRight: '50px',
      paddingTop: '0px !important',
      paddingBottom: '0px !important',
    }
  },
  WariningTextTitle: {
    textAlign: 'center',
    color: "#35A052",
    padding:'10px 100px 10px 100px',
    [theme.breakpoints.down('sm')]: {
      padding:'10px 0px 10px 0px',
    }

  },
  WariningTextDiscription: {
    textAlign: 'center',
    color: '#1E396C',
    
  },
  WariningMainGrid: {
    background: '#fff',
 
  }
}));