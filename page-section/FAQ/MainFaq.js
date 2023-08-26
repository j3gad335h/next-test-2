import { Container, Typography, } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import FAQSection from './FaqSection';
export default function MainFAQ() {
    const classes = useStyles();
    const { t } = useTranslation('common');

    return (
        <section>
            <Container className={classes.container}>
                <Typography variant='h1' className={classes.hometittle}>{t("faq.Faq tittle")}</Typography>
            </Container>
            <div>
                <FAQSection />
            </div>
        </section>
    );
}

const useStyles = makeStyles((theme, local) => ({
    container:{
        paddingTop: '50px',
        paddingBottom: '50px',
        [theme.breakpoints.down("sm")]: {
            paddingTop: '10px',
            paddingBottom: '20px',
        }
    },
    hometittle: {
        fontWeight: "600px",
        fontSize: "30px",
        color: "#1E396C",
        paddingBottom: "10px",
        textAlign: 'center',
        [theme.breakpoints.down("sm")]: {
            fontWeight: "600px",
            fontSize: "25px",
            color: "#1E396C",
            paddingBottom: "5px",
            textAlign: 'center',
        },
    },
}));
