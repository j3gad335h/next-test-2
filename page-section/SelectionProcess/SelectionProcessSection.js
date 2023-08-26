import { Box, Container, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import Image from 'next/image';
import { useRouter } from 'next/router';
import BaseUrl from '../../baseUrl';
export default function SelectionProcessSection() {
    const classes = useStyles();
    const { t } = useTranslation('common');
    const { locale } = useRouter();
    const image1 ="/assetsNew/images/selectionProcess/backgroundImage.svg";

    return (
        <section>
            <Container className={classes.Container}>
                <Typography variant='h1' className={classes.Title}>{t("selection.Selection process tittle")}</Typography>
                <Box mt={5}>
                    <Typography className={classes.titleDiscripition}>{t("selection.Selection process discription1")} </Typography>
                    <Typography className={classes.titleDiscripition}>{t("selection.Selection process discription2")} </Typography>
                </Box>
            </Container>
            <Container className={classes.sectionContainer} maxWidth="md">
                <Box mb={5} border={1} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Image width={115} height={150} className={classes.Image} src={image1} alt="image1" />
                            <Typography className={classes.serviceNumber}>1</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={9}>
                            <Box mb={2}>
                                <Typography className={classes.serviceTitle}>{t("selection.Selection process sub tittle1")}</Typography>
                                <Typography className={classes.serviceDiscripition}>{t("selection.Selection process discription3")}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box mb={5} border={1} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Image width={115} height={150} className={classes.Image} src={image1} alt="image1" />
                            <Typography className={classes.serviceNumber}>2</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={9}>
                            <Box mb={2}>
                                <Typography className={classes.serviceTitle}>{t("selection.Selection process sub tittle3")}</Typography>
                                <Typography className={classes.serviceDiscripition}> {t("selection.Selection process discription4")} </Typography>
                                <Typography className={classes.serviceDiscripition}>{t("selection.Selection process discription5")}</Typography>
                                <Typography className={classes.serviceDiscripition}>{t("selection.Selection process discription6")}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box mb={5} border={1} borderLeft={0} borderTop={0} borderRight={0} borderColor="grey.200">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Image width={115} height={150} className={classes.Image} src={image1} alt="image1" />
                            <Typography className={classes.serviceNumber}>3</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={9}>
                            <Box mb={2}>
                                <Typography className={classes.serviceTitle}>{t("selection.Selection process sub tittle2")} </Typography>
                                <Typography className={classes.serviceDiscripition}>{t("selection.Selection process discription7")}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Container maxWidth="md" className={classes.table}>
                <Table style={{ borderColor: "#000" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ textAlign: locale === "ar" ? "right" : "left",}} className={classes.th}> {t("selection.Selection process table tittle1")} </TableCell>
                            <TableCell style={{ textAlign: locale === "ar" ? "right" : "left",}} className={classes.th}>{t("selection.Selection process table tittle2")}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell style={{ textAlign: locale === "ar" ? "right" : "left",}} className={classes.td1}>{t("selection.Selection process table discription1")} </TableCell>
                            <TableCell style={{ textAlign: locale === "ar" ? "right" : "left",}} className={classes.td1}>{t("selection.Selection process table discription2 1")}<br />
                                {t("selection.Selection process table discription2 2")}<br />
                                {t("selection.Selection process table discription2 3")}<br />
                                {t("selection.Selection process table discription2 4")}<br />
                                {t("selection.Selection process table discription2 5")}<br />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ textAlign: locale === "ar" ? "right" : "left",}} className={classes.td2}> {t("selection.Selection process table discription3")} </TableCell>
                            <TableCell style={{ textAlign: locale === "ar" ? "right" : "left",}} className={classes.td2}>
                                {t("selection.Selection process table discription4 1")}<br />
                                {t("selection.Selection process table discription4 2")}<br />
                                {t("selection.Selection process table discription4 3")}<br />
                                {t("selection.Selection process table discription4 4")}<br />
                                {t("selection.Selection process table discription4 5")}<br />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ textAlign: locale === "ar" ? "right" : "left",}} className={classes.td3}>{t("selection.Selection process table discription5")}</TableCell>
                            <TableCell style={{ textAlign: locale === "ar" ? "right" : "left",}} className={classes.td3}>
                                {t("selection.Selection process table discription6 1")}<br />
                                {t("selection.Selection process table discription6 2")}<br />
                                {t("selection.Selection process table discription6 3")}<br />
                                {t("selection.Selection process table discription6 4")}<br />
                                {t("selection.Selection process table discription6 5")}<br />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ textAlign: locale === "ar" ? "right" : "left",}} className={classes.td4}>{t("selection.Selection process table discription7")}</TableCell>
                            <TableCell style={{ textAlign: locale === "ar" ? "right" : "left",}} className={classes.td4}>
                                {t("selection.Selection process table discription8 1")}<br />
                                {t("selection.Selection process table discription8 2")}<br />
                                {t("selection.Selection process table discription8 3")}<br />
                                {t("selection.Selection process table discription8 4")}<br />
                                {t("selection.Selection process table discription8 5")}<br />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Container>
        </section>
    );
}

const useStyles = makeStyles((theme, locale) => ({
    // Container:{
    //     padding:'0px 30px 0px 30px',
    //     [theme.breakpoints.down("sm")]: {
    //         padding:'0px 30px 0px 30px',
    //     },
    // },
    Title: {
        fontSize: '38px',
        color: '#1E396C',
        textAlign: 'center',
        fontWeight:'bold',
        [theme.breakpoints.down("sm")]: {
            fontSize: "32px",
        },
    },
    titleDiscripition: {
        fontSize: '20px',
        color: '#1E396C',
        paddingBottom:'10px',
        [theme.breakpoints.down("sm")]: {
            fontSize: "18px",
            textAlign: "justify",
            paddingBottom:'10px',
        },
    },
    sectionContainer: {
        padding: '50px 0px 50px 0px',
        [theme.breakpoints.down("sm")]: {
            padding: '25px 0px 25px 0px',
        },
    },
    Image: {
        [theme.breakpoints.up("xl")]: {
            position: "relative",
            left: "25%",
            right: "25%",
            display: "flex",
        },
        [theme.breakpoints.down("xl")]: {
            position: "relative",
            left: "25%",
            right: "25%",
            display: "flex",
        },
        [theme.breakpoints.down("lg")]: {
            position: "relative",
            left: "25%",
            right: "25%",
            display: "flex",
        },
  
        [theme.breakpoints.down("md")]: {
            position: "relative",
            left: "32%",
            right: "32%",
        },
        [theme.breakpoints.between("sm","md")]: {
            position: "relative",
            left: "36%",
            right: "36%",
        },
        [theme.breakpoints.down("sm")]: {
            position: "relative",
            left: "35%",
            right: "35%",
        },
        [theme.breakpoints.down("xs")]: {
            position: "relative",
            left: "36%",
            right: "36%",
        },
    },
    LearnMoreBox: {
        marginBottom: "0px",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "25px",
        },
    },
    serviceNumber: {
        position: "relative",
        textAlign: "center",
        color: "#FFF",
        left: "auto",
        right: "auto",
        bottom: "120px",
        fontSize: "50px",
        [theme.breakpoints.down("sm")]: {
            position: "relative",
            bottom: "120px",
            fontSize: "50px",
            textAlign: "center",
            color: "#FFF",
            left: "auto",
            right: "auto",
        },
        [theme.breakpoints.down("xs")]: {
            position: "relative",
            bottom: "120px",
            fontSize: "50px",
            textAlign: "center",
            color: "#FFF",
            left: "auto",
            right: "auto",
        },
    },
    serviceTitle: {
        fontWeight: "normal",
        fontSize: "25px",
        color: "#1E396C",
        paddingBottom: "10px",
        [theme.breakpoints.down("sm")]: {
            fontWeight: "normal",
            fontSize: "20px",
            color: "#1E396C",
        },
    },
    serviceDiscripition: {
        fontWeight: "normal",
        fontSize: "18px",
        color: "#1E396C",
        paddingBottom: "5px",
        textAlign: "justify",
        [theme.breakpoints.down("sm")]: {
            fontWeight: "normal",
            fontSize: "15px",
            color: "#1E396C",
            textAlign: "justify",
        },
    },
    table: {
        borderCollapse: "collapse",
        width: "1000px",
        position: "relative",
        paddingBottom: "50px",
        padding:'0px 0px 50px 0px',
        [theme.breakpoints.down("sm")]: {
            borderCollapse: "collapse",
            width: "350px",
            position: "relative",
            left: "0%",
            right: "0%",
            padding: "10px",
        },
    },
    th: {
        padding: "10px",
        color: "#1E396C",
        border: "2px solid #ddd",
        fontSize: "20px",
        textAlign: locale === "ar" ? "right" : "left",
        [theme.breakpoints.down("sm")]: {
            border: "2px solid #ddd",
            padding: "5px",
            color: "#1E396C",
            fontSize: "20px",
            textAlign: locale === "ar" ? "right" : "left",

        },
    },
    td1: {
        padding: "8px",
        fontSize: "16px",
        border: "2px solid #ddd",
        textAlign: locale === "ar" ? "right" : "left",
        color: "#31AB6D",
        [theme.breakpoints.down("sm")]: {
            border: "2px solid #ddd",
            padding: "4px",
            fontSize: "16px",
            textAlign: locale === "ar" ? "right" : "left",
            color: "#31AB6D",

        },
    },
    td2: {
        padding: "8px",
        fontSize: "16px",
        border: "2px solid #ddd",
        textAlign: locale === "ar" ? "right" : "left",
        color: "#2CA995",
        [theme.breakpoints.down("sm")]: {
            border: "2px solid #ddd",
            padding: "4px",
            fontSize: "16px",
            textAlign: locale === "ar" ? "right" : "left",
            color: "#2CA995",

        },
    },
    td3: {
        padding: "8px",
        fontSize: "16px",
        border: "2px solid #ddd",
        textAlign: locale === "ar" ? "right" : "left",
        color: "#29A8AC",
        [theme.breakpoints.down("sm")]: {
            border: "2px solid #ddd",
            padding: "4px",
            fontSize: "16px",
            textAlign: locale === "ar" ? "right" : "left",
            color: "#29A8AC",

        },
    },
    td4: {
        padding: "8px",
        fontSize: "16px",
        border: "2px solid #ddd",
        textAlign: locale === "ar" ? "right" : "left",
        color: "#24A5D3",
        [theme.breakpoints.down("sm")]: {
            border: "2px solid #ddd",
            padding: "4px",
            fontSize: "16px",
            textAlign: locale === "ar" ? "right" : "left",
            color: "#24A5D3",

        },
    },
}));
