import CloseIcon from '@mui/icons-material/Close';
import {
    Box,
    Button,
    Checkbox,
    Container,
    Dialog,
    Divider,
    FormControlLabel,
    FormGroup,
    Grid,
    IconButton,
    List, ListItem,
    Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import MuiSnackbar from '../../components/SnackBar/SnackBar';
import LoginBaseUrl from '../../loginUrl';
export default function HomeWereHere() {
    const classes = useStyles();
    const { locale } = useRouter();
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
            setResponseMessage(t("getFinance.getFinanceCheckBox1Label1Error"));
            setResponse(true);
            setResponseStatus(500);
            return;

        }
        if (checkBoxTwo === false) {
            setResponseMessage(t("getFinance.getFinanceCheckBox2Label2Error"));
            setResponse(true);
            setResponseStatus(500);
            return;
            return;
        }
        if (checkBoxThree === false) {
            setResponseMessage(t("getFinance.getFinanceCheckBox3Label3Error"));
            setResponse(true);
            setResponseStatus(500);
            return;

        }
        if (checkBoxFour === false) {
            setResponseMessage(t("getFinance.getFinanceCheckBox4Label4Error"));
            setResponse(true);
            setResponseStatus(500);
            return;

        }
        window.open(SignupUrl, "_blank");
        handleClose();
    };


    return (
        <section>
            <MuiSnackbar
                status={responseStatus}
                visible={response}
                setResponse={setResponse}
                message={responseMessage}
                setResponseStatus={setResponseStatus}
                setResponseMessage={setResponseMessage} />
            <Container className={classes.titleContainer} maxWidth="lg" >
                <Grid container spacing={2}>
                    <Grid className={classes.titleGrid} textAlign={'center'} item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant='h1' className={classes.Title}>{t('home.help your business')}</Typography>
                        <Divider className={classes.Divider} />
                        <Box className={classes.DiscriptionBox}>
                            <Typography className={classes.Discription}>{t('home.service_discripition')}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="false" className={classes.ButtonContainer}>
                <Grid className={classes.ButtonMainGrid} container spacing={2}>
                    <Grid className={classes.ButtonGrid} item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button className={classes.Button} onClick={handleClickOpen}>{t('home.get start button')}</Button>
                        <span className={classes.ButtonOr}>{t('home.Or')}</span>
                        <Link href={`/${locale}/learnMoreFinancee`} className={classes.ButtonMore}>{t('home.Learn More button')}</Link>
                    </Grid>
                </Grid>
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
                                <Typography className={classes.modalTitle}>{t("getFinance.getFinanceModalTitle")}</Typography>
                                <FormControlLabel className={classes.modalCheckBox}
                                 style={{ textAlign: locale === 'ar' ? 'right' : 'left' }}
                                    control={
                                        <Checkbox
                                            checked={checkBoxOne}
                                            onChange={handleCheckboxOneChange}
                                            color="primary" />}
                                    label={<span className={classes.modalCheckBox}>{t("getFinance.getFinanceCheckBox1Label1")}</span>} />
                                <FormControlLabel className={classes.modalCheckBox}
                                 style={{ textAlign: locale === 'ar' ? 'right' : 'left' }}
                                    control={
                                        <Checkbox
                                            checked={checkBoxTwo}
                                            onChange={handleCheckboxTwoChange}
                                            color="primary" />}
                                    label={<span className={classes.modalCheckBox}>{t("getFinance.getFinanceCheckBox2Label2")}</span>} />
                                <FormControlLabel className={classes.modalCheckBox}
                                 style={{ textAlign: locale === 'ar' ? 'right' : 'left' }}
                                    control={
                                        <Checkbox
                                            checked={checkBoxThree}
                                            onChange={handleCheckboxThreeChange}
                                            color="primary" />}
                                    label={<span className={classes.modalCheckBox}>{t("getFinance.getFinanceCheckBox3Label3")} </span>} />
                                <FormControlLabel className={classes.modalCheckBox}
                                 style={{ textAlign: locale === 'ar' ? 'right' : 'left' }}
                                    control={
                                        <Checkbox
                                            checked={checkBoxFour}
                                            onChange={handleCheckboxFourChange}
                                            color="primary" />}
                                    label={<span className={classes.modalCheckBox}>{t("getFinance.getFinanceCheckBox4Label4")}</span>} />
                                <Typography style={{ textAlign: locale === 'ar' ? 'right' : 'left' }} className={classes.modalDiscription}>{" "}{t("getFinance.getFinanceCheckBoxDiscription1")}</Typography>
                                <Typography style={{ textAlign: locale === 'ar' ? 'right' : 'left' }} className={classes.modalDiscription}>{" "}{t("getFinance.getFinanceCheckBoxDiscription2")}</Typography>
                                <Box className={classes.modalButtonBox}>
                                    <Button onClick={handleSubmit} className={classes.modalButton}>{t("getFinance.getFinanceCheckBoxButton")}</Button>
                                </Box>
                            </FormGroup>
                        </ListItem>
                    </List>
                </Container>
            </Dialog>
        </section>
    )
}
const useStyles = makeStyles((theme, locale) => ({
    titleContainer:{
        padding:'0px',
        [theme.breakpoints.down('md')]: {
            padding:'16px',
        }
    },
    Title: {
        fontSize: '35px',
        color: '#1E396C',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: '23px',
            color: '#1E396C',
            textAlign: 'center',
            fontWeight: '600px',
        }
    },
    titleGrid: {
        paddingLeft: '0px !important'
    },
    Discription: {
        color: '#1E396C',
        textAlign: 'center',
        fontSize: '20px',
        [theme.breakpoints.down('md')]: {
            color: '#1E396C',
            textAlign: 'center',
            fontSize: '18px',
        }
    },
    DiscriptionBox: {
        padding: '16px 16px 16px 16px',
    },
    Divider: {
        width: 'auto',
        height: '2px',
        background: '#37A753',
        marginLeft: '45%',
        marginRight: '45%',
        marginTop: '10px',
    },
    SubTitle: {
        textAlign: 'center',
        fontSize: '25px',
        color: "#1E396C",
        padding: '15px',
    },
    serviceGrid: {
        paddingTop: '25px',
        paddingBottom: '25px',
        paddingLeft: '0px !important',
        paddingRight: '0px',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    discription: {
        fontSize: '19px',
        padding: '10px'
    },
    iconBox: {
        background: "#E0E1E1",
        padding: '50px',
        borderRadius: '100%',
        "&:hover,&:focus": {
            color: "#ffffff",
            pointerEvent: "all",
            boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 40%), 0px 1px 1px 0px rgb(0 0 0 / 44%), 0px 1px 3px 0px rgb(0 0 0 / 52%)",
        },
    },
    getFinanceIcon: {
        width: '50px',
        height: '50px',
    },
    ButtonGrid: {
        display: "inline",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonMainGrid: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Button: {
        background: "#35A052",
        color: '#fff',
        fontSize: '16px',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '8px',
        paddingBottom: '8px',
        borderRadius: '25px',
        textTransform: 'capitalize',
        "&:hover": {
            color: '#fff',
            background: "#35A052",
            pointerEvent: "all",
          
        },
        [theme.breakpoints.down('md')]: {
            background: "#35A052",
            color: '#fff',
            fontSize: '16px',
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
        }
    },
    ButtonOr: {
        color: '#1E396C',
        fontSize: '18px',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingTop: '2px',
        paddingBottom: '2px',
        borderRadius: '25px',
        textTransform: 'capitalize',
        [theme.breakpoints.down('md')]: {
            color: '#1E396C',
            fontSize: '18px',
            paddingLeft: '15px',
            paddingRight: '15px',
            paddingTop: '2px',
            paddingBottom: '2px',
            borderRadius: '25px',
            textTransform: 'capitalize',
        }

    },
    ButtonMore: {
        color: '#1E396C',
        fontSize: '20px',
        paddingTop: '2px',
        paddingBottom: '2px',
        textTransform: 'capitalize',
        borderRadius: '0px',
        borderBottom: '2px solid #35A052',
        textDecoration: 'none',
        "&:hover": {
            color: "#1E396C",
            pointerEvent: "all",
        },
        [theme.breakpoints.down('md')]: {
            color: '#1E396C',
            textDecoration: 'none',
            fontSize: '16px',
            paddingTop: '2px',
            paddingBottom: '2px',
            textTransform: 'capitalize',
            borderRadius: '0px',
            borderBottom: '2px solid #35A052',
            "&:hover": {
                color: "#1E396C",
                pointerEvent: "all",
            },
        }
    },
    ButtonContainer: {
        padding: '40px 0px 0px 0px',
        [theme.breakpoints.down('md')]: {
            padding: '10px 0px 0px 0px',
        }
    },
    modal: {

    },
    modalContainer: {
        padding: "20px 20px 0px 20px",
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
        paddingTop: '7px',
        paddingBottom: '7px',
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