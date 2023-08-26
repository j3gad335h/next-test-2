import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import WorkIcon from '@mui/icons-material/Work';
import { Box, Card, CardContent, Container, Typography, } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import BaseUrl from "../../baseUrl";
import GridItem from "../../components/Grid/GridItem";


export default function ContactForm() {
  const classes = useStyles();
  const { t } = useTranslation();
    const image = "/assetsNew/images/contact/call-center.png"
  return (
    <Container className={classes.get_finance}>
      <GridItem className={classes.ContactGrid}>
        <Box textAlign="center">
          <Card className={classes.contact_Card} sx={{ minWidth: 150 }}>
            <CardContent className={classes.cardContent}>
              <PermContactCalendarIcon className={classes.calendarIcon}/>
              <Typography className={classes.contact_discripition_form}> {t("contact.form discrption")}</Typography>
            </CardContent>
            <CardContent className={classes.contact_form_email}>
              <WorkIcon className={classes.emailIcon} /> <a className={classes.contact_form_email} >{t("contact.Company Working Hours Timing")}</a><br />
            </CardContent>
            <CardContent className={classes.contact_form_email}>
              <EmailIcon className={classes.emailIcon} /> <a className={classes.contact_form_email} href="mailto:contactus@raqamyah.com">contactus@raqamyah.com</a><br />
            </CardContent>
            <CardContent className={classes.contact_form_email}>
              <LocalPhoneIcon className={classes.emailIcon} /> <a className={classes.contact_form_email} href="tel:920004032">920004032</a>
            </CardContent>
            <CardContent className={classes.contact_form_email}>
              <Image alt="tollfree" width={32} height={32} src={image} className={classes.emailIcon} /> <a className={classes.contact_form_email} href="tel:8001000264">8001000264</a>
            </CardContent>
          </Card>
        </Box>
      </GridItem>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({

  contact_form_email: {
    fontSize: "18px",
    textAlign: "initial",
    display:'flex',
    color: "#1E396C",
    position: "relative",
    paddingLeft: "30px", 
    paddingRight: "30px",
    alignItems:'center',
  },
  emailIcon:{
    color: "#1E396C", 
    fontSize: "30px" 
  },
  cardContent:{
    paddingLeft: "30px",
    paddingRight: "30px"
  },
  calendarIcon:{
    width: "60px", 
    height: "100px", 
    color: "#37A753" 
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

  contact_discripition_form: {
    fontWeight: "normal",
    fontSize: "18px",
    color: "#1E396C",
    position: "relative",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "normal",
      fontSize: "15px",
      color: "#1E396C",
      position: "relative",
    },
  },
  contact_discripition: {
    fontWeight: "normal",
    fontSize: "15px",
    color: "#1E396C",
  },
  ContactGrid: {
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingTop: "100px",

    [theme.breakpoints.down("sm")]: {
      padding: "25px",
    },
  },
  contact_Card: {
    borderRadius: "25px",
    background: "#fff",
  },

}));