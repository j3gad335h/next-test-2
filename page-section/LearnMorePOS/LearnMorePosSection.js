import { Box, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import Image from 'next/image';
import { useRouter } from 'next/router';
import BaseUrl from '../../baseUrl';
export default function LearnMorePosSection() {
    const classes = useStyles();
    const { t } = useTranslation('common');
    const { locale } = useRouter();
    const image1 ="/assetsNew/images/selectionProcess/backgroundImage.svg";
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <section className={classes.sectionContainer}>
            <Container>
                <Typography variant='h1' className={classes.Title}>
                    {t("pos.Learn more as learn pos tittle")}
                </Typography>
            </Container>
            <Container className={classes.sectionContainer} maxWidth="md">
                <Box py={5}>
                    <Box mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={3}>
                                <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                <Typography className={classes.serviceNumber}>1</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={9}>
                                <Box mb={2}>
                                    <Typography className={classes.serviceTitle}>{t("pos.Learn more as learn pos tittle2")}</Typography>
                                    <Typography className={classes.serviceDiscripition}>{t("pos.Learn more as learn pos discription1")}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box style={{ marginTop: "-70px" }} mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={3}>
                                <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                <Typography className={classes.serviceNumber}>2</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={9}>
                                <Box mb={2}>
                                    <Typography className={classes.serviceTitle}>{t("pos.Learn more as learn pos tittle3")}</Typography>
                                    <Typography className={classes.serviceDiscripition}>{t("pos.Learn more as learn pos discription2")}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={3}>
                                <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                <Typography className={classes.serviceNumber}>3</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={9}>
                                <Box mb={2}>
                                    <Typography className={classes.serviceTitle}>{t("pos.Learn more as learn pos tittle4")}</Typography>
                                    <Typography className={classes.serviceDiscripition}>{t("pos.Learn more as learn pos discription3")}</Typography>
                                    <Typography className={classes.serviceDiscripition}>{t("pos.Learn more as learn pos discription5")}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={3}>
                                <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                <Typography className={classes.serviceNumber}>4</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={9}>
                                <Box mb={2}>
                                    <Typography className={classes.serviceTitle}>{t("pos.Learn more as learn pos tittle5")}</Typography>
                                    <Typography className={classes.serviceDiscripition}>{t("pos.Learn more as learn pos discription6")}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={3}>
                                <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                <Typography className={classes.serviceNumber}>5</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={9}>
                                <Box mb={2}>
                                    <Typography className={classes.serviceTitle}>{t("pos.Learn more as learn pos tittle6")}</Typography>
                                    <Typography className={classes.serviceDiscripition}>{t("pos.Learn more as learn pos discription7")}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={3}>
                                <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                <Typography className={classes.serviceNumber}>6</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={9}>
                                <Box mb={2}>
                                    <Typography className={classes.serviceTitle}>{t("pos.Learn more as learn pos tittle7")}</Typography>
                                    <Typography className={classes.serviceDiscripition}>{t("pos.Learn more as learn pos discription8")}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={3}>
                                <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                <Typography className={classes.serviceNumber}>7</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={9}>
                                <Box mb={2}>
                                    <Typography className={classes.serviceTitle}>{t("pos.Learn more as learn pos tittle8")}</Typography>
                                    <ul>
                                        <li><Typography className={classes.serviceDiscripition}>{t("pos.Learn more as learn pos discription9")}</Typography></li>
                                        <li><Typography className={classes.serviceDiscripition}>{t("pos.Learn more as learn pos discription10")}</Typography></li>
                                        <li><Typography className={classes.serviceDiscripition}>{t("pos.Learn more as learn pos discription11")}</Typography></li>
                                    </ul>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={3}>
                                <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                <Typography className={classes.serviceNumber}>8</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={9}>
                                <Box mb={2}>
                                    <Typography className={classes.serviceTitle}>{t("pos.Learn more as learn pos tittle9")}</Typography>
                                    <Typography className={classes.serviceDiscripition}>{t("pos.Learn more as learn pos discription12")}</Typography>
                                    <ul>
                                        <li><Typography className={classes.serviceDiscripition}>{t("pos.Learn more as learn pos discription13")}</Typography></li>
                                        <li><Typography className={classes.serviceDiscripition}>{t("pos.Learn more as learn pos discription14")}</Typography></li>
                                    </ul>
                                    <Typography className={classes.serviceDiscripition}>{t("pos.Learn more as learn pos discription15")}</Typography>
                                    <ul>
                                        <li><Typography className={classes.serviceDiscripition}>{t("pos.Learn more as learn pos discription16")}</Typography></li>
                                        <li><Typography className={classes.serviceDiscripition}>{t("pos.Learn more as learn pos discription17")}</Typography></li>
                                        <li><Typography className={classes.serviceDiscripition}>{t("pos.Learn more as learn pos discription18")}</Typography></li>
                                        <li><Typography className={classes.serviceDiscripition}>{t("pos.Learn more as learn pos discription19")}</Typography></li>
                                        <li><Typography className={classes.serviceDiscripition}>{t("pos.Learn more as learn pos discription20")}</Typography></li>
                                    </ul>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mb={5} border={0} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={3}>
                                <Image width={115} height={150} className={classes.Image} src={image1} alt="icon" />
                                <Typography className={classes.serviceNumber}>9</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={9}>
                                <Box mb={2}>
                                    <Typography className={classes.serviceTitle}>{t("pos.Learn more as learn pos tittle10")}</Typography>
                                    <Typography className={classes.serviceDiscripition}>{t("pos.Learn more as learn pos discription21")}</Typography>
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
