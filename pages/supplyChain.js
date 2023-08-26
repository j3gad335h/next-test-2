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
const SupplyChainBanner = dynamic(() => import('../page-section/SupplyChain/SupplyChainBanner'));
const SupplyChainService = dynamic(() => import('../page-section/SupplyChain/SupplyChainService'));
const SupplyChainFinanceSolution = dynamic(() => import('../page-section/SupplyChain/SupplyChainFinanceSolution'));
const SupplyChainHowSupplyChain = dynamic(() => import('../page-section/SupplyChain/SupplyChainHowSupplyChain'));
const SupplyChainExample = dynamic(() => import('../page-section/SupplyChain/SupplyChainExample'));
const SupplyChainFaq = dynamic(() => import('../page-section/SupplyChain/SupplyChainFaq'));

export default function SupplyChain() {
  const classes = useStyles();
  const { locale } = useRouter();
  const { t } = useTranslation('common');
  const canonicalUrl = (
    BaseUrl + `${locale}/supplyChain`
  );
  const router = useRouter();
  useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: "/supplyChain",});
    }, [router]);
  useTwitterPixel('o7ukz');
  return (
    <div className={classes.mainSection}>
      <Head>
        <title>SupplyChain | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <section>
        <SupplyChainBanner />
      </section>
      <section className={classes.financeService}>
        <SupplyChainService />
      </section>
      <section className={classes.SupplyChainFinanceSolution}>
        <SupplyChainFinanceSolution />
      </section>
      <section className={classes.SupplyChainHowSupplyChain}>
        <SupplyChainHowSupplyChain />
      </section>
      <section className={classes.SupplyChainExample}>
        <SupplyChainExample />
      </section>
      <section className={classes.SupplyChainFaq}>
        <SupplyChainFaq />
      </section>
      <section className={classes.WariningMainGrid}>
        <Container style={{ maxWidth: '100%', }}>
          <Grid container spacing={2}>
            <Grid className={classes.WariningGrid} item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography className={classes.WariningTextTitle}>{t('getFinance.getFinanceWariningSpan')} <span className={classes.WariningTextDiscription}>{t('getFinance.getFinanceWariningMsg')}</span></Typography>
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
  SupplyChainFinanceSolution: {
    [theme.breakpoints.up('xl')]: {
      position: 'relative',
      top: "-20px",
    },
    [theme.breakpoints.down('xl')]: {
      position: 'relative',
      top: "-20px",
    },
    [theme.breakpoints.down('lg')]: {
      position: 'relative',
      top: "-20px",
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

  SupplyChainHowSupplyChain: {
    position: 'relative',
    top: "0px",
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
  SupplyChainExample: {
    position: 'relative',
    top: "0px",
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      top: "30px",
      padding: '50px 20px 50px 20px'
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      top: "0px",
      padding: '0px 20px 50px 20px'
    }
  },
  SupplyChainFaq: {
    position: 'relative',
    top: "0px",
    padding:'40px 0px 40px 0px',
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      top: "30px",
      padding: '50px 20px 50px 20px'
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      top: "0px",
      padding: '0px 20px 50px 20px'
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