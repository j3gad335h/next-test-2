/* eslint-disable jsx-a11y/iframe-has-title */
// @material-ui/core components
import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from 'react-i18next';
import GridItem from "../../components/Grid/GridItem";
import { useRouter } from 'next/router';

export default function Map() {
    const classes = useStyles();
    const { t } = useTranslation();
    const { locale } = useRouter();
    return (
        <Container className={classes.get_finance}>
            <GridItem className={classes.gridcontent}  >
                <Box>
                    <Typography className={classes.contact_tittle}>{t("contact.tittle")}</Typography>
                </Box>
                <Box style={{ padding: "10px" }}>
                    <Typography className={classes.contact_text_address}>
                        <span className={classes.contact_span}>{t("contact.Address span")}</span >
                        <span>{t("contact.Address1")}</span>{t("contact.Address2")}<br />{t("contact.Address3")}<br />
                        <span style={ {display: locale === "ar" ? "none" : "initial",}} className={classes.ArabicHide}>{t("contact.Address4")}</span></Typography>
                </Box>
            </GridItem>
            <GridItem className={classes.gridcontentmap}  >
                <Box>
                    <div className={classes.google_map_code}  >
                        <iframe className={classes.google_map_code} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7249.60607466854!2d46.67917577510995!3d24.699296636520746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0307a017baa1%3A0x26f68668a4723350!2zUmFxYW15YWggQ3Jvd2RmdW5kaW5nICjYtNix2YPYqSDYsdmC2YXZitipINmE2YTYqtmF2YjZitmEINin2YTYrNmF2KfYudmKKQ!5e0!3m2!1sen!2ssa!4v1655709285844!5m2!1sen!2ssa" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
                    </div>
                </Box>
            </GridItem>
        </Container>
    );
}

const useStyles = makeStyles((theme,locale) => ({
    gridcontent: {
        padding: "20px",
        [theme.breakpoints.down("sm")]: {
            padding: "20px 10px 20px 10px",
        },
    },
    contact_tittle: {
        fontWeight: "normal",
        fontSize: "30px",
        color: "#1E396C",
        [theme.breakpoints.down("sm")]: {
            fontWeight: "normal",
            fontSize: "18px",
            color: "#1E396C",
        },
    },
    contact_text_address: {
        fontWeight: "normal",
        fontSize: "18px",
        color: "#1E396C",
        minWidth: "500px",
        // display: selected === "ar" ? "block" : "contents",
        [theme.breakpoints.down("sm")]: {
            fontWeight: "normal",
            fontSize: "15px",
            color: "#1E396C",
            display:'contents'
        },
    },
    contact_span: {
        fontWeight: "bold",
        fontSize: "20px",
        color: "#1E396C",
        [theme.breakpoints.down("sm")]: {
            fontWeight: "bold",
            fontSize: "15px",
            color: "#1E396C",
        },
    },
    ArabicHide: {
        display: locale === "ar" ? "none" : "initial",
    },
    gridcontentmap: {
        margin: "10px",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "20px",
            margin: "0px",
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        },

    },
    google_map_code: {
        width: '100%',
        height: "300px",
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            height: "300px",
            marginBottom: "10px",
            display: 'flex'
        },
        [theme.breakpoints.down("xs")]: {
            width: '300px !important ',
            height: "300px",
            marginBottom: "10px",
            display: 'flex'
        },
    }
}));