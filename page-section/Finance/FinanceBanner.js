import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {
    Box,
    Button, Container,
    Dialog,
    FormGroup,
    IconButton,
    List, ListItem,
    Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';
import { useState } from 'react';
import BaseUrl from '../../baseUrl';
import HeroBanner from '../../components/Banner/HeroBanner';
import LoginBaseUrl from '../../loginUrl';

const Image = "/assetsNew/images/Finance/Finance-Banner.svg";
export default function FinanceBanner() {
    const { locale } = useRouter();
    const classes = useStyles();
    const { t } = useTranslation('common');
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <HeroBanner className={classes.heroBanner} backgroundImage={Image}>
            <Container className={classes.container}>
                <Typography color="inherit" variant="h1" className={classes.bannerText}>
                    {t('finance.bannerTitle')}
                </Typography>
                <Container className={classes.buttonContainer}>
                    <Button size="large" onClick={handleClickOpen} className={classes.Button}>{t('finance.banerButton1')}</Button>
                    <Button size="large" className={classes.Button} target='_blank' href={LoginBaseUrl + `signup?lang=${locale}`}>{t('finance.banerButton2')}</Button>
                </Container>
            </Container>
            {/* modal */}
            <Dialog
                open={open}
                locale={locale}
                onClose={handleClose}
                className={classes.modal}>
                <Container sx={{ position: "relative" }}>
                    <List className={classes.modalContainer}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            className={classes.ModalIconButton}
                            onClick={handleClose}
                            aria-label="close"><CloseIcon /></IconButton>
                        <ListItem className={classes.modalText}>
                            <FormGroup>
                                <Typography className={classes.modalTitle}>{t("finance.finaceModalTitle")} </Typography>
                                <Typography style={{textAlign:locale==='ar'?'right':'left'}} className={classes.modalText}><LocalPhoneIcon className={classes.modalIcon} />{" "} <a className={classes.modalDiscription} href="tel:920004032">920004032</a>{" "}</Typography>
                                <Typography style={{textAlign:locale==='ar'?'right':'left'}}  className={classes.modalText}><EmailIcon className={classes.modalIcon} />{" "}<a className={classes.modalDiscription} href="mailto:contactus@raqamyah.com">contactus@raqamyah.com</a>{" "}</Typography>
                                <br />
                                <Box className={classes.modalButtonBox}>
                                    <Button onClick={handleClose} className={classes.modalButton}>{t("finance.finaceModalButton")}</Button>
                                </Box>
                            </FormGroup>
                        </ListItem>
                    </List>
                </Container>
            </Dialog>
        </HeroBanner>
    )
}

const useStyles = makeStyles((theme, locale) => ({
    bannerText: {
        textAlign: 'initial',
        fontSize: '18px',
        fontWeight: 'bold',
        color: "#fff",
        lineHeight:" 1.5 !important" ,
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(0),
        [theme.breakpoints.up('xs')]: {
            textAlign: 'initial',
            fontSize: '18px',
            fontWeight: 'bold',
            color: "#fff",
            marginBottom: 0,
            marginTop: theme.spacing(0),
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(10),
            textAlign: 'initial',
            fontSize: '25px',
            fontWeight: 'bold',
            color: "#fff",
        },
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(10),
            textAlign: 'initial',
            fontSize: '30px',
            fontWeight: 'bold',
            color: "#fff",
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: theme.spacing(10),
            textAlign: 'initial',
            fontSize: '42px',
            fontWeight: 'bold',
            color: "#fff",
        },
        [theme.breakpoints.up('xl')]: {
            marginTop: theme.spacing(10),
            textAlign: 'initial',
            fontSize: '42px',
            fontWeight: 'bold',
            color: "#fff",
        },

    },
    Button: {
        width:"max-content",
        background: "#35A052",
        textDecoration: 'none',
        color: '#fff',
        fontSize: '10px',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingTop: '2px',
        paddingBottom: '2px',
        borderRadius: '25px',
        margin: '2px',
        textTransform: 'capitalize',
        "&:hover": {
            color: '#fff',
            background: "#35A052",
            pointerEvent: "all",
          
        },
        [theme.breakpoints.up('sm')]: {
            background: "#35A052",
            textDecoration: 'none',
            color: '#fff',
            fontSize: '15px',
            paddingLeft: '15px',
            paddingRight: '15px',
            paddingTop: '6px',
            paddingBottom: '6px',
            borderRadius: '25px',
            margin: '5px',
            textTransform: 'capitalize',
            "&:hover": {
                color: '#fff',
                background: "#35A052",
                pointerEvent: "all",
              
            },
        },
        [theme.breakpoints.down('sm')]: {
            background: "#35A052",
        textDecoration: 'none',
        color: '#fff',
        fontSize: '10px',
            paddingLeft: '12px',
            paddingRight: '12px',
            paddingTop: '2px',
            paddingBottom: '2px',
            borderRadius: '25px',
            margin: '5px',
            textTransform: 'capitalize',
            "&:hover": {
                color: '#fff',
                background: "#35A052",
                pointerEvent: "all",
              
            },
        },
    },
    container: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '0px',
        minHeight: '30vh',
        paddingLeft: '150px',
        [theme.breakpoints.up('xs')]: {
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '0px',
            minHeight: '30vh',
            paddingLeft: '170px',
        },
        [theme.breakpoints.up('sm')]: {
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '0px',
            minHeight: '30vh',
            paddingLeft: '400px',
        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '0px',
            minHeight: '50vh',
            paddingLeft: '550px',
        },
        [theme.breakpoints.up('lg')]: {
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '0px',
            minHeight: '60vh',
            paddingLeft: '580px',
        },
        [theme.breakpoints.up('xl')]: {
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '0px',
            minHeight: '60vh',
            paddingLeft: '580px',
        },
    },
    modalButton: {
        background: "#35A052",
        textDecoration: 'none',
        color: '#fff',
        fontSize: '10px',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingTop: '2px',
        paddingBottom: '2px',
        borderRadius: '25px',
        margin: '2px',
        textTransform: 'capitalize',
        "&:hover": {
            color: '#fff',
            background: "#35A052",
            pointerEvent: "all",
        },
        [theme.breakpoints.up('sm')]: {
            background: "#35A052",
            textDecoration: 'none',
            color: '#fff',
            fontSize: '15px',
            paddingLeft: '15px',
            paddingRight: '15px',
            paddingTop: '5px',
            paddingBottom: '5px',
            borderRadius: '25px',
            margin: '5px',
            textTransform: 'capitalize',
            "&:hover": {
                color: '#fff',
                background: "#35A052",
                pointerEvent: "all",
            },
        },
    },
    modal: {

    },
    modalContainer: {
        padding: "20px",
    },
    modalText:{
        textAlign: locale === 'ar' ? "right" : "left",
        padding:'0px',
    },
    modalTitle: {
        fontWeight: "500",
        fontSize: "22px",
        color: "#1E396C",
        textAlign: "center",
        paddingBottom: "15px",
        [theme.breakpoints.down('sm')]: {
            fontWeight: "500",
            fontSize: "18px",
            color: "#1E396C",
            textAlign: "center",
        }
    },
    modalDiscription: {
        fontWeight: "normal",
        fontSize: "18px",
        paddingLeft: '20px',
        paddingRight: '20px',
        color: "#1E396C",
        textAlign: locale === 'ar' ? "right" : "left",
        [theme.breakpoints.down('sm')]: {
            fontWeight: "normal",
            paddingLeft: '15px',
            paddingRight: '15px',
            fontSize: "15px",
            color: "#1E396C",
            textAlign: locale === 'ar' ? "right" : "left",
        }
    },
    modalButtonBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalIcon: {
        fontSize: '25px',
        color: "#1E396C",
    },
}));



