import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import BaseUrl from '../../baseUrl';
export default function FinanicalReports() {
    const classes = useStyles();
    const { t } = useTranslation('common');
    return (
        <section>
            <Container>
                <Box textAlign="center">
                    <Typography className={classes.Title}>{t("about.aboutFinancial Reports")}</Typography>
                    <Divider className={classes.Divider} />
                </Box>
            </Container>
            <Container className={classes.Container}>
                <Grid container spacing={2}>
                    <Grid className={classes.reportsContainer} item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Typography className={classes.ComapnyDoc}>{t("about.about RaqamyahFinanicalDoc")}&nbsp; <a className={classes.DocLink} target="_blank" href={'/assetsNew/images/pdf/Reportlists.pdf'}  >{t("about.about Click Here")}</a></Typography>
                    </Grid>
                    <Grid className={classes.reportsContainer} item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Typography className={classes.ComapnyDoc}>{t("about.about BoardMemberDoc")}&nbsp; <a className={classes.DocLink} target="_blank" href={'/assetsNew/images/pdf/Raqamyahreport2022.pdf'} >{t("about.about Click Here")}</a></Typography>
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
        textAlign: 'justify',
        fontSize: '20px',
        padding: '10px',
        [theme.breakpoints.up('sm')]: {
            color: '#1E396C',
            textAlign: 'center',
            fontSize: '20px',
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
    reportsContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    Container: {
        padding: '50px 0px 50px 0px',
        [theme.breakpoints.down('lg')]: {
            padding: '50px 0px 50px 0px',
        }
    },
    ComapnyDoc:{
        fontSize:'18px',
        color: '#1E396C',
    }


}));