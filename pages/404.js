import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ReactGA from "react-ga4";
import { useTranslation } from 'react-i18next';
import useTwitterPixel from '../TwitterPixel';
import BaseUrl from '../baseUrl';
export default function Error404() {
    const classes = useStyles();
    const { t } = useTranslation('common');
    const router = useRouter();
    const Error = "/assetsNew/images/404/404.webp"
    const { locale } = useRouter();
    useTwitterPixel('o7ukz');
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: "/404",});
      }, [router]);
    return (
        <Box className={classes.ContainerBox}>
            <Box className={classes.JustifyBox}>
                <Image  width={100} height={200} src={Error} alt="404" className={classes.ImageBox} />
                <Typography variant='h1' className={classes.ErrorText}>{t("error.Oops")}</Typography>
                <Typography className={classes.ErrorText}>{t("error.That Page Doesn't Exit")}</Typography>
                <Button
                    variant="contained"
                    sx={{ textTransform: "capitalize" }}
                    href={`/${locale}/`}
                    className={classes.ErrorButton}>
                    {t("error.Go to Home Button")}
                </Button>
            </Box>
        </Box>
    )
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale)),
        },
    };
}
const useStyles = makeStyles((theme) => ({
    JustifyBox: {
        maxWidth: 320,
        flexDirection: "column",
        justifyContent: "center",
        display: "flex",
    },
    ContainerBox: {
        alignItems: "center",
        justifyContent: "center",
        height: "85vh !important",
        display: "grid",
    },
    ErrorText: {
        textAlign: "center",
        fontSize: "32px",
    },
    ImageBox: {
        width: "100%",
        color: "#fff",
        paddingTop: "25px",
        paddingBottom: "25px",
    },
    ErrorButton: {
        backgroundColor: "#37A753",
        color: "#ffffff",
        "&:hover,&:focus": {
            color: "#ffffff",
            backgroundColor: "#37A753",
        },
    },
}));