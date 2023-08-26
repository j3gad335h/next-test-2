import { Box, Container, Divider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";

export default function FinanceeDebtorTermsConditionsSection() {
    const classes = useStyles();
    const { t } = useTranslation('common');

    return (
        <section>
            <Container className={classes.Container}>
                <Box>
                    <Typography variant='h1' className={classes.hometittle}>{t("financeeDebt.Financee Debtor Terms And Conditions tittle")}</Typography>
                </Box>
                <Typography className={classes.Introduction}>{t("financeeDebt.Financee Debtor Terms And Conditions sub tittle1")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription1")} &nbsp;<a href="https://www.raqamyah.com/">www.raqamyah.com</a>&nbsp;
                    <span>{t("financeeDebt.Financee Debtor Terms And Conditions discription1 1")}</span>
                    <span className={classes.ArabicHide}>{t("financeeDebt.Financee Debtor Terms And Conditions discription1 1 2")}</span>
                    &nbsp;<a className={classes.ArabicHide} href="https://www.raqamyah.com/">www.raqamyah.com</a>&nbsp;&nbsp;
                    &nbsp;<span className={classes.ArabicHide}>{t("financeeDebt.Financee Debtor Terms And Conditions discription1 2")}</span>&nbsp;
                    <a className={classes.ArabicHide} href="https://www.raqamyah.com/"> www.raqamyah.com</a>
                    &nbsp;
                    <span className={classes.ArabicHide}>{t("financeeDebt.Financee Debtor Terms And Conditions discription1 3")}</span>
                </Typography>

                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription2")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription3")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription4")}&nbsp;<a href="https://www.raqamyah.com/">www.raqamyah.com</a>&nbsp;{t("financeeDebt.Financee Debtor Terms And Conditions discription4 1")} </Typography>
                <Typography className={classes.discription}>
                    {t("financeeDebt.Financee Debtor Terms And Conditions discription5")}&nbsp;
                    <a href="mailto:contactus@raqamyah.com">contactus@raqamyah.com</a>
                    &nbsp;{t("financeeDebt.Financee Debtor Terms And Conditions discription5 1")}&nbsp;
                    <a href="tel:920004032">920004032</a> &nbsp;{" "}
                    {t("financeeDebt.Financee Debtor Terms And Conditions discription5 2")}
                </Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription6")} </Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription7")}</Typography>
                <Typography className={classes.discription}>
                &nbsp;{t("financeeDebt.Financee Debtor Terms And Conditions discription8")}&nbsp;
                    <a href="mailto:contactus@raqamyah.com">contactus@raqamyah.com.</a>
                    &nbsp;{t("financeeDebt.Financee Debtor Terms And Conditions discription8 1")}
                    <a href="tel:920004032">920004032</a>
                </Typography>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>{t("financeeDebt.Financee Debtor Terms And Conditions sub tittle2")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription9")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription10")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription11")}</Typography>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>{t("financeeDebt.Financee Debtor Terms And Conditions sub tittle3")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription12 1")}</Typography>
                <ul>
                    <li><Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription12")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription13")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription14")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription15")}</Typography></li>
                </ul>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription16")}</Typography>
                <ul>
                    <li><Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription17")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription18")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription19")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription20")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription21")}</Typography></li>
                </ul>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription22")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription23")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription24")}</Typography>
                <Divider className={classes.Divider} />
                <Typography className={classes.hometittle}>{t("financeeDebt.Financee Debtor Terms And Conditions tittle2")}</Typography>
                <Typography className={classes.Introduction}>{t("financeeDebt.Financee Debtor Terms And Conditions sub tittle4")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription25")}</Typography>
                <Typography className={classes.Introduction}>{t("financeeDebt.Financee Debtor Terms And Conditions sub tittle5")}</Typography>
                <Typography className={classes.discription}> {t("financeeDebt.Financee Debtor Terms And Conditions discription26")}</Typography>
                <ul>
                    <li><Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription27")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription28")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription29")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription30")}</Typography></li>
                </ul>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>{t("financeeDebt.Financee Debtor Terms And Conditions sub tittle6")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription31")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription32")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription33")}</Typography>
                <ul>
                    <li><Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription34")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription35")}</Typography></li>
                </ul>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>{t("financeeDebt.Financee Debtor Terms And Conditions sub tittle7")} </Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription36")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription37")}
                </Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription38")} </Typography>
                <ul>
                    <li><Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription39")}</Typography></li>
                    <li> <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription40")} </Typography></li>
                    <li><Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription41")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription42")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription43")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription44")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription45")}</Typography></li>
                    <li><Typography className={classes.discription}> {t("financeeDebt.Financee Debtor Terms And Conditions discription47")}</Typography> </li>
                    <li><Typography className={classes.discription}> {t("financeeDebt.Financee Debtor Terms And Conditions discription48")}</Typography></li>
                </ul>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription49")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription50")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription51")}</Typography>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>{t("financeeDebt.Financee Debtor Terms And Conditions sub tittle8")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription52")}</Typography>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>{t("financeeDebt.Financee Debtor Terms And Conditions sub tittle9")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription53")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription54")}</Typography>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>{t("financeeDebt.Financee Debtor Terms And Conditions sub tittle10")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription55")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription56")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription57")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription58")}</Typography>
                <Typography className={classes.discription}>{t("financeeDebt.Financee Debtor Terms And Conditions discription59")}</Typography>
            </Container>
        </section>
    );
}

const useStyles = makeStyles((theme, local) => ({
 
    Container:{
        padding:'10px 10px 0px 10px',
        [theme.breakpoints.down("sm")]: {
            padding:'20px 20px 20px 10px', 
        }
    },
    hometittle: {
        fontWeight: "bold",
        fontSize: "38px",
        color: "#1E396C",
        paddingBottom: "10px",
        margin:'25px 0px 25px 0px !important',
        [theme.breakpoints.down("sm")]: {
            fontWeight: "bold",
            fontSize: "32px",
            color: "#1E396C",
        },
    },
    Introduction: {
        fontWeight: "550px",
        fontSize: "25px",
        color: "#1E396C",
        paddingBottom: "10px",
        [theme.breakpoints.down("sm")]: {

            fontWeight: "550px",
            fontSize: "20px",
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
            textAlign: "justify",
            paddingBottom: "5px !important",
            paddingTop: "5px !important",
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
