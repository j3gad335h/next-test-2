import CloseIcon from '@mui/icons-material/Close';
import {
    Box,
    Button,
    Checkbox,
    Container,
    Dialog,
    FormControlLabel,
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
import MuiSnackbar from '../../components/SnackBar/SnackBar';
import LoginBaseUrl from '../../loginUrl';
const Image1 = "/assetsNew/images/PosFinance/PosFinace.svg";

export default function PosFinanceBanner() {
    const { locale } = useRouter();
    const classes = useStyles();
    const { t } = useTranslation('common');
    const [open, setOpen] = useState(false);
    const [checkBoxOne, setCheckBoxOne] = useState(false);
    const [checkBoxTwo, setCheckBoxTwo] = useState(false);
    const [checkBoxThree, setCheckBoxThree] = useState(false);
    const [checkBoxFour, setCheckBoxFour] = useState(false);
    const [responseStatus, setResponseStatus] = useState();
    const [responseMessage, setResponseMessage] = useState();
    const [response, setResponse] = useState(false);
    const SignupUrl = LoginBaseUrl + 'signupborrower?lang=' + `${locale}`;
    const handleCheckboxOneChange = (event) => {
        setCheckBoxOne(event.target.checked);
    };

    const handleCheckboxTwoChange = (event) => {
        setCheckBoxTwo(event.target.checked);
    };

    const handleCheckboxThreeChange = (event) => {
        setCheckBoxThree(event.target.checked);
    };

    const handleCheckboxFourChange = (event) => {
        setCheckBoxFour(event.target.checked);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCheckBoxOne(false);
        setCheckBoxTwo(false);
        setCheckBoxThree(false);
        setCheckBoxFour(false);
    };

    const handleSubmit = () => {
        if (checkBoxOne === false) {
            setResponseMessage(t("posFinance.posCheckBox1Label1"));
            setResponse(true);
            setResponseStatus(500);
            return;

        }
        if (checkBoxTwo === false) {
            setResponseMessage(t("posFinance.posCheckBox1Label2"));
            setResponse(true);
            setResponseStatus(500);
            return;
            return;
        }
        if (checkBoxThree === false) {
            setResponseMessage(t("posFinance.posCheckBox1Label3"));
            setResponse(true);
            setResponseStatus(500);
            return;

        }
   
        window.open(SignupUrl, "_blank");
        handleClose();
    };
    return (
        <HeroBanner className={classes.heroBanner} backgroundImage={Image1}>
            <MuiSnackbar
                status={responseStatus}
                visible={response}
                setResponse={setResponse}
                message={responseMessage}
                setResponseStatus={setResponseStatus}
                setResponseMessage={setResponseMessage} />
            <Container className={classes.container}>
                <Typography color="inherit" variant="h1" className={classes.bannerText}>
                    {t('posFinance.bannerTitle')}
                </Typography>
                <Button onClick={handleClickOpen} size="large" className={classes.Button}>{t('posFinance.bannerButton')}</Button>
            </Container>
            {/* modal */}
            <Dialog
                open={open}
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
                        <ListItem>
                            <FormGroup>
                                <Typography className={classes.modalTitle}>{t("posFinance.posFinanceModalTitle")}</Typography>
                                <FormControlLabel className={classes.modalCheckBox}
                                 style={{ textAlign: locale === 'ar' ? 'right' : 'left' }}
                                    control={
                                        <Checkbox
                                            checked={checkBoxOne}
                                            onChange={handleCheckboxOneChange}
                                            color="primary" />}
                                    label={<span className={classes.modalCheckBox}>{t("posFinance.posFinanceCheckBoxLabel1")}</span>} />
                                <FormControlLabel className={classes.modalCheckBox}
                                 style={{ textAlign: locale === 'ar' ? 'right' : 'left' }}
                                    control={
                                        <Checkbox
                                            checked={checkBoxTwo}
                                            onChange={handleCheckboxTwoChange}
                                            color="primary" />}
                                    label={<span className={classes.modalCheckBox}>{t("posFinance.posFinanceCheckBoxLabel2")}</span>} />
                                <FormControlLabel className={classes.modalCheckBox}
                                 style={{ textAlign: locale === 'ar' ? 'right' : 'left' }}
                                    control={
                                        <Checkbox
                                            checked={checkBoxThree}
                                            onChange={handleCheckboxThreeChange}
                                            color="primary" />}
                                    label={<span className={classes.modalCheckBox}>{t("posFinance.posFinanceCheckBoxLabel3")}</span>} />
                      
                                <Typography style={{ textAlign: locale === 'ar' ? 'right' : 'left' }} className={classes.modalDiscription}>{" "}{t("posFinance.posFinanceCheckBoxDiscription1")}</Typography>
                                <Typography style={{ textAlign: locale === 'ar' ? 'right' : 'left' }} className={classes.modalDiscription}>{" "}{t("posFinance.posFinanceCheckBoxDiscription2")}</Typography>
                                <Box className={classes.modalButtonBox}>
                                    <Button onClick={handleSubmit} className={classes.modalButton}>{t("posFinance.posFinanceCheckBoxButton")}</Button>
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
            marginBottom: theme.spacing(2),
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
            paddingLeft: '200px',
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
            paddingLeft: '600px',
        },
        [theme.breakpoints.up('xl')]: {
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '0px',
            minHeight: '60vh',
            paddingLeft: '600px',
        },
    },
    modal: {

    },
    modalContainer: {
        padding: "20px",
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
        fontSize: "14px",
        color: "#1E396C",
        paddingBottom: "5px",
        textAlign: locale === 'ar' ? "right" : "left",
        [theme.breakpoints.down('sm')]: {
            fontWeight: "normal",
            fontSize: "14px",
            color: "#1E396C",
            textAlign: locale === 'ar' ? "right" : "left",
        }
    },
    modalCheckBox: {
        fontWeight: "normal",
        fontSize: "18px",
        color: "#1E396C",
        paddingBottom: "5px",
        textAlign: locale === 'ar' ? "right" : "left",
        [theme.breakpoints.down('sm')]: {
            fontWeight: "normal",
            fontSize: "15px",
            color: "#1E396C",
            textAlign: locale === 'ar' ? "right" : "left",
        }
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
    modalButtonBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));