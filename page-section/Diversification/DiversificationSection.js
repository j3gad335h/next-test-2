import { Box, Container, Divider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import Image from 'next/image';
import BaseUrl from '../../baseUrl';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
export default function DiversificationSection() {
    const classes = useStyles();
    const { t } = useTranslation('common');
    const image =  "/assetsNew/images/Diversification/diver.webp"

    return (
        <section>
            <Container className={classes.Container}>
                <Box className={classes.titleBox}>
                    <Typography variant='h1' className={classes.Title}>{t("diversification.Diversification tittle")}</Typography>
                </Box>
                <Typography className={classes.Introduction}>{t("diversification.Diversification sub tittle")}</Typography>
                <Typography className={classes.discription}>{t("diversification.Diversification discription1")}</Typography>
                <Typography className={classes.Introduction}>{t("diversification.Diversification sub tittle1")}</Typography>
                <Typography className={classes.discription}>{t("diversification.Diversification discription2")}</Typography>
                <Typography className={classes.discription}>{t("diversification.Diversification discription4")}</Typography>
                <Typography className={classes.discription}>{t("diversification.Diversification discription5")}</Typography>
                <Typography className={classes.discription}>{t("diversification.Diversification discription6")}</Typography>
                <ul>
                    <li><Typography className={classes.discription}>{t("diversification.Diversification discription7")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("diversification.Diversification discription8")}</Typography></li>
                </ul>
                <Typography className={classes.discription}>{t("diversification.Diversification discription9")}</Typography>
                <Typography className={classes.discription}>{t("diversification.Diversification discription10")}</Typography>
                <Typography className={classes.discription}>{t("diversification.Diversification discription11")}</Typography>
                <Typography className={classes.discription}>{t("diversification.Diversification discription12")}</Typography>
                <Typography className={classes.discription}>{t("diversification.Diversification discription13")}</Typography>
                <Typography className={classes.discription}>{t("diversification.Diversification discription14")}</Typography>
                <GridContainer className={classes.gridcontainer}>
                    <GridItem item sm={3} xs={6} md={3}><Typography className={classes.discription}>{t("diversification.Diversification discription15")}</Typography></GridItem>
                    <GridItem item sm={3} xs={6} md={3}><Typography className={classes.discription}>{t("diversification.Diversification discription16")}</Typography></GridItem>
                </GridContainer>
                <Image width={313} height={207} className={classes.image} alt="image" src={image} />
                <Typography className={classes.discription}>{t("diversification.Diversification discription17")}</Typography>
                <ul>
                    <li><Typography className={classes.discription}>{t("diversification.Diversification discription18")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("diversification.Diversification discription19")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("diversification.Diversification discription20")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("diversification.Diversification discription21")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("diversification.Diversification discription22")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("diversification.Diversification discription23")}</Typography></li>
                </ul>
                <Divider className={classes.Divider} />
            </Container>
        </section>
    );
}

const useStyles = makeStyles((theme, local) => ({
    diversificationSection: {
        padding: "100px",
        [theme.breakpoints.down("sm")]: {
            padding: "10px",
        },
    },
    Container:{
        padding:'0px 10px 0px 10px',
        [theme.breakpoints.down("md")]: {
            padding:'0px 20px 0px 20px',
        },
        [theme.breakpoints.down("sm")]: {
            padding: "20px",
        },
    },
    Title: {
        fontSize: "30px",
        color: '#1E396C',
        fontWeight: 600,
        margin:'20px 0px 20px 0px',
        [theme.breakpoints.down("sm")]: {
            fontSize: "25px",
            margin:'16px 0px 16px 0px',
        },
    },
    titleBox: {
        paddingBottom: "20px",
        [theme.breakpoints.down("sm")]: {
            paddingBottom: "0px",
        },
    },

    Introduction: {
        fontWeight: "550px",
        fontSize: "25px",
        color: "#1E396C",
        padding: "15px 0px 15px 0px",
        [theme.breakpoints.down("sm")]: {
            fontWeight: "550px",
            fontSize: "25px",
            color: "#1E396C",
        },
    },
    discription: {
        fontWeight: "normal",
        fontSize: "18px",
        color: "#1E396C",
        lineHeight: "30px",
        textAlign: "justify",
        padding: "15px 0px 15px 0px",
        [theme.breakpoints.down("sm")]: {
            fontWeight: "normal",
            fontSize: "15px",
            color: "#1E396C",
            paddingBottom: "5px !important",
            paddingTop: "5px !important",
            textAlign: "justify",
        },
    },
    Divider: {
        marginTop: "10px",
        marginBottom: "10px",
    },
    ArabicHide: {
        display: local === "ar" ? "none" : "initial",
    },
    gridcontainer: {
        width: "70%",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },
    image: {
        position: "relative",
        left: "40px",
        right: "40px",
    },
    Divider: {
        marginTop: "10px",
        marginBottom: "10px",
    },
}));
