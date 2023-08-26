import { Box, Container, Divider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function RecoveryProcessSection() {
    const classes = useStyles();
    const { locale } = useRouter();
    const { t } = useTranslation('common');
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <section className={classes.recoverySection} >
            <Container className={classes.Container}>
                <Box className={classes.titleBox}>
                    <Typography variant='h1' className={classes.Title}>{t("recovery.Recovery Process tittle")}</Typography>
                </Box>
                <Typography className={classes.Introduction}>{t("recovery.Recovery Process sub tittle")}</Typography>
                <Typography className={classes.discription}>{t("recovery.Recovery Process discription1")}</Typography>
                <ul>
                    <li>
                        <Typography className={classes.discription}>{t("recovery.Recovery Process discription2")}</Typography>
                    </li>
                    <li>
                        <Typography className={classes.discription}>{t("recovery.Recovery Process discription3")}&nbsp;<Link href={`/${locale}/debtRescheduling`} >{t("recovery.Recovery Process discription4")}</Link>&nbsp;
                            <span className={classes.ArabicHide}>{t("recovery.Recovery Process discription5")}</span>
                        </Typography>
                    </li>
                    <ul>
                        <li>
                            <Typography className={classes.discription}>{t("recovery.Recovery Process discription6")}</Typography>
                        </li>
                        <li>
                            <Typography className={classes.discription}>{t("recovery.Recovery Process discription7")}</Typography>
                        </li>
                    </ul>
                </ul>
                <Typography className={classes.discription}>{t("recovery.Recovery Process discription8")}</Typography>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>{t("recovery.Recovery Process sub tittle1")}</Typography>
                <Typography className={classes.discription}>{t("recovery.Recovery Process discription9")}</Typography>
                <Divider className={classes.Divider} />
            </Container>
        </section>
    );
}

const useStyles = makeStyles((theme, local) => ({
    Container:{
        padding:'0px',
    },
    Title: {
        fontSize: "25px",
        color: '#1E396C',
        fontWeight:600,
        margin:'16px 0px 16px 0px',
        [theme.breakpoints.down("sm")]: {
            fontSize: "20px",
        }
    },
    titleBox:{
        paddingBottom: "20px",
    },
  
    Introduction: {
        fontWeight: "550px",
        fontSize: "25px",
        color: "#1E396C",
        paddingBottom: "5px",
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
        paddingBottom: "5px !important",
        paddingTop: "5px !important",
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
    }
}));
