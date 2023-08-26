import {
    Button, Container,
    Slide,
    Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import BaseUrl from '../../baseUrl';
import SupplyChainModal from '../../components/ModalBox/SupplyChainModal';
const HeroBanner = dynamic(() => import('../../components/Banner/HeroBanner'));
const Image1 = "/assetsNew/images/SupplyChain/Raq_Web_Banners.webp";
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
        width: "auto",
        height: "auto",
        padding: "0px !important"
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
        letterSpacing:'0.00938em !important',
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
        alignItems: 'center',
        padding:'0px'
    }
}));


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function SupplyChainBanner() {
    const { locale } = useRouter();
    const classes = useStyles();
    const { t } = useTranslation('common');
    const [open, setOpen] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState("+966")

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        setIsValidEmail(validateEmail(newEmail));
    };

    const handleSubmit = () => {
        if (!fullName) {
            setResponseMessage(t("consumer Protection.Name Validation"));
            setResponse(true);
            setResponseStatus(500);
            return;
        }

        if (!phoneNumber) {
            setResponseMessage(t("consumer Protection.PhoneNumber Validation"));
            setResponse(true);
            setResponseStatus(500);
            return;
        }
        if (phoneNumber.length !== 9) {
            setResponseMessage(t("consumer Protection.PhoneNumber Length Validation"));
            setResponse(true);
            setResponseStatus(500);
            return;
        }
        if (phoneNumber[0] !== "5") {
            setResponseMessage(t("consumer Protection.PhoneNumber Validation 5 Start"));
            setResponse(true);
            setResponseStatus(500);
            return;
        }
        if (!email) {
            setResponseMessage(t("consumer Protection.Email empty Validation"));
            setResponse(true);
            setResponseStatus(500);
            return;
        }
        if (!isValidEmail) {
            setResponseMessage(t("consumer Protection.Email empty Validation"));
            setResponse(true);
            setResponseStatus(500);
            return;
        }
    };

    return (
        <HeroBanner className={classes.heroBanner} backgroundImage={Image1}>
            <Container className={classes.container}>
                <Typography color="inherit" variant="h1" className={classes.bannerText}>
                    {t('supply chain.supply chain bannerText')}
                </Typography>
                <Button onClick={handleOpen} size="large" className={classes.Button}>{t('supply chain.banerButton')}</Button>
                <SupplyChainModal open={open} onClose={handleClose} />
            </Container>
            {/* modal */}
            {/* <Dialog
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <Container sx={{ position: "relative" }}>
                <List>
                    <ListItem>
                        <FormGroup>
                            <Typography>
                                Supply Chain Personal Details
                            </Typography>
                            <Grid container>
                                <Grid item md={12} sm={12} xs={12}>
                                    <StyledTextField
                                        locale={locale}
                                        id="outlined-basic"
                                        label={t("consumer Protection.Consumer Protection FullName")}
                                        variant="outlined"
                                        fullWidth
                                        type="text"
                                        onChange={(e) => setFullName(e.target.value)}
                                        name="fullName"
                                        className={classes.textField}
                                        InputProps={{
                                            className: classes.input,
                                        }}
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.cssLabel,
                                                focused: classes.cssFocused,
                                            },
                                        }} />
                                </Grid>
                                <Grid item md={12} sm={12} xs={12}>
                                    <StyledTextField
                                        locale={locale}
                                        id="outlined-basic"
                                        label={t("consumer Protection.Consumer Protection Email")}
                                        variant="outlined"
                                        fullWidth
                                        value={email}
                                        type="email"
                                        onChange={handleEmailChange}
                                        name="email"
                                        className={classes.textField}
                                        InputProps={{
                                            className: classes.input,
                                        }}
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.cssLabel,
                                                focused: classes.cssFocused,
                                            },
                                        }} />
                                </Grid>
                                <Grid item xs={3} sm={3} md={2} lg={2} xl={2}>
                                    <StyledTextField
                                        locale={locale}
                                        id="outlined-basic"
                                        label={t("consumer Protection.Country Code")}
                                        variant="outlined"
                                        fullWidth
                                        type="text"
                                        disabled
                                        defaultValue={"+966"}
                                        onChange={(e) => setCountryCode(e.target.value)}
                                        name="code"
                                        className={classes.textField}
                                        InputProps={{
                                            className: classes.input,
                                        }}
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.cssLabel,
                                                focused: classes.cssFocused,
                                            },
                                        }} />
                                </Grid>
                                <Grid item xs={9} sm={9} md={4} lg={4} xl={4}>
                                    <StyledTextField
                                        locale={locale}
                                        id="outlined-basic"
                                        label={t("consumer Protection.Consumer Protection PhoneNumber")}
                                        variant="outlined"
                                        fullWidth
                                        type="number"
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        name="phoneNumber"
                                        className={classes.textField}
                                        InputProps={{
                                            className: classes.input,
                                        }}
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.cssLabel,
                                                focused: classes.cssFocused,
                                            },
                                        }} />
                                </Grid>

                            </Grid>
                            <Button onClick={handleSubmit}>
                                Submit
                            </Button>
                        </FormGroup>
                    </ListItem>
                </List>
            </Container>
        </Dialog> */}
        </HeroBanner>

    )
}
