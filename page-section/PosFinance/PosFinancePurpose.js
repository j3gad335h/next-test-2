import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import Image from 'next/image';
import BaseUrl from '../../baseUrl';
export default function PosFinancePurpose() {
    const classes = useStyles();
    const { t } = useTranslation('common');
    const icon1="/assetsNew/images/posIcons/pos_icon1.svg";
    const icon2="/assetsNew/images/posIcons/pos_icon2.svg";
    const icon3="/assetsNew/images/posIcons/pos_icon3.svg";
    const icon4="/assetsNew/images/posIcons/pos_icon4.svg";
    const icon5="/assetsNew/images/posIcons/pos_icon5.svg";
    const icon6="/assetsNew/images/posIcons/pos_icon6.svg";
    return (
        <section>
            <Container className={classes.Container}>
                <Grid container spacing={2}>
                    <Grid className={classes.titleGrid} textAlign={'center'} item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography className={classes.Title}>{t('posFinance.posFinaceTitle')}</Typography>
                        <Divider className={classes.Divider} />
                        <Box p={2}>
                            <Typography className={classes.Discription}>{t('posFinance.posFinaceDiscription')}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Container className={classes.Container} maxWidth="md">
                <Box py={3}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Typography variant='h2' className={classes.SubTitle}>{t('posFinance.posFinaceDiscripitionTitle')}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid className={classes.serviceGrid} item xs={12} sm={4} md={4} lg={4} xl={4}>
                            <Box className={classes.iconBox}>
                                <Image width={50} height={50} alt="finance-icon" className={classes.getFinanceIcon} src={icon1} />
                            </Box>
                            <Box>
                                <Typography className={classes.Subdiscription} variant='h2'>{t('posFinance.posService1')}</Typography>
                            </Box>
                        </Grid>
                        <Grid className={classes.serviceGrid} item xs={12} sm={4} md={4} lg={4} xl={4}>
                            <Box className={classes.iconBox}>
                                <Image width={50} height={50} alt="finance-icon" className={classes.getFinanceIcon} src={icon2} />
                            </Box>
                            <Box>
                                <Typography variant='h2' className={classes.Subdiscription} >{t('posFinance.posService2')}</Typography>
                            </Box>
                        </Grid>
                        <Grid className={classes.serviceGrid} item xs={12} sm={4} md={4} lg={4} xl={4}>
                            <Box className={classes.iconBox}>
                                <Image width={50} height={50} alt="finance-icon" className={classes.getFinanceIcon} src={icon3} />
                            </Box>
                            <Box>
                                <Typography variant='h2' className={classes.Subdiscription}>{t('posFinance.posService3')}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid className={classes.serviceGrid} item xs={12} sm={4} md={4} lg={4} xl={4}>
                            <Box className={classes.iconBox}>
                                <Image width={50} height={50} alt="finance-icon" className={classes.getFinanceIcon} src={icon4} />
                            </Box>
                            <Box>
                                <Typography variant='h2' className={classes.Subdiscription}>{t('posFinance.posService4')}</Typography>
                            </Box>
                        </Grid>
                        <Grid className={classes.serviceGrid} item xs={12} sm={4} md={4} lg={4} xl={4}>
                            <Box className={classes.iconBox}>
                                <Image width={50} height={50} alt="finance-icon" className={classes.getFinanceIcon} src={icon5} />
                            </Box>
                            <Box>
                                <Typography variant='h2' className={classes.Subdiscription}>{t('posFinance.posService5')}</Typography>
                            </Box>
                        </Grid>
                        <Grid className={classes.serviceGrid} item xs={12} sm={4} md={4} lg={4} xl={4}>
                            <Box className={classes.iconBox}>
                                <Image width={50} height={50} alt="finance-icon" className={classes.getFinanceIcon} src={icon6} />
                            </Box>
                            <Box>
                                <Typography variant='h2' className={classes.Subdiscription}>{t('posFinance.posService6')}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </section>
    )
}
const useStyles = makeStyles((theme) => ({
    titleGrid: {
        padding: '0px 10px 0px 10px',
        [theme.breakpoints.up('sm')]: {
            padding: '0px 50px 0px 50px',
        }
    },
    Container: {
        paddingLeft: '0px',
        paddingRight: '0px',
    },
    Title: {
        fontSize: '35px',
        color: '#1E396C',
        textAlign: 'center',
        fontWeight: '600px',
        [theme.breakpoints.down('md')]: {
            fontSize: '23px',
            color: '#1E396C',
            textAlign: 'center',
            fontWeight: '600px',
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
    SubTitle: {
        textAlign: 'center',
        fontSize: '25px',
        color: "#1E396C",
        padding: '15px',
        [theme.breakpoints.down('md')]: {
            fontSize: '20px',
            color: '#1E396C',
            textAlign: 'center',
        }
    },
    serviceGrid: {
        paddingTop: '25px',
        paddingBottom: '25px',
        paddingLeft: '0px !important',
        paddingRight: '0px',
        marginTop: '30px',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Subdiscription: {
        fontSize: '19px',
        padding: '15px',
        color: '#000',
        fontWeight: 500
    },
    iconBox: {
        background: "#E0E1E1",
        padding: '50px',
        borderRadius: '100%',
        "&:hover,&:focus": {
            color: "#ffffff",
            pointerEvent: "all",
            boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 40%), 0px 1px 1px 0px rgb(0 0 0 / 44%), 0px 1px 3px 0px rgb(0 0 0 / 52%)",
        },
    },
    getFinanceIcon: {
        width: '50px',
        height: '50px',
    },
}));