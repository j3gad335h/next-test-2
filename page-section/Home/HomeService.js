import React from 'react'
import { makeStyles } from '@mui/styles'
import BaseUrl from '../../baseUrl'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function HomeService() {
    const { locale } = useRouter();
    const classes = useStyles();
    const { t } = useTranslation('common');
    const image1 = "/assetsNew/images/ServiceIcons/hand.webp";
    const image3 = "/assetsNew/images/ServiceIcons/stock-exchange-app.webp";
    const image4 = "/assetsNew/images/ServiceIcons/shariahcompliant.webp";
    const image2 = "/assetsNew/images/ServiceIcons/stopwatch.webp";
    return (
        <Container  maxWidth="xl" className={classes.container}>
            <Grid spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} container >
                <Grid className={classes.serviceGrid} item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Box className={classes.serviceBox}>
                        <Image width={25} height={25} alt="service1" src={image1} className={classes.serviceImage} />
                    </Box>
                    <Typography className={classes.ServiceText}  >{t("home.service1")}</Typography>
                </Grid>
                <div className={classes.ServiceDivider} />
                <Grid className={classes.serviceGrid} item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Box className={classes.serviceBox}>
                        <Image width={25} height={25} alt="service2" src={image2} className={classes.serviceImage} />
                    </Box>
                    <Typography className={classes.ServiceText}  >{t("home.service2")}</Typography>
                </Grid>
                <div className={classes.ServiceDivider} />
                <Grid className={classes.serviceGrid} item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Box className={classes.serviceBox}>
                        <Image width={25} height={25} alt="service3" src={image3} className={classes.serviceImage} />
                    </Box>
                    <Typography className={classes.ServiceText}  >{t("home.service3")}</Typography>
                </Grid>
                <div className={classes.ServiceDivider} />
                <Grid className={classes.serviceGrid} item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Box className={classes.serviceBox}>
                        <Image width={25} height={25} alt="service4" src={image4} className={classes.serviceImage} />
                    </Box>
                    <Typography className={classes.ServiceText}  >{t("home.service4")}</Typography>
                </Grid>

            </Grid>
        </Container>
    )
}
const useStyles = makeStyles((theme, locale) => ({
    container: {
        background: '#36A852',
        position: 'relative',
        top: '-80px !important',
        borderRadius: '5px',
        padding:'0px',
   
        [theme.breakpoints.down("lg")]: {
            background: '#36A852',
            position: 'relative',
            top: '-50px !important',
            borderRadius: '5px',
            padding:'0px',

        },
        [theme.breakpoints.down('md')]: {
            background: '#36A852',
            position: 'relative',
            top: '20px !important',
            borderRadius: '5px',
            padding:'0px',


        },
        [theme.breakpoints.down('sm')]: {
            background: '#36A852',
            position: 'relative',
            top: '17px !important',
            borderRadius: '5px',

        },
    },
    serviceImage: {
        width: "35px",
        color: "#fff",
        height: "35px"
    },
    serviceBox: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ServiceText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: '18px',
        marginTop: 'auto',
        marginBottom: 'auto',
        [theme.breakpoints.down("lg")]: {
            textAlign: 'center',
            color: '#fff',
            fontSize: '15px',
            marginTop: 'auto',
            marginBottom: 'auto',
        },
    },
    ServiceDivider: {
        "&:after": {
            content: '""',
            width: "1px",
            height: "65px",
            background: "#FFF",
            position: "absolute",
            marginTop: "25px",
        },
        [theme.breakpoints.down("md")]: {
            "&:after": {
                content: '""',
                width: "100%",
                height: "1px",
                background: "#FFF",
                position: "absolute",
                marginTop: "0px",
                left: "0px",
            },
        },
        [theme.breakpoints.down("sm")]: {
            "&:after": {
                content: '""',
                width: "100%",
                height: "1px",
                background: "#FFF",
                position: "absolute",
                marginTop: "0px",
                left: "0px",
            },
        },
    },
    serviceGrid: {
        paddingTop: '30px',
        paddingBottom: '30px',
        paddingLeft: '0px !important',
        paddingRight: '0px',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start'
    }
}));
