import { Button, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';
import BaseUrl from '../../baseUrl';
import HeroBanner from '../../components/Banner/HeroBanner';
const Image1 = "/assetsNew/images/Nupco/approved-banner-1.webp";
const useStyles = makeStyles((theme, locale) => ({
    bannerText: {
        textAlign: 'initial',
        fontSize: '18px',
        fontWeight: 'bold',
        color: "#fff",
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(0),
        [theme.breakpoints.up('xs')]: {
            textAlign: 'initial',
            fontSize: '18px',
            fontWeight: 'bold',
            color: "#fff",
            marginBottom: theme.spacing(2),
            marginTop: theme.spacing(0),
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(10),
            textAlign: 'initial',
            fontSize: '25px',
            fontWeight: 'bold',
            color: "#fff",
        },
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(10),
            textAlign: 'initial',
            fontSize: '30px',
            fontWeight: 'bold',
            color: "#fff",
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: theme.spacing(10),
            textAlign: 'initial',
            fontSize: '42px',
            fontWeight: 'bold',
            color: "#fff",
        },
        [theme.breakpoints.up('xl')]: {
            marginTop: theme.spacing(10),
            textAlign: 'initial',
            fontSize: '42px',
            fontWeight: 'bold',
            color: "#fff",
        },

    },
    Button: {
        background: "#35A052",
        textDecoration: 'none',
        color: '#fff',
        fontSize: '10px',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingTop: '2px',
        paddingBottom: '2px',
        borderRadius: '25px',
        margin: '2px',
        textTransform: 'capitalize',
        "&:hover": {
            color: '#fff',
            background: "#35A052",
            pointerEvent: "all",
          
        },
        [theme.breakpoints.up('sm')]: {
            background: "#35A052",
            textDecoration: 'none',
            color: '#fff',
            fontSize: '15px',
            paddingLeft: '15px',
            paddingRight: '15px',
            paddingTop: '5px',
            paddingBottom: '5px',
            borderRadius: '25px',
            margin: '5px',
            textTransform: 'capitalize',
            "&:hover": {
                color: '#fff',
                background: "#35A052",
                pointerEvent: "all",
              
            },
        },
    },
    container: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '0px',
        minHeight: '25vh',
        paddingLeft: '150px',
        [theme.breakpoints.up('xs')]: {
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '0px',
            minHeight: '25vh',
            paddingLeft: '200px',
        },
        [theme.breakpoints.up('sm')]: {
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '0px',
            minHeight: '30vh',
            paddingLeft: '400px',
        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '0px',
            minHeight: '30vh',
            paddingLeft: '500px',
        },
        [theme.breakpoints.up('lg')]: {
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '0px',
            minHeight: '60vh',
            paddingLeft: '600px',
        },
        [theme.breakpoints.up('xl')]: {
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '0px',
            minHeight: '60vh',
            paddingLeft: '600px',
        },
    }
}));
export default function NupcoBanner() {
    const { locale } = useRouter();
    const classes = useStyles();
    const { t } = useTranslation('common');
    const handleYourScroll1 = () => {
        window.scrollTo({
            top: 600,
            left: 0,
            behavior: "smooth",
        });
    };
    return (
        <HeroBanner className={classes.heroBanner} backgroundImage={Image1}>
            <Container className={classes.container}>
                <Typography color="inherit" variant="h1" className={classes.bannerText}>
                    {t('Campaign.Campaign Banner Text')}
                </Typography>
                <Button onClick={handleYourScroll1} size="large" className={classes.Button}>{t('Campaign.Campaign Banner Button Text')}</Button>
            </Container>
        </HeroBanner>
    )
}
