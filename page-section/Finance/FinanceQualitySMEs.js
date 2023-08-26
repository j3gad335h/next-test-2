import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function FinanceQualitySMEs() {
    const classes = useStyles();
    const { t } = useTranslation('common');
    const { locale } = useRouter();
    return (
        <section>
            <Container>
                <Grid container spacing={2}>
                    <Grid className={classes.titleGrid} textAlign={'center'} item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography className={classes.Title}>{t('finance.finaceQualitySmesTitle')}</Typography>
                        <Divider className={classes.Divider} />
                        <Box p={2}>
                            <Typography className={classes.Discription}>{t('finance.finaceQualitySmesDiscription')}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container className={classes.ButtonContainer}>
                <Grid className={classes.ButtonMainGrid} container spacing={2}>
                    <Grid className={classes.ButtonGrid} item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button > <Link className={classes.buttonLink} href={`/${locale}/selectionProcess`}>{t('finance.finaceQualitySmesButton')}</Link></Button>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}
const useStyles = makeStyles((theme) => ({
  
    Title: {
        fontSize: '23px',
        color: '#1E396C',
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            fontSize: '35px',
            color: '#1E396C',
            textAlign: 'center',
          },
    },
    Discription: {
        color: '#1E396C',
        textAlign: 'center',
        fontSize: '18px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '20px',
            color: '#1E396C',
            textAlign: 'center',
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
    SubTitle: {
        textAlign: 'center',
        fontSize: '25px',
        color: "#1E396C",
        padding: '15px',
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
    ButtonGrid: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    ButtonContainer: {
        padding: '20px'
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
    }
}));