import { Box, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import Image from 'next/image';
import { useRouter } from 'next/router';
import BaseUrl from '../../baseUrl';
export default function GetFinanceService() {
    const { locale } = useRouter();
    const classes = useStyles();
    const { t } = useTranslation('common');
    const image1 ="/assetsNew/images/ServiceIcons/file.webp";
    const image2 ="/assetsNew/images/ServiceIcons/stock-exchange-app.webp";
    const image3 = "/assetsNew/images/ServiceIcons/calendar-interface-symbol-tool.webp";
    const image4 = "/assetsNew/images/ServiceIcons/stopwatch.webp";
    const image5 = "/assetsNew/images/ServiceIcons/shariahcompliant.webp";
    return (
        <Container maxWidth="xl" className={classes.container}>
            <Grid style={{marignLeft:'10px !importnat'}}  columns={{ xs: 4, sm: 8, md: 12 }} container  >
                <Grid className={classes.serviceGrid} item xs={12} sm={12} md={2.4} lg={2.4} xl={2.4}>
                    <Box className={classes.serviceBox}>
                        <Image width={25} height={25} alt="service1" src={image1} className={classes.serviceImage} />
                    </Box>
                    <Typography className={classes.ServiceText}  >{t("getFinance.service1")}</Typography>
                </Grid>
                <div className={classes.ServiceDivider} />
                <Grid className={classes.serviceGrid} item xs={12} sm={12} md={2.4} lg={2.4} xl={2.4}>
                    <Box className={classes.serviceBox}>
                        <Image width={25} height={25} alt="service2" src={image2} className={classes.serviceImage} />
                    </Box>
                    <Typography className={classes.ServiceText}  >{t("getFinance.service2")}</Typography>
                </Grid>
                <div className={classes.ServiceDivider} />
                <Grid className={classes.serviceGrid} item xs={12} sm={12} md={2.4} lg={2.4} xl={2.4}>
                    <Box className={classes.serviceBox}>
                        <Image width={25} height={25} alt="service3" src={image3} className={classes.serviceImage} />
                    </Box>
                    <Typography className={classes.ServiceText}  >{t("getFinance.service3")}</Typography>
                </Grid>
                <div className={classes.ServiceDivider} />
                <Grid className={classes.serviceGrid} item xs={12} sm={12} md={2.4} lg={2.4} xl={2.4}>
                    <Box className={classes.serviceBox}>
                        <Image width={25} height={25} alt="service4" src={image4} className={classes.serviceImage} />
                    </Box>
                    <Typography className={classes.ServiceText}  >{t("getFinance.service4")}</Typography>
                </Grid>
                <div className={classes.ServiceDivider} />
                <Grid className={classes.serviceGrid} item xs={12} sm={12} md={2.4} lg={2.4} xl={2.4}>
                    <Box className={classes.serviceBox}>
                        <Image width={25} height={25} alt="service5" src={image5} className={classes.serviceImage} />
                    </Box>
                    <Typography className={classes.ServiceText}  >{t("getFinance.service5")}</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}
const useStyles = makeStyles((theme, locale) => ({
    container: {
        background: '#36A852',
        position: 'relative',
        top: '-120px !important',
        borderRadius: '5px',
        padding:'0px',
            [theme.breakpoints.down("xl")]: {
                background: '#36A852',
                position: 'relative',
                top: '-100px !important',
                borderRadius: '5px',
                padding:'0px',
            },
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
            top: '30px !important',
            borderRadius: '5px',
            padding:'0px',


        },
        [theme.breakpoints.down('sm')]: {
            background: '#36A852',
            position: 'relative',
            top: '0px !important',
            borderRadius: '5px',
            boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 40%), 0px 1px 1px 0px rgb(0 0 0 / 44%), 0px 1px 3px 0px rgb(0 0 0 / 52%)",

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
