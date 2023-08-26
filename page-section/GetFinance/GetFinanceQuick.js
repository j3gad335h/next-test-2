import { Box, Button, Card, Container, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BaseUrl from '../../baseUrl';
export default function GetFinanceQuick() {
    const classes = useStyles();
    const { locale } = useRouter();
    const theme = useTheme();
    const veryWideScreen = useMediaQuery(theme.breakpoints.up('sm'), {
        noSsr: true,
    });
    const { t } = useTranslation('common');
    const image1 = "/assetsNew/images/GetFinance/getfinance.svg";
    return (
        <section>
              <Container maxWidth="lg">
              <Grid container spacing={2}>
                <Grid textAlign={'center'} item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography className={classes.Title}>{t('getFinance.quickGetFinancTitle')}</Typography>
                    <Divider className={classes.Divider} />
                </Grid>
            </Grid>
              </Container>
           
            <Container maxWidth="lg">
                <Box py={5}>
                    <Grid container spacing={2}>
                        <Grid className={classes.servicImageeGrid} item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Image height={veryWideScreen? 400: 200} width={veryWideScreen? 800: 400} alt="finance-icon" className={classes.getFinanceQuickIcon} src={image1} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid className={classes.serviceGrid} item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box className={classes.iconBox}>
                                <Typography className={classes.labelNumber}>1</Typography>
                            </Box>
                            <Box className={classes.cardBox}>
                                <Card className={classes.getFinaceQuickCard}>
                                    <Box className={classes.getFinaceQuickCardsBox}>
                                        <Typography className={classes.cardTitle}>{t('getFinance.checkIfYouQualify')}</Typography>
                                        <Typography className={classes.cardDiscription}>{t('getFinance.quickGetFinancCardDiscription1')}</Typography>
                                    </Box>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid className={classes.serviceGrid} item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box className={classes.iconBox}>
                                <Typography className={classes.labelNumber}>2</Typography>
                            </Box>
                            <Box className={classes.cardBox}>
                                <Card className={classes.getFinaceQuickCard}>
                                    <Box className={classes.getFinaceQuickCardsBox}>
                                        <Typography className={classes.cardTitle}>{t('getFinance.ApplyOnline')}</Typography>
                                        <Typography className={classes.cardDiscription}>{t('getFinance.quickGetFinancCardDiscription2')}</Typography>
                                    </Box>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid className={classes.serviceGrid} item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box className={classes.iconBox}>
                                <Typography className={classes.labelNumber}>3</Typography>
                            </Box>
                            <Box className={classes.cardBox}>
                                <Card className={classes.getFinaceQuickCard}>
                                    <Box className={classes.getFinaceQuickCardsBox}>
                                        <Typography className={classes.cardTitle}>{t('getFinance.decisionBusinessDays')}</Typography>
                                        <Typography className={classes.cardDiscription}>{t('getFinance.quickGetFinancCardDiscription3')}</Typography>
                                    </Box>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid className={classes.serviceGrid} item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box className={classes.iconBox}>
                                <Typography className={classes.labelNumber}>4</Typography>
                            </Box>
                            <Box className={classes.cardBox}>
                                <Card className={classes.getFinaceQuickCard}>
                                    <Box className={classes.getFinaceQuickCardsBox}>
                                        <Typography className={classes.cardTitle}>{t('getFinance.FinancersStartBidding')}</Typography>
                                        <Typography className={classes.cardDiscription}>{t('getFinance.quickGetFinancCardDiscription4')}</Typography>
                                    </Box>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid className={classes.serviceGrid} item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Box className={classes.iconBox}>
                                <Typography className={classes.labelNumber}>5</Typography>
                            </Box>
                            <Box className={classes.cardFullBox}>
                                <Card className={classes.getFinaceQuickFullCards}>
                                    <Box className={classes.getFinaceQuickCardsBox}>
                                        <Typography className={classes.cardTitle}>{t('getFinance.YourFundsArrive')}</Typography>
                                        <Typography className={classes.cardDiscription}>{t('getFinance.quickGetFinancCardDiscription5')}</Typography>
                                    </Box>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Container className={classes.ButtonContainer}>
                <Grid className={classes.ButtonMainGrid} container spacing={2}>
                    <Grid className={classes.ButtonGrid} item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button style={{        borderRadius: '25px',}}><Link className={classes.buttonLink}  href={`/${locale}/learnMoreFinancee`}>{t('getFinance.quickButton')}</Link></Button>
                    </Grid>
                </Grid>
            </Container>

        </section>
    )
}
const useStyles = makeStyles((theme, locale) => ({
    Title: {
        fontSize: '35px',
        color: '#1E396C',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: '23px',
            color: '#1E396C',
            textAlign: 'center',
        }
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
    servicImageeGrid:{
        paddingLeft: '0px !important',
        paddingRight: '0px',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    serviceGrid: {
        paddingLeft: '0px !important',
        paddingRight: '0px',
        paddingTop:'0px !important',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
    },
    getFinanceQuickIcon: {
        width: '800px',
        height: "400px",
        [theme.breakpoints.down('md')]: {
            width: '400px',
            height: "200px",
        },
    },
    getFinaceQuickCard: {
        width: 'auto',
        marginLeft: '20px',
        marginRight: '20px',
    },
    iconBox: {
        background: "#35A052",
        padding: '20px',
        width: '60px',
        height: '60px',
        borderRadius: '100%',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: '30px',
        "&:hover,&:focus": {
            color: "#ffffff",
            borderRadius: '100%',
            pointerEvent: "all",
            boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 40%), 0px 1px 1px 0px rgb(0 0 0 / 44%), 0px 1px 3px 0px rgb(0 0 0 / 52%)",
        },
      
        
    },
    cardTitle: {
        fontSize: '20px',
        color: '#1E396C',
        fontWeight: '500px'
    },
    cardDiscription: {
        fontSize: '18px',
        color: '#000',
    },
    labelNumber: {
        textAlign: 'center',
        color: '#fff',
        fontSize: '20px',
        fontWeight: 'bold',
    },
    cardFullBox: {
        width: '100%',
        paddingLeft:'20px',
        paddingRight:'20px'
    },
    cardBox: {
        width: '100%',
    },
    getFinaceQuickCardsBox: {
        padding: '30px',
    },

    ButtonGrid: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:'0px !important'
    },
    Button: {
        background: "#35A052",
        color: '#fff',
        fontSize: '20px',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingTop: '2px',
        paddingBottom: '2px',
        borderRadius: '25px',
        textTransform: 'capitalize',
        "&:hover": {
            color: '#fff',
            background: "#35A052",
            pointerEvent: "all",
          
        },
    },
    buttonLink:{
        textDecoration:'none',
        background: "#35A052",
        color: '#fff',
        fontSize: '20px',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingTop: '2px',
        paddingBottom: '2px',
        borderRadius: '25px',
        textTransform: 'capitalize',
        "&:hover": {
            color: '#fff',
            background: "#35A052",
            pointerEvent: "all",
          
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '14px',
        },
    },
    ButtonContainer: {
        padding: '20px'
    },
    WariningGrid: {
        padding: '0px !important'
    },
}));