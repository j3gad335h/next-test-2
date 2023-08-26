import { Box, Container, Divider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";

export default function DebtReschedulingSection() {
    const classes = useStyles();
    const { t } = useTranslation('common');

    return (
        <section>
            <Container className={classes.Container}>
                <Box className={classes.titleBox}>
                    <Typography variant='h1' className={classes.Title}>{t("debt.Debt Rescheduling tittle")}</Typography>
                </Box>
                <Typography className={classes.Introduction}>{t("debt.Debt Rescheduling sub tittle")}</Typography>
                <Typography className={classes.discription}>{t("debt.Debt Rescheduling discription1")}</Typography>
                <ul>
                    <li><Typography className={classes.discription}>{t("debt.Debt Rescheduling discription3")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("debt.Debt Rescheduling discription4")}</Typography></li>
                </ul>
                <Typography className={classes.Introduction}>{t("debt.Debt Rescheduling sub tittle2")}</Typography>
                <Typography className={classes.discription}>{t("debt.Debt Rescheduling discription5")}</Typography>
                <Typography className={classes.discription}>{t("debt.Debt Rescheduling discription6")}</Typography>
                <Typography className={classes.discription}>{t("debt.Debt Rescheduling discription7")}</Typography>
                <Typography className={classes.Introduction}>{t("debt.Debt Rescheduling sub tittle3")}</Typography>
                <Typography className={classes.discription}>{t("debt.Debt Rescheduling discription8")}</Typography>
                <Typography className={classes.Introduction}>{t("debt.Debt Rescheduling sub tittle4")}</Typography>
                <Typography className={classes.discription}>{t("debt.Debt Rescheduling discription9")}</Typography>
                <Typography className={classes.discription}>{t("debt.Debt Rescheduling discription10")}</Typography>
                <Divider className={classes.Divider} />
            </Container>
        </section>
    );
}

const useStyles = makeStyles((theme, local) => ({
    Container:{
        [theme.breakpoints.up("sm")]: {
            padding:'0px !important',
        },
    },
    debtReschedulingSection: {
        padding: "0px",
        [theme.breakpoints.down("sm")]: {
            padding: "10px",
        },
    },

    Title: {
        fontSize: "30px",
        color: '#1E396C',
        fontWeight: 'bold',
        textAlign:'center',
        margin:'20px 0px 20px 0px',
    },
    titleBox: {
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
    },


}));
