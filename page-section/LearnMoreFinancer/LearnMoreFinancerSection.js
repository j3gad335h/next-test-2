import { Box, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BaseUrl from '../../baseUrl';
export default function LearnMoreFinancerSection() {
    const classes = useStyles();
    const { t } = useTranslation('common');
    const { locale } = useRouter();
    const image1 = "/assetsNew/images/selectionProcess/backgroundImage.svg";

    return (
        <section className={classes.sectionContainer}>
            <Container>
                <Typography variant='h1' className={classes.Title}>
                    {t("learnMoreFinancer.Learn more as a Financer tittle")}
                </Typography>
            </Container >
            <Container className={classes.sectionContainer} maxWidth="md">
                <Box py={6.5}>
                    <Box className={classes.LearnMoreBox} mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                        <Grid container spacing={2}>
                            <Grid className={classes.GridBox} item xs={12} sm={6} md={3}>
                                <Box>
                                    <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                    <Typography className={classes.serviceNumber}>1</Typography>
                                </Box>
                            </Grid>
                            <Grid className={classes.GridBox} item xs={12} sm={6} md={9}>
                                <Box mb={2}>
                                    <Typography className={classes.serviceTitle}>{t("learnMoreFinancer.Learn more as a Financer tittle2")}</Typography>
                                    <Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription1")}</Typography>
                                    <ul>
                                        <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription2")}</Typography></li>
                                    </ul>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box style={{ marginTop: "-40px" }} className={classes.LearnMoreBox} mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                        <Grid container spacing={2}>
                            <Grid className={classes.GridBox} item xs={12} sm={6} md={3}>
                                <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                <Typography className={classes.serviceNumber}>2</Typography>
                            </Grid>
                            <Grid className={classes.GridBox} item xs={12} sm={6} md={9}>
                                <Box mb={2}>
                                    <Typography className={classes.serviceTitle}>{t("learnMoreFinancer.Learn more as a Financer tittle3")}</Typography>
                                    <Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription3")}</Typography>
                                    <ul>
                                        <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription4")}</Typography></li>
                                        <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription5")}</Typography></li>
                                        <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription6")}</Typography></li>
                                    </ul>
                                    <Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription7")}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className={classes.LearnMoreBox} mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                        <Grid container spacing={2}>
                            <Grid className={classes.GridBox} item xs={12} sm={6} md={3}>
                                <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                <Typography className={classes.serviceNumber}>3</Typography>
                            </Grid>
                            <Grid className={classes.GridBox} item xs={12} sm={6} md={9}>
                                <Box mb={2}>
                                    <Typography className={classes.serviceTitle}>{t("learnMoreFinancer.Learn more as a Financer tittle4")}</Typography>
                                    <Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription8")}</Typography>
                                    <Typography className={classes.serviceDiscripition}><strong>{t("learnMoreFinancer.Learn more as a Financer discription9")}</strong>{t("learnMoreFinancer.Learn more as a Financer discription10")}</Typography>
                                    <ul>
                                        <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription11")}</Typography></li>
                                        <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription12")}</Typography></li>
                                    </ul>
                                    <Typography className={classes.serviceDiscripition}><strong>{t("learnMoreFinancer.Learn more as a Financer discription13")}</strong>{t("learnMoreFinancer.Learn more as a Financer discription14")}&nbsp;<a target="_blank" rel="noreferrer" href={BaseUrl + "assetsNew/images/pdf/Qualified_Financer_Form.pdf"}>{t("learnMoreFinancer.Learn more as a Financer discription15")}</a>&nbsp;{t("learnMoreFinancer.Learn more as a Financer discription16")}</Typography>
                                    <ul>
                                        <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription17")}</Typography></li>
                                        <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription18")}</Typography></li>
                                        <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription19")}</Typography></li>
                                        <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription20")}</Typography></li>
                                    </ul>
                                    <Typography className={classes.serviceDiscripition}><strong>{t("learnMoreFinancer.Learn more as a Financer discription21")}</strong>{t("learnMoreFinancer.Learn more as a Financer discription22")}</Typography>
                                    <Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription23")}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className={classes.LearnMoreBox} mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                        <Grid container spacing={2}>
                            <Grid className={classes.GridBox} item xs={12} sm={6} md={3}>
                                <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                <Typography className={classes.serviceNumber}>4</Typography>
                            </Grid>
                            <Grid className={classes.GridBox} item xs={12} sm={6} md={9}>
                                <Box mb={2}>
                                    <Typography className={classes.serviceTitle}>{t("learnMoreFinancer.Learn more as a Financer tittle5")}</Typography>
                                    <Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription24")}</Typography>
                                    <Typography className={classes.serviceDiscripition}><strong>{t("learnMoreFinancer.Learn more as a Financer discription25")}</strong>{t("learnMoreFinancer.Learn more as a Financer discription26")}</Typography>
                                    <ul>
                                        <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription27")}</Typography></li>
                                        <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription28")}</Typography></li>
                                        <li><Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription29")}</Typography></li>
                                    </ul>
                                    <Typography className={classes.serviceDiscripition}><strong>{t("learnMoreFinancer.Learn more as a Financer discription30")}</strong>{t("learnMoreFinancer.Learn more as a Financer discription31")}</Typography>
                                    <Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription32")}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className={classes.LearnMoreBox} mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                        <Grid container spacing={2}>
                            <Grid className={classes.GridBox} item xs={12} sm={6} md={3}>
                                <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                <Typography className={classes.serviceNumber}>5</Typography>
                            </Grid>
                            <Grid className={classes.GridBox} item xs={12} sm={6} md={9}>
                                <Box mb={2}>
                                    <Typography className={classes.serviceTitle}>{t("learnMoreFinancer.Learn more as a Financer tittle6")}</Typography>
                                    <Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription33")}<Link className={classes.ArabicHide} href={`/${locale}/recoveryProcess`} >{t("learnMoreFinancer.Learn more as a Financer discription34")}</Link>&nbsp;{t("learnMoreFinancer.Learn more as a Financer discription35")}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className={classes.LearnMoreBox} mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                        <Grid container spacing={2}>
                            <Grid className={classes.GridBox} item xs={12} sm={6} md={3}>
                                <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                <Typography className={classes.serviceNumber}>6</Typography>
                            </Grid>
                            <Grid className={classes.GridBox} item xs={12} sm={6} md={9}>
                                <Box mb={2}>
                                    <Typography className={classes.serviceTitle}>{t("learnMoreFinancer.Learn more as a Financer tittle7")}</Typography>
                                    <Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription36")}&nbsp;<Link href={`/${locale}/diversification`}>{t("learnMoreFinancer.Learn more as a Financer discription37")}</Link>&nbsp;{t("learnMoreFinancer.Learn more as a Financer discription38")}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className={classes.LearnMoreBox} mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                        <Grid container spacing={2}>
                            <Grid className={classes.GridBox} item xs={12} sm={6} md={3}>
                                <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                <Typography className={classes.serviceNumber}>7</Typography>
                            </Grid>
                            <Grid className={classes.GridBox} item xs={12} sm={6} md={9}>
                                <Box mb={2}>
                                    <Typography className={classes.serviceTitle}>{t("learnMoreFinancer.Learn more as a Financer tittle8")}</Typography>
                                    <Typography className={classes.serviceDiscripition}>{t("learnMoreFinancer.Learn more as a Financer discription39")}</Typography>
                                    <Typography className={classes.serviceDiscripition}><Link href={`/${locale}/recoveryProcess`}>{t("learnMoreFinancer.Learn more as a Financer discription40")}</Link></Typography>
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
        padding: '50px 0px 0px 0px',
        [theme.breakpoints.down("sm")]: {
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
    GridBox: {
        paddingLeft: '0px'
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
