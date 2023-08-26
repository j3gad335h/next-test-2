import React, { useState } from 'react';
import {
    Dialog,
    Container,
    List,
    IconButton,
    ListItem,
    FormGroup,
    Typography,
    Grid,
    TextField,
    Button,
    Slide,
    CircularProgress,
    Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import { useTranslation } from "next-i18next";
import { styled } from '@mui/material/styles';
import { makeStyles, withStyles } from '@mui/styles';
import MuiSnackbar from '../SnackBar/SnackBar';
import $ from "jquery";
const StyledTextField = styled(TextField)(({ locale }) => ({
    "& label": {
        transformOrigin: locale === 'en' ? "none" : "top right",
        right: locale === "en" ? 'auto' : 28,
        left: locale === "en" ? 0 : 'auto',
        fontFamily: locale === "ar" ? "Tajawal" : "Ample",
        top: "auto",
    },
    "& legend": {
        textAlign: locale === 'en' ? "left" : "right",
        fontFamily: locale === "ar" ? "Tajawal" : "Ample",
    }
}));

const useStyles = makeStyles((theme, locale) => ({
    modalTitle: {
        fontSize: '25px',
        color: '#1E396C',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: '23px',
            color: '#1E396C',
            textAlign: 'center',
        }
    },
    buttonBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitButton: {
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
            color: "#35A052",
            background: "#ffff",
            pointerEvent: "all",
            border: '1px solid #35A052',
        },
    },
    buttonBox: {
        display: 'flex',
        justifyContent: "center",
        alignContent: 'center'
    },
    submitButton: {
        backgroundColor: '#37A753',
        color: '#fff',
        paddingLeft: '15px',
        paddingRight: '15px',
        borderRadius: '25px',
        paddingTop: '5px',
        paddingBottom: '5px',
        "&:hover,&:focus": {
            backgroundColor: '#37A753',
            color: '#fff',
            pointerEvent: "all",
        },
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const StyledProgress = styled(CircularProgress)(() => ({
    color: '#37A753',
    display: 'flex',
    justifyContent: "center",
    alignContent: 'center'
}))
function SupplyChainModal({ open, onClose }) {
    const classes = useStyles();
    const { locale } = useRouter();
    const { t } = useTranslation('common');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState("+966")
    const [message, setMessage] = useState();
    const [responseStatus, setResponseStatus] = useState();
    const [responseMessage, setResponseMessage] = useState();
    const [response, setResponse] = useState(false);
    let [isLoading, setIsLoading] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const SCMARUrl = "https://scm.raqamyah.com/ar/"
    const SCMEnUrl = "https://scm.raqamyah.com/en/"
    const handleClose = () => {
        onClose();
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
    const handleFullNameChange = event => {
        const result = event.target.value.replace(/[^a-z]/gi, '');
        setFullName(result);
    };

    const handleSubmit = () => {
        if (!fullName) {
            setResponseMessage(t("consumer Protection.Name Validation"));
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
            setResponseMessage(t("consumer Protection.Email Validation"));
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
        setIsLoading(true)
        var data = {
            // service_id: 'service_6535v08',
            // template_id: 'template_jpu9lei',
            // user_id: 'MtZA6iQ70-U03RRFf',
            service_id: 'service_j8r4n0p',
            template_id: 'template_fryqadl',
            user_id: 'leUmjEGn9HRBgSizk',
            template_params: {
                name: fullName,
                phoneNo: code + phoneNumber,
                email: email,
            }
        };
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function () {
            setResponseMessage(selected === 'ar' ? t("Your details are submitted successfully") : "Email sent successfully!");
            setResponse(true);
            setResponseStatus(200);
            window.location.reload()
        }).fail(function (error) {
            setIsLoading(false)
            setResponseMessage('Oops... ' + JSON.stringify(error));
            setResponse(true);
            setResponseStatus(200);
        });

        if (selected === "ar") {
            window.open(SCMARUrl, "_blank");
        }
        if (selected === "en") {
            window.open(SCMEnUrl, "_blank");
        }
    };

    return (
        <Container>
            <MuiSnackbar
                status={responseStatus}
                visible={response}
                setResponse={setResponse}
                message={responseMessage}
                setResponseStatus={setResponseStatus}
                setResponseMessage={setResponseMessage} />
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <Container sx={{ position: "relative" }}>
                    <List>
                        <IconButton
                            edge="start"
                            color="inherit"
                            className={classes.ModalIconButton}
                            onClick={handleClose}
                            aria-label="close"><CloseIcon /></IconButton>
                        <ListItem>
                            <FormGroup>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Typography className={classes.modalTitle}>
                                            {t("supply chain.Supply chain Personal Detils")}
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <StyledTextField
                                            locale={locale}
                                            id="outlined-basic"
                                            label={t("consumer Protection.Consumer Protection FullName")}
                                            variant="outlined"
                                            fullWidth
                                            type="text"
                                            value={fullName}
                                            onChange={handleFullNameChange}
                                            name="fullName"
                                            className={classes.textField}
                                            InputProps={{
                                                className: classes.input,
                                            }}
                                            inputProps={{
                                                pattern: "^[A-Za-z]+$", // Use a regular expression pattern for letters only
                                                title: "Please enter letters only", // Provide a user-friendly error message
                                            }}
                                            InputLabelProps={{
                                                classes: {
                                                    root: classes.cssLabel,
                                                    focused: classes.cssFocused,
                                                },
                                            }} />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
                                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
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
                                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                                        <StyledTextField
                                            locale={locale}
                                            id="outlined-basic"
                                            label={t("consumer Protection.Consumer Protection PhoneNumber")}
                                            variant="outlined"
                                            fullWidth
                                            type="text"
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            name="phoneNumber"
                                            onKeyPress={event => {
                                                if (!/[0-9]/.test(event.key)) {
                                                    event.preventDefault();
                                                }
                                            }}
                                            className={classes.textField}
                                            InputProps={{
                                                inputProps: { maxLength: 9, pattern: "[0-9]*" },
                                                className: classes.input,
                                            }}
                                            InputLabelProps={{
                                                classes: {
                                                    root: classes.cssLabel,
                                                    focused: classes.cssFocused,
                                                },
                                            }} />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                                        <Box className={classes.buttonBox}>
                                            <Button style={{ background: isLoading ? "#1E396C" : "#37A753", }} disabled={isLoading} className={classes.submitButton} onClick={() => handleSubmit()}> <Typography className={classes.submitButtonText}>
                                                {isLoading ? (
                                                    <StyledProgress
                                                        size={15} />) : t("consumer Protection.Compaint Submit Button")}
                                            </Typography>
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>

                            </FormGroup>
                        </ListItem>
                    </List>
                </Container>
            </Dialog>
        </Container>

    );
}

export default SupplyChainModal;
