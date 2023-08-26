import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import ContactForm from './ContactForm';
import Map from './Map';


export default function ContactUsSection() {
    const classes = useStyles();
    const { t } = useTranslation('common');
    return (
        <section>

            <Grid container spacing={2} >
                <Grid className={classes.contactformsection} itemxl={5} md={5} lg={5} sm={12} xs={12}>
                    <ContactForm />
                </Grid>
                <Grid className={classes.contactMapSection} item xl={7} md={7} lg={7} sm={12} xs={12}>
                    <Map />
                </Grid>
            </Grid>

        </section>
    )
}
const useStyles = makeStyles((theme) => ({
  
    contactMapSection:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
}));