import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';
import { useState } from 'react';
import BaseUrl from '../../baseUrl';
import SupplyChainModal from '../../components/ModalBox/SupplyChainModal';
export default function SupplyChainFaq() {
    const classes = useStyles();
    const { locale } = useRouter();
    const { t } = useTranslation('common');
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const veryWideScreen = useMediaQuery(theme.breakpoints.up('sm'), {
        noSsr: true,
    });
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const image1 ="/assetsNew/images/Finance/Graphics01.svg";
    return (
        <section>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid textAlign={'center'} item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography className={classes.Title}>{t('supply chain.Faq tittle')}</Typography>
                        <Divider className={classes.Divider} />
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="lg">
                <Box py={5}>
                    <Accordion className={classes.Accordion}
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}>
                        <AccordionSummary className={classes.AccordionSummary}
                            expandIcon={expanded === "panel1" ? (<DoDisturbOnOutlinedIcon />) : (<ControlPointOutlinedIcon />)}>
                            {t('supply chain.question2')}</AccordionSummary>
                        <Divider />
                        <AccordionDetails className={classes.AccordionDetails}>
                        {t('supply chain.answer2')}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.Accordion}
                        expanded={expanded === "panel2"}
                        onChange={handleChange("panel2")}>
                        <AccordionSummary className={classes.AccordionSummary} expandIcon={expanded === "panel2" ? (<DoDisturbOnOutlinedIcon />) : (<ControlPointOutlinedIcon />)}>
                        {t('supply chain.question1')}
                        </AccordionSummary>
                        <Divider />
                        <AccordionDetails className={classes.AccordionDetails}>
                        {t('supply chain.answer1')}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.Accordion}
                        expanded={expanded === "panel3"}
                        onChange={handleChange("panel3")}>
                        <AccordionSummary className={classes.AccordionSummary} expandIcon={expanded === "panel3" ? (<DoDisturbOnOutlinedIcon />) : (<ControlPointOutlinedIcon />)}>
                        {t('supply chain.question3')}
                        </AccordionSummary>
                        <Divider />
                        <AccordionDetails className={classes.AccordionDetails}>
                        {t('supply chain.answer3')}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.Accordion}
                        expanded={expanded === "panel4"}
                        onChange={handleChange("panel4")}>
                        <AccordionSummary className={classes.AccordionSummary} expandIcon={expanded === "panel4" ? (<DoDisturbOnOutlinedIcon />) : (<ControlPointOutlinedIcon />)}>
                        {t('supply chain.question4')}
                        </AccordionSummary>
                        <Divider />
                        <AccordionDetails className={classes.AccordionDetails}>
                        {t('supply chain.answer4')}<span style={{color:'red',cursor:'pointer'}} onClick={handleOpen}> {t('supply chain.answer4_link')}</span>  {t('supply chain.answer4_1')}
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Container>
            <Container className={classes.ButtonContainer}>
                <Grid className={classes.ButtonMainGrid} container spacing={2}>
                    <Grid className={classes.ButtonGrid} item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <SupplyChainModal open={open} onClose={handleClose} />
                        <Button className={classes.buttonLink} onClick={handleOpen}> {t('supply chain.banerButton')}</Button>
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
    servicImageeGrid: {
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
        paddingTop: '0px !important',
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
        paddingLeft: '20px',
        paddingRight: '20px'
    },
    cardBox: {
        width: '100%',
    },
    getFinaceQuickCardsBox: {
        padding: '30px',
    },
    Accordion: {
        padding: "10px",
        margin: "5px",
        borderRadius: "2px",
    },
    AccordionSummary: {
        fontSize: "18px",
        color: "#1E396C",
    },
    AccordionDetails: {
        fontSize: "15px",
        lineHeight: "1.6",
        color: "#1E396C",
    },
    ButtonGrid: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '0px !important',
    },
    ButtonContainer: {
        padding: '20px'
    },
    buttonLink: {
        textDecoration: 'none',
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
    WariningGrid: {
        padding: '0px !important'
    },
}));