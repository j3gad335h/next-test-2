import { Box, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";

export default function NupcoEaseOfApply() {
    const classes = useStyles();
    const { t } = useTranslation('common');
  return (
    <section>
    <Container>
        <Grid py={5} container spacing={2}>
            <Grid textAlign={'center'} item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Box p={2}>
                    <Typography className={classes.Discription}>{t('Campaign.Campaign Text')}</Typography>
                </Box>
            </Grid>
        </Grid>
    </Container>

</section>
  )
}
const useStyles = makeStyles((theme) => ({
    Title: {
        fontSize: '35px',
        color: '#1E396C',
        textAlign: 'center',
    },
    Discription: {
        color: '#1E396C',
        textAlign: 'center',
        fontSize: '35px',
        padding: '10px',
        [theme.breakpoints.down('lg')]: {
            color: '#1E396C',
            textAlign: 'center',
            fontSize: '25px',
            padding: '10px',
        }
    },
    Divider: {
        width: 'auto',
        height: '2px',
        background: '#37A753',
        marginLeft: '45%',
        marginRight: '45%',
        marginTop: '10px',
    },
  

}));