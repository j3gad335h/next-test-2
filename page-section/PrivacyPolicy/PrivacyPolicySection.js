import { Box, Container, Divider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';
import BaseUrl from '../../baseUrl';
export default function PrivacyPolicySection() {
    const classes = useStyles();
    const { t } = useTranslation('common');
    const { locale } = useRouter();
    const image1 =  "/assetsNew/images/selectionProcess/backgroundImage.svg";
    return (
        <section>
            <Container className={classes.Container}>
                <Box className={classes.titleBox}>
                    <Typography variant='h1' className={classes.hometittle}>{t("privacy.Privacy Policy tittle")}</Typography>
                </Box>
                <Typography className={classes.Introduction}>{t("privacy.Privacy Policy sub tittle1")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription1")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription2")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription3")}</Typography>
                <Typography className={classes.discription}><strong>{t("privacy.Privacy Policy discription4")}</strong>{" "}{t("privacy.Privacy Policy discription4 1")}</Typography>
                <Typography className={classes.discription}><strong>{t("privacy.Privacy Policy discription5")}</strong>{" "}{t("privacy.Privacy Policy discription5 1")}</Typography>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>{t("privacy.Privacy Policy sub tittle2")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription6")}</Typography>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>{t("privacy.Privacy Policy sub tittle3")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription7")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription8")}</Typography>
                <ul>
                    <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription9")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription10")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription11")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription12")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription13")}</Typography></li>
                </ul>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription14")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription15")}</Typography>
                <ul>
                    <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription16")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription17")}</Typography></li>
                </ul>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription18")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription19")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription20")}</Typography>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>{t("privacy.Privacy Policy sub tittle4")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription21")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription22")}</Typography>
                <ul>
                    <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription23")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription24")}</Typography></li>
                    <ul>
                        <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription25")}</Typography></li>
                        <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription26")}</Typography></li>
                        <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription27")}</Typography></li>
                        <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription28")}</Typography></li>
                    </ul>
                    <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription29")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription30")}</Typography></li>
                    <ul>
                        <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription31")}</Typography></li>
                        <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription32")}</Typography></li>
                        <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription33")}</Typography></li>
                        <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription34")}</Typography></li>
                    </ul>
                    <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription35")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription36")}</Typography></li>
                </ul>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>{t("privacy.Privacy Policy sub tittle5")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription37")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription38")}</Typography>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>{t("privacy.Privacy Policy sub tittle6")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription39")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription40")} </Typography>
                <ul>
                    <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription41")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription42")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription43")}</Typography></li>
                </ul>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription44")}</Typography>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>{t("privacy.Privacy Policy sub tittle7")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription45")}
                </Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription46")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription47")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription48")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription49")}
                </Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription50")}</Typography>
                <ul>
                    <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription51")}</Typography></li>
                    <li><Typography className={classes.discription}>{t("privacy.Privacy Policy discription52")}</Typography></li>
                </ul>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription53")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription54")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription55")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription56")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription57")}</Typography>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>{t("privacy.Privacy Policy sub tittle8")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription58")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription59")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription60")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription61")}<a href="mailto:contactus@raqamyah.com">contactus@raqamyah.com.</a></Typography>
                <Divider />
                <Typography className={classes.Introduction}>{t("privacy.Privacy Policy sub tittle9")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription62")}</Typography>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>{t("privacy.Privacy Policy sub tittle10")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription63")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription64")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription65")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription66")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription67")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription68")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription69")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription70")}</Typography>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>{t("privacy.Privacy Policy sub tittle11")}</Typography>
                <Typography className={classes.discription}>{t("privacy.Privacy Policy discription71")}</Typography>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>{t("privacy.Privacy Policy sub tittle12")}</Typography>
                <Typography className={classes.discription}>&nbsp;{t("privacy.Privacy Policy discription72")}&nbsp;<a href="mailto:contactus@raqamyah.com">contactus@raqamyah.com.</a></Typography>
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
        paddingBottom: "20px",
        margin: '15px 0px 25px 0px',
        [theme.breakpoints.down("sm")]: {
            margin: '25px 0px 25px 0px',
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
        paddingBottom: "5px !important",
        paddingTop: "5 px !important",
        lineHeight: "30px",
        textAlign: "justify",
        [theme.breakpoints.down("sm")]: {

            fontWeight: "normal",
            fontSize: "15px",
            color: "#1E396C",
            paddingBottom: "5px !important",
            paddingTop: "5 px !important",
            textAlign: "justify",
        },
    },
    Divider: {
        marginTop: "10px",
        marginBottom: "10px",
    },
}));
