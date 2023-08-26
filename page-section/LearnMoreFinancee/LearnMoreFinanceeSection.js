import { Box, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BaseUrl from '../../baseUrl';
export default function LearnMoreFinanceeSection() {
    const classes = useStyles();
    const { t } = useTranslation('common');
    const { locale } = useRouter();
    const image1 = "/assetsNew/images/selectionProcess/backgroundImage.svg";
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <section className={classes.sectionContainer}>
            <Container>
                <Typography  variant="h1"  className={classes.Title}>
                    {t("learnMoreFinancee.Learn more as a Financee tittle")}
                </Typography>
            </Container>
                <Container maxWidth="md" className={classes.sectionContainer}>
                    <Box py={5}>
                        <Box className={classes.LearnMoreBox} mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Image  width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                    <Typography className={classes.serviceNumber}>1</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={9}>
                                    <Box className={classes.LearnMoreBox} mb={2}>
                                        <Typography className={classes.serviceTitle}>{t("learnMoreFinancee.Learn more as a Financee tittle1")}</Typography>
                                        <Typography className={classes.serviceDiscripition}>{t("learnMoreFinancee.Learn more as a Financee discription1")}</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.LearnMoreBox} mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                    <Typography className={classes.serviceNumber}>2</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={9}>
                                    <Box mb={2}>
                                        <Typography className={classes.serviceTitle}>{t("learnMoreFinancee.Learn more as a Financee tittle2")}</Typography>
                                        <Typography className={classes.serviceDiscripition}>{t("learnMoreFinancee.Learn more as a Financee discription2")}</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.LearnMoreBox} mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                    <Typography className={classes.serviceNumber}>3</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={9}>
                                    <Box mb={2}>
                                        <Typography className={classes.serviceTitle}>{t("learnMoreFinancee.Learn more as a Financee tittle3")}</Typography>
                                        <ul>
                                            <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancee.Learn more as a Financee discription3")}</Typography></li>
                                            <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancee.Learn more as a Financee discription4")}</Typography></li>
                                            <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancee.Learn more as a Financee discription5")}</Typography></li>
                                            <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancee.Learn more as a Financee discription6")}</Typography></li>
                                            <li className={classes.ArabicHide}><Typography className={classes.serviceDiscripition}><span className={classes.ArabicHide}>{t("learnMoreFinancee.Learn more as a Financee discription7")}</span>&nbsp;<Link className={classes.ArabicHide} href={`/${locale}/selectionProcess`}>{t("learnMoreFinancee.Learn more as a Financee discription8")}</Link>&nbsp;</Typography></li>
                                            <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancee.Learn more as a Financee discription9")}</Typography></li>
                                        </ul>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.LearnMoreBox} mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                    <Typography className={classes.serviceNumber}>4</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={9}>
                                    <Box mb={2}>
                                        <Typography className={classes.serviceTitle}>{t("learnMoreFinancee.Learn more as a Financee tittle4")}</Typography>
                                        <Typography className={classes.serviceDiscripition}>{t("learnMoreFinancee.Learn more as a Financee discription10")}</Typography>
                                        <ul>
                                            <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancee.Learn more as a Financee discription11")}</Typography></li>
                                            <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancee.Learn more as a Financee discription12")}</Typography></li>
                                            <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancee.Learn more as a Financee discription13")}</Typography></li>
                                        </ul>
                                        <Typography className={classes.serviceDiscripition}>{t("learnMoreFinancee.Learn more as a Financee discription14")}</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.LearnMoreBox} mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                    <Typography className={classes.serviceNumber}>5</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={9}>
                                    <Box mb={2}>
                                        <Typography className={classes.serviceTitle}>{t("learnMoreFinancee.Learn more as a Financee tittle5")}</Typography>
                                        <Typography className={classes.serviceDiscripition}>{t("learnMoreFinancee.Learn more as a Financee discription15")}</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.LearnMoreBox} mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                    <Typography className={classes.serviceNumber}>6</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={9}>
                                    <Box mb={2}>
                                        <Typography className={classes.serviceTitle}>{t("learnMoreFinancee.Learn more as a Financee tittle6")}</Typography>
                                        <Typography className={classes.serviceDiscripition}>{t("learnMoreFinancee.Learn more as a Financee discription16")}</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.LearnMoreBox} mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                    <Typography className={classes.serviceNumber}>7</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={9}>
                                    <Box mb={2}>
                                        <Typography className={classes.serviceTitle}>{t("learnMoreFinancee.Learn more as a Financee tittle7")}</Typography>
                                        <Typography className={classes.serviceDiscripition}>{t("learnMoreFinancee.Learn more as a Financee discription17")}</Typography>
                                        <ul>
                                            <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancee.Learn more as a Financee discription18")}</Typography></li>
                                            <ul>
                                                <li><Typography className={classes.serviceDiscripition}> {t("learnMoreFinancee.Learn more as a Financee discription19")}</Typography></li>
                                                <li><Typography className={classes.serviceDiscripition}> {t("learnMoreFinancee.Learn more as a Financee discription20")}</Typography></li>
                                                <li><Typography className={classes.serviceDiscripition}> {t("learnMoreFinancee.Learn more as a Financee discription21")}</Typography></li>
                                            </ul>
                                            <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancee.Learn more as a Financee discription22")}</Typography></li>
                                            <ul>
                                                <li><Typography className={classes.serviceDiscripition}> {t("learnMoreFinancee.Learn more as a Financee discription23")}</Typography></li>
                                                <li><Typography className={classes.serviceDiscripition}> {t("learnMoreFinancee.Learn more as a Financee discription24")}</Typography></li>
                                                <li><Typography className={classes.serviceDiscripition}> {t("learnMoreFinancee.Learn more as a Financee discription25")}</Typography></li>
                                            </ul>
                                        </ul>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.LearnMoreBox} mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                    <Typography className={classes.serviceNumber}>8</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={9}>
                                    <Box mb={2}>
                                        <Typography className={classes.serviceTitle}>{t("learnMoreFinancee.Learn more as a Financee tittle8")}</Typography>
                                        <Typography className={classes.serviceDiscripition}>{t("learnMoreFinancee.Learn more as a Financee discription26")}</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>


        </section>
    );
}

const useStyles = makeStyles((theme, local) => ({

    Title: {
        fontSize: '38px',
        color: '#1E396C',
        textAlign: 'center',
        [theme.breakpoints.down("md")]: {
            fontSize: '32px',
            color: '#1E396C',
            textAlign: 'center',
        },
    },
    sectionContainer: {
        padding: '50px 0px 00px 0px',
        [theme.breakpoints.down("md")]: {
            padding: '0px 20px 0px 20px',
        },
    },
    Image: {
        [theme.breakpoints.up("xl")]: {
            position: "relative",
            left: "25%",
            right: "25%",
            display: "flex",
        },
        [theme.breakpoints.down("xl")]: {
            position: "relative",
            left: "25%",
            right: "25%",
            display: "flex",
        },
        [theme.breakpoints.down("lg")]: {
            position: "relative",
            left: "25%",
            right: "25%",
            display: "flex",
        },
  
        [theme.breakpoints.down("md")]: {
            position: "relative",
            left: "32%",
            right: "32%",
        },
        [theme.breakpoints.between("sm","md")]: {
            position: "relative",
            left: "36%",
            right: "36%",
        },
        [theme.breakpoints.down("sm")]: {
            position: "relative",
            left: "33%",
            right: "33%",
        },
        [theme.breakpoints.down("xs")]: {
            position: "relative",
            left: "36%",
            right: "36%",
        },
    },

    LearnMoreBox: {
        marginBottom: "0px",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "25px",
        },
    },

    serviceNumber: {
        position: "relative",
        textAlign: "center",
        color: "#FFF",
        left: "auto",
        right: "auto",
        bottom: "120px",
        fontSize: "50px",
        [theme.breakpoints.down("sm")]: {
            position: "relative",
            bottom: "120px",
            fontSize: "50px",
            textAlign: "center",
            color: "#FFF",
            left: "auto",
            right: "auto",
        },
        [theme.breakpoints.down("xs")]: {
            position: "relative",
            bottom: "120px",
            fontSize: "50px",
            textAlign: "center",
            color: "#FFF",
            left: "auto",
            right: "auto",
        },
    },
    serviceTitle: {
        fontWeight: "normal",
        fontSize: "30px",
        color: "#1E396C",
        paddingBottom: "10px",
        [theme.breakpoints.down("sm")]: {
            fontWeight: "normal",
            fontSize: "20px",
            color: "#1E396C",
        },
    },
    serviceDiscripition: {
        fontWeight: "normal",
        fontSize: "18px",
        color: "#1E396C",
        paddingBottom: "5px",
        textAlign: "justify",
        [theme.breakpoints.down("sm")]: {
            fontWeight: "normal",
            fontSize: "15px",
            color: "#1E396C",
            textAlign: "justify",
        },
    },
    ArabicHide: {
        display: local === "ar" ? "none" : "initial",
    }
}));
