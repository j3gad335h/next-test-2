import React from 'react';
import Typography from '@mui/material/Typography';
import FlipBox from '../../components/FlipBox/FlipBox';
import BaseUrl from '../../baseUrl';
import { makeStyles } from '@mui/styles';
import { Box, Container, Divider, Grid } from '@mui/material';
import { useTranslation } from "next-i18next";
export default function HomeFinanceSolution() {
    const classes = useStyles();
    const { t } = useTranslation('common');
    const image1 = "/assetsNew/images/flipImages/back3.webp";
    const image6 =  "/assetsNew/images/flipImages/back1.webp";
    const image2 = "/assetsNew/images/flipImages/back2.webp";
    const image3 = "/assetsNew/images/flipImages/back4.webp";
    const image5 = "/assetsNew/images/flipImages/back5.webp";
    const image4 = "/assetsNew/images/flipImages/back6.webp";
    return (
        <section className={classes.section}>
            <Container>
                <Grid container spacing={2}>
                    <Grid className={classes.titleGrid} textAlign={'center'} item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography className={classes.Title}>{t('home.finance solutions tittle')}</Typography>
                        <Divider className={classes.Divider} />
                        <Box className={classes.DiscriptionBox}>
                            <Typography className={classes.Discription}>{t('home.finance solutions discription')}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="false" className={classes.GridRow}>
                <Grid container spacing={2}>
                    <Grid className={classes.GridRow} item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <FlipBox
                            backgroundImage={image1}
                            frontContent={
                                <div><Typography className={classes.frontContent} variant="h5" component="div">{t('home.finace service1')}</Typography></div>
                            }
                            backContent={
                                <div><Typography className={classes.backContent} variant="h5" component="div">{t('home.finace service discription1')}</Typography> </div>
                            }
                        />
                    </Grid>
                    <Grid className={classes.GridRow} item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <FlipBox
                            backgroundImage={image2}
                            frontContent={
                                <div><Typography variant="h5" className={classes.frontContent} component="div">{t('home.finace service2')}</Typography></div>
                            }
                            backContent={
                                <div><Typography variant="h5" className={classes.backContent} component="div">{t('home.finace service discription2')}</Typography></div>
                            }
                        />
                    </Grid>
                    <Grid className={classes.GridRow} item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <FlipBox
                            backgroundImage={image3}
                            frontContent={
                                <div><Typography variant="h5" className={classes.frontContent} component="div">{t('home.finace service3')}</Typography>
                                </div>
                            }
                            backContent={
                                <div><Typography variant="h5" className={classes.backContent} component="div">{t('home.finace service discription3')}</Typography></div>
                            }
                        />
                    </Grid>
                    <Grid className={classes.GridRow} item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <FlipBox
                            backgroundImage={image4}
                            frontContent={
                                <div><Typography variant="h5" className={classes.frontContent} component="div">{t('home.finace service4')}</Typography></div>
                            }
                            backContent={
                                <div><Typography variant="h5" className={classes.backContent} component="div">{t('home.finace service discription4')}</Typography></div>
                            }
                        />
                    </Grid>
                    <Grid className={classes.GridRow} item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <FlipBox
                            backgroundImage={image5}
                            frontContent={
                                <div><Typography className={classes.frontContent} variant="h5" component="div">{t('home.finace service5')}</Typography></div>
                            }
                            backContent={
                                <div><Typography variant="h5" className={classes.backContent} component="div">{t('home.finace service discription5')}</Typography></div>
                            }
                        />
                    </Grid>
                    <Grid className={classes.GridRow} item xs={12} sm={6} md={4} lg={4} xl={4}>
                        <FlipBox
                            backgroundImage={image6}
                            frontContent={
                                <div><Typography className={classes.frontContent} variant="h5" component="div">{t('home.finace service6')}</Typography></div>
                            }
                            backContent={
                                <div><Typography variant="h5" className={classes.backContent} component="div">{t('home.finace service discription6')}</Typography></div>
                            }
                        />
                    </Grid>
                </Grid>
            </Container>
        </section>

    )
}
const useStyles = makeStyles((theme, locale) => ({
    section: {
        paddingTop: '50px',
        paddingBottom: '50px',
        [theme.breakpoints.down('md')]: {
            paddingTop: '50px',
            paddingBottom: '50px'
        }
    },
    GridRow: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
    },
    Title: {
        fontSize: '35px',
        color: '#1E396C',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: '23px',
            color: '#1E396C',
            textAlign: 'center',
            fontWeight: '600px',
        }
    },
    DiscriptionBox:{
        padding: "0px 16px 16px 16px",
        [theme.breakpoints.down('md')]: {
            padding: "0px 16px 16px 16px",
        } 
    },
    Discription: {
        color: '#1E396C',
        textAlign: 'center',
        fontSize: '20px',
        [theme.breakpoints.down('md')]: {
            fontSize: '18px',
        }
    },
    Divider: {
        width: '100px',
        height: '2px',
        background: '#37A753',
        marginTop: '10px',
        display: "inline-block",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    SubTitle: {
        textAlign: 'center',
        fontSize: '25px',
        color: "#1E396C",
        padding: '15px',
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            fontSize: '20px',
            color: "#1E396C",
            padding: '15px',
        }
    },
    serviceGrid: {
        paddingTop: '25px',
        paddingBottom: '25px',
        paddingLeft: '0px !important',
        paddingRight: '0px',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    discription: {
        fontSize: '19px',
        padding: '10px'
    },
    frontContent: {
        fontSize: '30px',
        [theme.breakpoints.down('md')]: {
            fontSize: '20px',
        }
    },
    backContent: {
        fontSize: '23px',
        [theme.breakpoints.down('md')]: {
            fontSize: '15px',
        }
    },
}));