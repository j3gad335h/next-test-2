import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Box, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import BaseUrl from '../../baseUrl'

const useStyles = makeStyles((theme) => ({

    icon: {
        width: "35px",
        height: "35px",
        background: "#3BB257",
        borderRadius: "20px",
        padding: "5px",
        margin: "5px",
        color: "#ffff",
    },
    footer_container: {
        padding: "5px",
    },

    footer_text: {
        color: "#fff",
        fontWeight: "bold",
        marginTop: "10px",
        transform: "none",
        overflow: "hidden",
        textDecoration: "none !important",
        "&:hover,&:focus": {
            color: "#fff",
            textDecoration: "none",
        },
    },
    footer_pra: {
        fontSize: "14px !important",
        marginTop: "10px",
        color: "#fff",
        textDecoration: "none",
        "&:hover,&:focus": {
            color: "#fff",
            textDecoration: "none",
        },
    },
    footer_box: {
        padding: "25px 50px 25px 50px",
        backgroundColor: "#1E396C",
        color: "#fff",
        [theme.breakpoints.down("sm")]: {
            padding: "25px 50px 25px 50px",
            backgroundColor: "#1E396C",
        },
    },
    footerIconsContainer: {
        marginTop: 35,
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            marginTop: 10,
            width: "fit-content",
            display: "flex",
            flexWrap: "initial",
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: 10,
            display: "flex",
            flexWrap: "initial",
        },
    },
    footerIcons: {
        display: "flex",
        cursor: "pointer" ,
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexWrap: "initial",
        },
        [theme.breakpoints.down("xs")]: {
            display: "flex",
            flexWrap: "initial",
        },
    },
    footer_praClick: {
        fontSize: "14px !important",
        marginTop: "5px",
        color: "#37A753",
        textDecoration: "none",
        "&:hover,&:focus": {
            color: "#37A753",
            textDecoration: "none",
        },
    }
}));
export default function Footer() {
    const logo ="/assetsNew/images/logo/logoFooter.webp";
    const Apple ="/assetsNew/images/mobilePromotion/ap.webp";
    const Google ="/assetsNew/images/mobilePromotion/gp.webp";
    const classes = useStyles();
    const { t } = useTranslation('common');
    const { locale } = useRouter();
    

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    return (
        <footer className={classes.footer}>
            <Box className={classes.footer_box}>
                <Grid container direction="row">
                    <Grid item xs={12} md={4} containerdirection="column" className={classes.footer_container}>
                        <Link href={`/${locale}`}>
                            <Image src={logo} alt="Logo" width={120} height={60}/>
                        </Link>
                        <div className={classes.right}>
                            <Link aria-label="facebook-link" target="_blank" href="https://www.facebook.com/raqamyahksa/">
                                <FacebookIcon className={classes.icon} />
                            </Link>
                            <Link aria-label="twitter-link" target="_blank" href="https://twitter.com/raqamyah">
                                <TwitterIcon className={classes.icon} />
                            </Link>
                            <Link
                                aria-label="linkedin-link" target="_blank"
                                href="https://www.linkedin.com/company/raqamyah/?viewAsMember=true">
                                <LinkedInIcon className={classes.icon} />
                            </Link>
                            <Link aria-label="instagram-link" target="_blank" href="https://www.instagram.com/raqamyahksa/">
                                <InstagramIcon className={classes.icon} />
                            </Link>
                        </div>
                        <Typography className={classes.footer_pra}>{t("footer.Footer Address1")}</Typography>
                        <Typography className={classes.footer_pra}>{t("footer.Footer Address2")}</Typography>
                        <Typography className={classes.footer_pra}>{t("footer.Footer Address3")}</Typography>
                    </Grid>
                    <Grid item xs={12} md={2} container direction="column" className={classes.footer_container}>
                        <Link className={classes.footer_text} href={`/${locale}/about`}>{" "}{t("menu.About")}</Link>
                        <Link className={classes.footer_text} href={`/${locale}/getFinanced`}>{" "}{t("menu.Get Financed")}{" "}</Link>
                        <Link className={classes.footer_text} href={`/${locale}/finance`}>{" "}{t("menu.Finance")}{" "}</Link>
                        <Link className={classes.footer_text} href={`/${locale}/posFinance`}>{" "}{t("menu.Pos Finance")}</Link>
                        <Link className={classes.footer_text} href={`/${locale}/howItWorks`}>{" "}{t("menu.How It Works")}</Link>
                        <Link className={classes.footer_text} href={`/${locale}/contactUs`}>{" "}{t("menu.Contact")}{" "}</Link>
                    </Grid>
                    <Grid item xs={12} md={3} container direction="column" className={classes.footer_container}>
                        <Link className={classes.footer_text} href={`/${locale}/legal`}>{t("menu.Legal")}</Link>
                        <Link className={classes.footer_text} href={`/${locale}/learnMoreFinancer`}>{t("menu.Learn more as a Financer")}</Link>
                        <Link className={classes.footer_text} href={`/${locale}/learnMoreFinancee`}>{t("menu.Learn more as a Financee (Debtor)")}</Link>
                        <Link className={classes.footer_text} href={`/${locale}/faq`}>{t("menu.FAQ")}</Link>
                        <Link className={classes.footer_text} href={locale === 'ar' ? BaseUrl + 'assetsNew/images/pdf/حماية%20العملاء.pdf' : BaseUrl + 'assetsNew/images/pdf/Consumer_Protection_EN.pdf'} target="_blank" >{t("menu.Consumer protection")}</Link>
                        <Link className={classes.footer_text} href={`/${locale}/consumerProtection`}>{t("menu.Complains and suggestions")}</Link>
                        
                    </Grid>
                    <Grid item xs={12} md={3} container direction="column" className={classes.footer_container}>
                        <Typography className={classes.footer_pra}>{t("footer.Footer Discription1")}</Typography>
                        <Typography className={classes.footer_pra}>{t("footer.Footer Discription2")}</Typography>
                        <Typography className={classes.footer_pra}>{t("footer.Footer Discription3")}&nbsp;<span>  
                            <Link className={classes.footer_praClick} target="_blank" aria-label="sama-link" href="https://www.sama.gov.sa/ar-sa/licenseentities/pages/financelicencedentities.aspx">
                                {t("footer.Footer Discription4")}
                            </Link></span>
                        </Typography>
                        <Grid className={classes.footerIconsContainer}>
                            <Grid item xs={12} md={6}>
                                <Image alt="Apple" className={classes.footerIcons } width={120} height={40}  onClick={() =>
                                    window.open(
                                        "https://apps.apple.com/sa/app/raqamyah-%D8%B1%D9%82%D9%85%D9%8A%D8%A9/id6443498463",
                                        "_blank") } src={Apple} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Image alt="google" className={classes.footerIcons} width={120} height={40} onClick={() =>
                                    window.open(
                                        "https://play.google.com/store/apps/details?id=com.raqamyah",
                                        "_blank"
                                    )} src={Google} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </footer>
    )
}
