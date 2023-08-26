import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';
import BaseUrl from '../../baseUrl';
import HeroBanner from '../../components/Banner/HeroBanner';

const Image1 = "/assetsNew/images/contact/contact_banner.webp";


export default function ContactUsBanner() {
    const { locale } = useRouter();
    const classes = useStyles();
    const { t } = useTranslation('common');

    return (
        <HeroBanner className={classes.heroBanner} backgroundImage={Image1}>
            <Container className={classes.container}>
                <Typography color="inherit" variant="h1" className={classes.bannerText}> {t('contact.bannerText')}
                </Typography>
            </Container>
        </HeroBanner>

    )
}

const useStyles = makeStyles((theme) => ({
    bannerText: {
        textAlign: 'initial',
        fontSize: '18px',
        fontWeight: 'bold',
        color: "#fff",
        lineHeight: " 1.5 !important",
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
            color: "#35A052",
            background: "#ffff",
            pointerEvent: "all",
            border: '1px solid #35A052',
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
                color: "#35A052",
                background: "#ffff",
                pointerEvent: "all",
                border: '1px solid #35A052',
            },
        },
    },
    container: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '0px',
        minHeight: '30vh',
        paddingLeft: '150px',
        [theme.breakpoints.up('xs')]: {
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: '0px',
            minHeight: '30vh',
            paddingLeft: '200px',
        },
        [theme.breakpoints.up('sm')]: {
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: '0px',
            minHeight: '30vh',
            paddingLeft: '400px',
        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: '0px',
            minHeight: '50vh',
            paddingLeft: '550px',
        },
        [theme.breakpoints.up('lg')]: {
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: '0px',
            minHeight: '60vh',
            paddingLeft: '600px',
        },
        [theme.breakpoints.up('xl')]: {
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: '0px',
            minHeight: '60vh',
            paddingLeft: '600px',
        },
    },
}));


