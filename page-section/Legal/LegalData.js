import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function LegalData() {
    const classes = useStyles();
    const { t } = useTranslation('common');
    const { locale } = useRouter();
    return (
        <section>
            <Container className={classes.Container}>
                <Typography variant='h1' className={classes.Title}>{t("legal.Legal tittle")}</Typography>
                <ul>
                    <li>
                        <Link href={`${locale}/termsAndConditions`} className={classes.homepragraph}>
                            {t("legal.General Terms and Conditions")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={`/${locale}/financerTermsConditions`}
                            className={classes.homepragraph}
                        >
                            {t("legal.Financers Terms and Conditions")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={`${locale}/financeeDebtorTermsConditions`}
                            className={classes.homepragraph}
                        >
                            {t("legal.Financee (debtor) Terms and Conditions")}
                        </Link>
                    </li>
                    <li>
                        {" "}
                        <Link href={`${locale}/privacyPolicy`} className={classes.homepragraph}>
                            {t("legal.Privacy Policy")}
                        </Link>
                    </li>
                </ul>
            </Container>
        </section>
    );
}

const useStyles = makeStyles((theme) => ({
    Container: {
        paddingLeft: '0px !important',
        paddingRight:'0px !important',
        margin:'0px 35px 0px 35px',
        [theme.breakpoints.down("lg")]: {
            paddingLeft: '20px !important',
            paddingRight:'20px !important',
            margin:'0px 0px 0px 0px',
        },
    },
    Title: {
        fontWeight: "bold",
        fontSize: "35px",
        color: "#1E396C",
        paddingBottom: "10px",
        [theme.breakpoints.down("lg")]: {
            fontWeight: "550px",
            fontSize: "25px",
        },
    },
    homepragraph: {
        fontWeight: "normal",
        fontSize: "20px",
        color: "#1E396C",
        lineHeight: "50px",
        textDecoration: "none",
        marignTop: "10px !important",
        [theme.breakpoints.down("lg")]: {
            fontWeight: "normal",
            fontSize: "18px",
        },
    },
}));
