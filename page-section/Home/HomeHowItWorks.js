import { Box, Container, Divider, Grid, List, ListItem, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import BaseUrl from '../../baseUrl';
import { Media } from '../../public/Helpers/helpers';

export default function HomeHowItWorks() {
    const classes = useStyles();
    const { locale } = useRouter();
    const { t } = useTranslation('common');
    const theme = useTheme();
    // const largeScreen = window.innerWidth < 600 ? true:false
    // const veryWideScreen = useMediaQuery(theme.breakpoints.up('min-width:"360px'), {
    //     noSsr: true,
    // });
    const veryWideScreen = Media(850)


    const Artboard1 = '/assetsNew/images/howitworks/Artboard1.webp';
    const Artboard2 = '/assetsNew/images/howitworks/Artboard2.webp';
    const Artboard3 = '/assetsNew/images/howitworks/Artboard3.webp';
    const Artboard4 = '/assetsNew/images/howitworks/Artboard4.webp';
    const Artboard5 = '/assetsNew/images/howitworks/Artboard5.webp';
    const Artboard1ar = '/assetsNew/images/howitworks/Artboard1-ar.webp';
    const Artboard2ar = '/assetsNew/images/howitworks/Artboard2-ar.webp';
    const Artboard3ar = '/assetsNew/images/howitworks/Artboard3-ar.webp';
    const Artboard4ar = '/assetsNew/images/howitworks/Artboard4-ar.webp';
    const Artboard5ar = '/assetsNew/images/howitworks/Artboard5-ar.webp';
    const image1 = '/assetsNew/images/ServiceIcons/howitworks-accodion.svg';
    const image2 = '/assetsNew/images/ServiceIcons/howitworks-accodion4.svg';
    const image3 = '/assetsNew/images/ServiceIcons/howworksac1.svg';
    const image4 = '/assetsNew/images/ServiceIcons/howworksac2.svg';

    const [image, setImage] = React.useState(locale === 'ar' ? Artboard5ar : Artboard5);
    let [count, setCount] = React.useState(1);
    const width = 'width' + count;
    React.useEffect(() => {

        let interval = '';
        if (count <= 4) {
            interval = setInterval(() => {
                setCount(count + 1);
            }, 5000);
        } else {
            setCount(1);
        }
        return () => {
            clearInterval(interval);
        };
    }, [count, width]);


    const getImage = () => {

        let result = '';
        if (width === 'width1') {
            if (locale === 'ar') {
                result = Artboard1ar;
            } else {
                result = Artboard1;
            }
        }
        if (width === 'width2') {
            if (locale === 'ar') {
                result = Artboard2ar;
            } else {
                result = Artboard2;
            }
        }

        if (width === 'width3') {
            if (locale === 'ar') {
                result = Artboard3ar;
            } else {
                result = Artboard3;
            }
        }
        if (width === 'width4') {
            if (locale === 'ar') {
                result = Artboard4ar;
            } else {
                result = Artboard4;
            }
        }

        return result;
    };

 
    return (
        <section className={classes.howItWorksScetion}>
            <Container maxWidth="false">
                <Grid container spacing={2}>
                    <Grid className={classes.titleGrid} textAlign="center" item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography className={classes.Title}>{t('home.Home how it works tittle')}</Typography>
                        <Divider className={classes.Divider} />
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="false">
                <Box py={5}>
                    <Grid container spacing={2}>
                        <Grid className={classes.servicImageeGrid} item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Image alt="finance-icon" height={veryWideScreen? 320: 120} width={veryWideScreen? 936: 350}  src={getImage()} />
                        </Grid>
                    </Grid>
                </Box>
                <List
                    style={{
                        display: veryWideScreen ? "flex" : "",
                        height: veryWideScreen ? "500px" : "500px",
                    }}>
                    <ListItem
                        style={{ 
                            display: !veryWideScreen && width !== "width1" && "none",
                            width: !veryWideScreen && width === "width1" && "100%",
                             }}
                        className={width === 'width1' ? classes.table__cell1_hover : classes.table__cell1}
                        onClick={() => {
                            setCount(1); setImage(locale === 'ar' ? Artboard1ar : Artboard1);
                        }}>
                        <Box className={classes.numberBox}>
                            <Typography style={{textAlign:locale==='ar'? 'right':'left'}} className={classes.number}>1.</Typography>
                        </Box>
                        <Box style={{
                            display: width !== 'width1' ? 'none' : 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',}}>

                            <Image height={veryWideScreen? 230: 150} width={veryWideScreen? 230: 150} alt="icon"  src={image1} />
                        </Box>
                        <Typography className={classes.workstittle}
                            style={{ display: width === 'width1' ? 'none' : null, marginTop: width !== 'width1' && 100, }}></Typography>
                        <Box>
                            <Typography style={{textAlign:locale==='ar'? 'right':'left'}} className={classes.workstittle}>{t('home.Home how it works box tittle1')}</Typography>
                            <Typography style={{ textAlign:locale==='ar'? 'right':'left', display: width === 'width1' ? 'flex' : 'none', }} className={classes.description}>{t('home.Home how it works box discription1')}</Typography>
                        </Box>
                    </ListItem>
                    <ListItem
                        style={{ display: !veryWideScreen && width !== "width2" && "none",
                        width: !veryWideScreen && width === "width2" && "100%", }}
                        className={width === 'width2' ? classes.table__cell2_hover : classes.table__cell2}
                        onClick={() => { setCount(2); setImage(locale === 'ar' ? Artboard2ar : Artboard2); }}>
                           <Box className={classes.numberBox}>
                            <Typography style={{textAlign:locale==='ar'? 'right':'left'}} className={classes.number}>2.</Typography>
                        </Box>
                        <Box
                            style={{
                                display: width !== 'width2' ? 'none' : 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Box>
                                <Image height={veryWideScreen? 230: 150} width={veryWideScreen? 230: 150} alt="icon"  src={image2} />
                            </Box>
                        </Box>
                        <Typography
                            className={classes.workstittle}
                            style={{ display: width === 'width2' ? 'none' : null, marginTop: width !== 'width2' && 100, }}
                        >
                      
                        </Typography>
                        <Box>
                            <Typography style={{textAlign:locale==='ar'? 'right':'left'}} className={classes.workstittle}>{t('home.Home how it works box tittle2')}</Typography>
                            <Typography className={classes.description} style={{textAlign:locale==='ar'? 'right':'left', display: width === 'width2' ? 'flex' : 'none', }}>{t('home.Home how it works box discription2')}</Typography>
                        </Box>
                    </ListItem>
                    <ListItem
                        style={{ display: !veryWideScreen && width !== "width3" && "none",
                        width: !veryWideScreen && width === "width3" && "100%",}}
                        className={width === 'width3' ? classes.table__cell3_hover : classes.table__cell3}
                        onClick={() => { setCount(3); setImage(locale === 'ar' ? Artboard3ar : Artboard3); }}>
                        <Typography style={{textAlign:locale==='ar'? 'right':'left'}} className={classes.number}>3.</Typography>
                        <Box
                            style={{
                                display: width !== 'width3' ? 'none' : 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Image height={veryWideScreen? 230: 150} width={veryWideScreen? 230: 150} alt="icon"  src={image3} />
                        </Box>
                        <Typography
                            className={classes.workstittle}
                            style={{
                                display: width === 'width3' ? 'none' : null,
                                marginTop: width !== 'width3' && 100,
                            }}
                        >
                         
                        </Typography>
                        <Box>
                            <Typography style={{textAlign:locale==='ar'? 'right':'left'}} className={classes.workstittle}>{t('home.Home how it works box tittle3')}</Typography>
                            <Typography className={classes.description} style={{textAlign:locale==='ar'? 'right':'left', display: width === 'width3' ? 'flex' : 'none', }}>{t('home.Home how it works box discription3')}</Typography>
                        </Box>
                    </ListItem>
                    <ListItem
                        style={{
                            display: !veryWideScreen && width !== "width4" && "none",
                            width: !veryWideScreen && width === "width4" && "100%",
                        }}
                        className={width === 'width4' ? classes.table__cell4_hover : classes.table__cell4}
                        onClick={() => {
                            setCount(4);
                            setImage(locale === 'ar' ? Artboard4ar : Artboard4);
                        }}>
                        <Typography style={{textAlign:locale==='ar'? 'right':'left'}} className={classes.number}>4.</Typography>
                        <Box
                            style={{
                                display: width !== 'width4' ? 'none' : 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Image height={veryWideScreen? 230: 150} width={veryWideScreen? 230: 150} alt="icon"  src={image4} />
                        </Box>
                        <Typography
                            className={classes.workstittle}
                            style={{
                                display: width === 'width4' ? 'none' : null,
                                marginTop: width !== 'width4' && 100,
                            }}>
                           
                        </Typography>
                        <Box>
                            <Typography style={{textAlign:locale==='ar'? 'right':'left'}} className={classes.workstittle}>{t('home.Home how it works box tittle4')}</Typography>
                            <Typography className={classes.description} style={{textAlign:locale==='ar'? 'right':'left', display: width === 'width4' ? 'flex' : 'none', }}>{t('home.Home how it works box discription4')}</Typography>
                        </Box>
                    </ListItem>
                </List>
            </Container>
        </section>
    );
}
const useStyles = makeStyles((theme, locale) => ({
    howItWorksScetion:{
        padding:'0px 50px 0px 50px',
        [theme.breakpoints.down('xl')]: {
            padding:'0px 50px 0px 50px',
        },
        [theme.breakpoints.down('lg')]: {
            padding:'0px 50px 0px 50px',
        },
        [theme.breakpoints.down('md')]: {
            padding:'0px 50px 0px 50px',
        },
        [theme.breakpoints.down('sm')]: {
            padding:'0px 10px 0px 10px',
        },
    },
    Title: {
        fontSize: '35px',
        color: '#1E396C',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: '23px',
        },
    },
    Discription: {
        color: '#1E396C',
        textAlign: 'center',
        fontSize: '20px',
    },
    Divider: {
        width: 'auto',
        height: '2px',
        background: '#37A753',
        marginLeft: '45%',
        marginRight: '45%',
        marginTop: '10px',
    },
    getFinanceQuickIcon: {
        width: '75%',
        height: '75%',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: '100%',
        },
    },
    servicImageeGrid: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
    },
    number: {
        fontSize: '40px',
        color: '#FFF',
        textAlign:locale ==='ar'?'right':'left',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    howworksicon: {
        width: '100px',
        height: '100px',
    },

    howitworks: {
        color: "#1E396C",
        textAlign: "center",
        top: "100px",
        display: "block",
    },

    howitworkquickimage: {
        width: "75%",
        height: "75%",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: "100%",
        },
    },
    numberBox: {
        display: 'flex',
        alignItems: 'center',
        textAlign:locale ==='ar'?'right':'left',
    },
 

    numbersection: {
        position: "relative",
        paddingLeft: "150px !important",
        paddingRight: "150px !important",
        backgroundImage: "no repeat",
    },

    howitworksimage: {
        width: "60%",
        [theme.breakpoints.down("sm")]: {
            width: "50%",
        },
    },
    table: {
        display: 'flex',
        textAlign:locale ==='ar'?'right':'left',
    },
    table__cell1: {
        position: 'relative',
        width: '25%',
        margin: '2px',
        minHeight: '550px !important',
        listStyle: 'none',
        pointerEvents: 'all',
        transition: 'width 1s cubic-bezier(.4, 0, .2, 1)',
        transitionDelay: '0',
        backgroundColor: '#29A4D3',
        display: 'block',
        textAlign:locale ==='ar'?'right':'left',
    },
    table__cell2: {
        position: 'relative',
        width: '25%',
        margin: '2px',
        minHeight: '550px !important',
        listStyle: 'none',
        pointerEvents: 'all',
        transition: 'width 1s cubic-bezier(.4, 0, .2, 1)',
        transitionDelay: '0',
        display: 'block',
        backgroundColor: '#2DA8B7',
        textAlign:locale ==='ar'?'right':'left',
    },
    table__cell3: {
        position: 'relative',
        width: '25%',
        margin: '2px',
        minHeight: '550px !important',
        listStyle: 'none',
        pointerEvents: 'all',
        transition: 'width 1s cubic-bezier(.4, 0, .2, 1)',
        transitionDelay: '0',
        display: 'block',
        backgroundColor: '#32AB97',
        textAlign:locale ==='ar'?'right':'left',
    },
    table__cell4: {
        position: 'relative',
        width: '25%',
        margin: '2px',
        minHeight: '550px !important',
        listStyle: 'none',
        pointerEvents: 'all',
        transition: 'width 1s cubic-bezier(.4, 0, .2, 1)',
        transitionDelay: '0',
        display: 'block',
        backgroundColor: '#3BB257',
        textAlign:locale ==='ar'?'right':'left',
    },
    table__cell1_hover: {
        width: '40%',
        backgroundColor: '#005397',
        opacity: '1',
        minHeight: '550px !important',
        transitionDelay: '300ms',
        pointerEvents: 'all',
        display:'block',
        textAlign:locale ==='ar'?'right':'left',
    },
    table__cell2_hover: {
        width: '40%',
        backgroundColor: '#005397',
        opacity: '1',
        minHeight: '550px !important',
        transitionDelay: '300ms',
        pointerEvents: 'all',
        display:'block',
        textAlign:locale ==='ar'?'right':'left',
    },
    table__cell3_hover: {
        width: '40%',
        backgroundColor: '#005397',
        opacity: '1',
        minHeight: '550px !important',
        transitionDelay: '300ms',
        pointerEvents: 'all',
        display:'block',
        textAlign:locale ==='ar'?'right':'left',
    },
    table__cell4_hover: {
        width: '40%',
        backgroundColor: '#005397',
        opacity: '1',
        minHeight: '550px !important',
        transitionDelay: '300ms',
        pointerEvents: 'all',
        display:'block',
        textAlign:locale ==='ar'?'right':'left',
    },
    span: {
        color: '#fff',
        margin: '100',
        marginBottom: '0px',
        opacity: '0',

    },
    workstittle: {
        color: '#fff',
        position: 'relative',
        paddingLeft: '30px',
        paddingRight: '30px',
        fontSize: '23px',
        textAlign:locale ==='ar'?'right':'left',
    },
    description: {
        color: '#fff',
        position: 'relative',
        paddingLeft: '30px',
        paddingRight: '30px',
        textAlign:locale ==='ar'?'right':'left',
    },
    icon: {
        width: '90px',
        height: '90px',
        position: 'relative',
        left: '150px',
        top: '-50px',
        right: '70px',
    },
    icon4: {
        width: '90px',
        height: '90px',
        position: 'relative',
        left: '150px',
        top: '-110px',
        right: '70px',
    },

    table__cell1_hover_span: {
        opacity: '1',
        transitionDelay: '300ms',
    },
    table__cell2_hover_span: {
        opacity: '1',
        transitionDelay: '300ms',
    },
    table__cell3_hover_span: {
        opacity: '1',
        transitionDelay: '300ms',
    },
    table__cell4_hover_span: {
        opacity: '1',
        transitionDelay: '300ms',
    },
}));
