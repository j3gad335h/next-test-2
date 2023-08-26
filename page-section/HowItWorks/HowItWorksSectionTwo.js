import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import Image from 'next/image';
import BaseUrl from '../../baseUrl';
import React, { useEffect, useRef } from 'react';
export default function HowItWorksSectionTwo() {
    const classes = useStyles();
    const { t } = useTranslation('common');
    const image1 = "/assetsNew/images/howitworks/Graphics03.svg";
    const image2 = "/assetsNew/images/howitworks/Graphics04.svg";
    const image3 = "/assetsNew/images/howitworks/Graphics05.svg";
    const video = BaseUrl + "/assetsNew/images/Video/website_gif_edited.mp4";




    return (
        <section>
            <Container className={classes.howItworksContainer} maxWidth="md">
                <Grid container spacing={2}>
                    <Grid textAlign={'center'} item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography className={classes.Title}>{t('howitwork.How it works tittle')}</Typography>
                        <Divider className={classes.Divider} />
                        <Box p={2}>
                            <Typography className={classes.Discription}>{t('howitwork.How it works discription')}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container className={classes.howItworksContainer} maxWidth="md">
                <Box py={5}>
                    <Box mb={5} border={1} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={3} className={classes.imageBox} >
                                <Image width={216} height={154} className={classes.quickimage} src={image1} alt="icon" />
                            </Grid>
                            <Grid item xs={12} md={9} >
                                <Box mb={2}>
                                    <Typography className={classes.serviceTitle}>{t('howitwork.How it works service tittle1')}</Typography>
                                </Box>
                                <Typography className={classes.serviceParagraph}>{t('howitwork.How it works service discription1')}</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mb={5} border={1} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={3} className={classes.imageBox}>
                                <Image width={216} height={154} className={classes.quickimage} src={image2} alt="icon" />
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <Box mb={2}>
                                    <Typography className={classes.serviceTitle}>{t('howitwork.How it works service tittle2')}</Typography>
                                </Box>
                                <Typography className={classes.serviceParagraph}>{t('howitwork.How it works service discription2')}</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mb={5} border={1} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={3} className={classes.imageBox}>
                                <Image width={216} height={154} className={classes.quickimage} src={image3} alt="icon" />
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <Box mb={2}>
                                    <Typography className={classes.serviceTitle}>{t('howitwork.How it works service tittle3')}</Typography>
                                </Box>
                                <Typography className={classes.serviceParagraph}>{t('howitwork.How it works service discription3')}</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
            <Container className={classes.videosection}>
                <video className={classes.How} controls>
                    <source autoPlay loop src={video} type="video/mp4" />
                </video>
            </Container>
        </section>
    )
}
const useStyles = makeStyles((theme) => ({
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
        [theme.breakpoints.down('md')]: {
            fontSize: '18px',
        },
    },
    Divider: {
        width: 'auto',
        height: '2px',
        background: '#37A753',
        marginLeft: '45%',
        marginRight: '45%',
        marginTop: '10px',
    },
    howItworksContainer: {
        paddingLeft: '0px',
        paddingRight: '0px',
        [theme.breakpoints.down('md')]: {
            paddingLeft: '20px',
            paddingRight: '20px',
        },
    },
    serviceTitle: {
        fontWeight: '500px',
        fontSize: '25px',
        color: '#1E396C',
        [theme.breakpoints.down('md')]: {
            fontWeight: '500',
            fontSize: '20px',
            textAlign: 'center',
            color: '#1E396C',
        },
    },
    imageBox: {
        display: 'flex',
        [theme.breakpoints.down("sm")]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    },
    serviceParagraph: {
        fontWeight: 'normal',
        color: '#1E396C',
        fontSize: '20px',
        [theme.breakpoints.down('md')]: {
            fontWeight: '500',
            fontSize: '15px',
            textAlign: 'center',
            color: '#1E396C',
        },
    },
    quickImage: {
        position: 'relative',
    },
    videosection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: "50px",
        paddingLeft: '0px',
        paddingRight: '0px',
        [theme.breakpoints.down("sm")]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: "50px",
            paddingBottom: "50px",
        },
    },
    How: {
        width: "75%",
        borderRadius: "25px",
        [theme.breakpoints.down("sm")]: {
            width: "75%",
            borderRadius: "25px",
        },
    },
}));