import { Box, Container, Divider, Grid, List, ListItem, Typography, useMediaQuery, useTheme, } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import Image from 'next/image';
import BaseUrl from '../../baseUrl';

export default function AboutWhoWeAre() {
    const classes = useStyles();
    const { t } = useTranslation('common');
    const theme = useTheme();
    const veryWideScreen = useMediaQuery(theme.breakpoints.up('sm'), {
        noSsr: true,
    });
    const image1 = "/assetsNew/images/aboutImages/AboutImage1.webp";
    const image2 =  "/assetsNew/images/aboutImages/AboutImage2.webp";
    const image3 = "/assetsNew/images/aboutImages/AboutImage3.webp";
    return (
        <section>
            <Container className={classes.container}>
                <Grid style={{paddingBottom:'0px !important'}} pt={5} container spacing={2}>
                    <Grid textAlign={'center'} item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography className={classes.Title}>{t('about.aboutTittle')}</Typography>
                        <Divider className={classes.Divider} />
                        <Box p={2}>
                            <Typography className={classes.Discription}>{t('about.aboutDiscription')}</Typography>
                            <Typography className={classes.Discription}>{t('about.aboutDiscription2')}</Typography>
                            <Typography className={classes.Discription}>{t('about.aboutDiscription3')}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container className={classes.container} maxWidth="lg">
                <Box py={{ xs: 0, sm: 0, md: 5, lg: 5, xl: 5 }}>
                    <Grid container spacing={2}>
                        <Grid className={classes.aboutImageGrid} item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box>
                                <Image height={veryWideScreen? 300: 200} width={veryWideScreen? 500: 300} src={image1} alt="about1" className={classes.aboutImage} />
                            </Box>
                        </Grid>
                        <Grid className={classes.aboutTextGrid} item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box>
                                <Typography className={classes.aboutTitle} variant=''>{t('about.aboutServiceTitle1')}</Typography>
                                <ul variant='ul'>
                                    <li className={classes.aboutDiscription} variant="li">{t('about.aboutServiceDiscriptionList1')}</li>
                                    <li className={classes.aboutDiscription} variant="li">{t('about.aboutServiceDiscriptionList2')}</li>
                                    <li className={classes.aboutDiscription} variant="li">{t('about.aboutServiceDiscriptionList3')}<br/>{t('about.aboutServiceDiscriptionList4')}</li>
                                </ul>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid className={classes.aboutMainGrid} container spacing={2}>
                        <Grid className={classes.aboutTextGrid} item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box>
                                <Typography className={classes.aboutTitle} variant=''>{t('about.aboutServiceTitle2')}</Typography>
                                <List variant='ul'>
                                    <ListItem className={classes.aboutDiscription} variant="li">{t('about.aboutServiceDiscription2')}</ListItem>
                                </List>
                            </Box>
                        </Grid>
                        <Grid className={classes.aboutImageGrid} item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box>
                                <Image height={veryWideScreen? 300: 200} width={veryWideScreen? 500: 300} src={image2} alt="about1" className={classes.aboutImage} />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid className={classes.aboutImageGrid} item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box>
                                <Image height={veryWideScreen? 300: 200} width={veryWideScreen? 500: 300} src={image3} alt="about1" className={classes.aboutImage} />
                            </Box>
                        </Grid>
                        <Grid className={classes.aboutTextGrid} item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box>
                                <Typography className={classes.aboutTitle} variant=''>{t('about.aboutServiceTitle3')}</Typography>
                                <List>
                                    <ListItem className={classes.aboutDiscription} variant="li">{t('about.aboutServiceDiscription3')}</ListItem>
                                </List>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
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
            color: '#1E396C',
            textAlign: 'center',
          },
    },
    Discription: {
        color: '#1E396C',
        textAlign: 'center',
        fontSize: '20px',
        padding: '10px',
        [theme.breakpoints.down('sm')]: {
            color: '#1E396C',
            textAlign: 'justify',
            fontSize: '18px',
            padding: '10px',
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
    container: {
        padding: '0px 0px 0px 0px',
        [theme.breakpoints.down('lg')]: {
            padding: '0px 20px 0px 20px',
        }
    },
    aboutTextGrid: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'start',
        lineHeight: '30px',
        [theme.breakpoints.down('md')]: {
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    aboutImageGrid: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    aboutMainGrid: {
        padding: '40px 0px 40px 0px',
        flexDirection: 'row !important',
        [theme.breakpoints.down('md')]: {
            padding: '20px 0px 20px 0px',
            flexDirection: 'column-reverse !important',

        }
    },
    aboutSecondGrid: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column-reverse !important',
        }
    },
    aboutImage: {
        borderRadius: "50px",
        width: "500px",
        height: "300px",
        [theme.breakpoints.down('sm')]: {
            borderRadius: "50px",
            width: "300px",
            height: "200px",
        }
    },
    aboutTitle: {
        fontSize: '30px',
        color: '#1E396C',
        textAlign: "justify",
        paddingBottom:'20px',
        lineHeight:1.5,
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
            color: '#1E396C',
            textAlign: "justify",
        }
    },
    aboutDiscription: {
        fontSize: '18px',
        color: '#1E396C',
        textAlign: "justify",
        paddingBottom:'10px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            color: '#1E396C',
            textAlign: "justify",
        }

    }


}));