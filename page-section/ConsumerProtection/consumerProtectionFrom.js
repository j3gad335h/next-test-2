import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
    Box,
    Button,
    Card,
    CardContent, CircularProgress,
    Container,
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import $ from "jquery";
import { useTranslation } from "next-i18next";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import BaseUrl from '../../baseUrl';
import MuiSnackbar from '../../components/SnackBar/SnackBar';
const StyledTextField = styled(TextField)(({ locale }) => ({
    "& label": {
      transformOrigin: locale === 'en' ? "none":"top right",
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

  const Selectstyles = (theme, locale) => ({
    
    "& label": {
      transformOrigin: locale === 'en' ? "none" : "top right",
      right: locale === "en" ? 'auto' : 28,
      left: locale === "en" ? 0 : 'auto',

    },
    "& legend": {
      textAlign: locale === 'en' ? "left" : "right",
    },

    "& .MuiSvgIcon-root.MuiSelect-icon": {
        position: 'absolute',
        right: locale === 'en' ? "7px" : "auto",
        left: locale === 'en' ?"auto" : "7px",
      },
      "& .Mui-checked":{
        color: "#37a753",
      }
  });
  
  const StyledSelect = styled(FormControl)(({ theme, locale }) => Selectstyles(theme, locale));


  const StyledProgress = styled(CircularProgress)(() => ({
    color: '#37A753', 
    display: 'flex', 
    justifyContent: "center", 
    alignContent: 'center'
}))
export default function consumerProtectionFrom() {
    const classes = useStyles();
    const { locale } = useRouter();
    const { t } = useTranslation('common');
    const [fullName, setFullName] = useState();
    const [nationalId, setNationalId] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [code, setCode] = useState("+966")
    const [email, setEmail] = useState();
    const [customerType, setCustomerType] = useState();
    const [complaintType, setComplaintType] = useState();
    const [contactVia, setContactVia] = useState();
    const [message, setMessage] = useState();
    const [responseStatus, setResponseStatus] = useState();
    const [responseMessage, setResponseMessage] = useState();
    const [response, setResponse] = useState(false);
    let [isLoading, setIsLoading] = useState(false);
    const image = "/assetsNew/images/contact/call-center.png"
    const [isValidEmail, setIsValidEmail] = useState(true);

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
    const Complaint = () => {
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
        if (!nationalId) {
            setResponseMessage(t("consumer Protection.NationalID Validation"));
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
        if (!customerType) {
            setResponseMessage(t("consumer Protection.CustomerType Validation"));
            setResponse(true);
            setResponseStatus(500);
            return;
        }
        if (!complaintType) {
            setResponseMessage(t("Complaint Type Validation"));
            setResponse(true);
            setResponseStatus(500);
            return;
        }
        if (!contactVia) {
            setResponseMessage(t("consumer Protection.consumer Protection.ContactVia Validation"));
            setResponse(true);
            setResponseStatus(500);
            return;
        }
        if (!message) {
            setResponseMessage(t("consumer Protection.consumer Protection.Message Validation"));
            setResponse(true);
            setResponseStatus(500);
            return;
        }


        var data = {
            // service_id: 'service_7466mcy',
            // template_id: 'template_mos9ehf',
            // user_id: 'Jm3LZHmjw9JD7kDw6',
            service_id: 'service_1u1cdjr',
            template_id: 'template_q79aw7j',
            user_id: '8IlY5b3fDiIHgHgbc',
            template_params: {
                fullName: fullName,
                nationalId: nationalId,
                phoneNumber: code + phoneNumber,
                email: email,
                customerType: customerType,
                complaintType: complaintType,
                contactVia: contactVia,
                message: message
            }
        };
        setIsLoading(true)
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function () {
            setResponseMessage(locale === 'ar' ? t("consumer Protection.Your details are submitted successfully") : "Email sent successfully!");
            setResponse(true);
            setResponseStatus(1);
            window.location.reload()
        }).fail(function (error) {
            setIsLoading(false)
            setResponseMessage('Oops... ' + JSON.stringify(error));
            setResponse(true);
            setResponseStatus(200);
        });
    };
    return (
        <section>
            <MuiSnackbar
                    style={{ fontFamily: "AmpleRegular" }}
                    status={responseStatus}
                    visible={response}
                    setResponse={setResponse}
                    message={responseMessage}
                    setResponseStatus={setResponseStatus}
                    setResponseMessage={setResponseMessage} />
             <Container>
                <Grid container spacing={2}>
                    <Grid textAlign={'center'} item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography className={classes.Title}>{t("menu.Consumer protection")}</Typography>
                        <Divider className={classes.Divider} />
                      
                    </Grid>
                </Grid>
            </Container>
            <Container className={classes.formContainer} >
                <Grid style={{ margin:'0px'}} container spacing={2}>
                    <Grid  className={classes.GridBox} item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Card className={classes.contactCard}>
                            <CardContent className={classes.cardContent}>
                                <Box className={classes.cardBox}>
                                    <PermContactCalendarIcon className={classes.cardIcon} style={{}} />
                                </Box>
                                <Typography variant='h1' className={classes.contactDiscripitionForm}>
                                    {t("consumer Protection.Consumer Protection Page Title")}
                                </Typography>
                            </CardContent>
                            <CardContent className={classes.cardContent}>
                                <EmailIcon className={classes.icons} /> <a className={classes.contactFormEmail} target="_blank" href="mailto:contactus@raqamyah.com">contactus@raqamyah.com</a><br />
                            </CardContent>
                            <CardContent className={classes.cardContent}>
                                <CallIcon className={classes.icons} /> <a className={classes.contactFormEmail} target="_blank" href="tel:920004032">920004032</a>
                            </CardContent>
                            <CardContent className={classes.cardContent}>
                                <Image alt="tollfree" width={32} height={32} src={image} /> <a className={classes.contactFormEmail} target="_blank" href="tel:8001000264">8001000264</a>
                            </CardContent>
                            <CardContent className={classes.cardContent}>
                                <TwitterIcon className={classes.icons} /><a className={classes.contactFormEmail} target="_blank" rel="nofollow" href="https://twitter.com/raqamyah">@raqamyah</a>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid className={classes.GridBox} item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Card className={classes.formCard}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.cssLabel,
                                                focused: classes.cssFocused,
                                            },
                                        }} />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <StyledTextField
                                       locale={locale}
                                        id="outlined-basic"
                                        label={t("consumer Protection.Consumer Protection NationalId")}
                                        variant="outlined"
                                        fullWidth
                                        type="number"
                                        onChange={(e) => setNationalId(e.target.value)}
                                        name="nationalId"
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
                                        onChange={(e) => setCode(e.target.value)}
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
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <StyledSelect    locale={locale} fullWidth variant="outlined">
                                        <InputLabel id="demo-simple-select-outlined-label">{t("consumer Protection.Consumer Protection CustomerType")}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            onChange={(e) => setCustomerType(e.target.value)}
                                            label="Customer Type"
                                        >

                                            <MenuItem className={classes.textField} value='financee'>{t("consumer Protection.Consumer Protection CustomerType Menu1")}</MenuItem>
                                            <MenuItem className={classes.textField} value='investor'>{t("consumer Protection.Consumer Protection CustomerType Menu2")}</MenuItem>

                                        </Select>
                                    </StyledSelect>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <StyledSelect    locale={locale} fullWidth variant="outlined">
                                        <InputLabel id="demo-simple-select-outlined-label">{t("consumer Protection.Consumer Protection Compalint")}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            onChange={(e) => setComplaintType(e.target.value)}
                                            label={t("consumer Protection.Consumer Protection Compalint")}>

                                            <MenuItem className={classes.textField} value='complaint'>{t("consumer Protection.Consumer Protection Compalint Menu1")}</MenuItem>
                                            <MenuItem className={classes.textField} value='feedback & suggestion'>{t("consumer Protection.Consumer Protection Compalint Menu2")}</MenuItem>

                                        </Select>
                                    </StyledSelect>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}></Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <FormControl>
                                        <FormLabel className={classes.textField} id="demo-row-radio-buttons-group-label">{t("consumer Protection.Consumer Protection ContactVia")}</FormLabel>
                                        <RadioGroup
                                            row
                                            className={classes.textField}
                                            InputProps={{
                                                className: classes.input,
                                            }}
                                            InputLabelProps={{
                                                classes: {
                                                    root: classes.cssLabel,
                                                    focused: classes.cssFocused,
                                                },
                                            }}
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                            onChange={(e) => setContactVia(e.target.value)}

                                        >
                                            <FormControlLabel value="telephone" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label={<span className={classes.textField}>{t('consumer Protection.Consumer Protection ContactVia TelePhone')}</span>} />
                                            <FormControlLabel value="email" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label={<span className={classes.textField}> {t('consumer Protection.Consumer Protection ContactVia Email')}</span>} />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <StyledTextField
                                      locale={locale}
                                        id="outlined-basic"
                                        label={t("consumer Protection.Consumer Protection Messages")}
                                        variant="outlined"
                                        fullWidth
                                        type="text"
                                        multiline
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows={4}
                                        name="message"
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
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Box className={classes.buttonBox}>
                                        <Button style={{ background: isLoading ? "#1E396C" : "#37A753", }} disabled={isLoading} className={classes.submitButton} onClick={() => Complaint()}> <Typography className={classes.submitButtonText}>
                                            {isLoading ? (
                                                <StyledProgress
                                                    size={15}/>) : t("consumer Protection.Compaint Submit Button")} 
                                                    </Typography>
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Card>
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
        [theme.breakpoints.down("sm")]: {
            fontSize: '23px',
        },
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

    formContainer:{
        padding: '50px 0px 50px 0px',

        [theme.breakpoints.down("sm")]: {
            padding: '25px',
        },
    },
    GridBox:{
        paddingLeft:'0px !important',
    },
    formCard: {
        padding: '50px',
        margin:'0px 15px 0px 15px',
        [theme.breakpoints.down("sm")]: {
            padding: '25px',
            margin:'0px 0px 0px 0px',
        },
    },

    contactCard: {
        padding: '50px',
        [theme.breakpoints.down("sm")]: {
            padding: '10px',
        },
    },
    textField: {
        paddingTop: '10px',
        paddingBottom: "10px",
    },
    contactDiscripitionForm: {
        fontWeight: "normal",
        fontSize: "18px",
        color: "#1E396C",
        position: "relative",
        textAlign: "justify",
        lineHeight:1.5,
        [theme.breakpoints.down("sm")]: {
            lineHeight:1.5,
            fontWeight: "normal",
            fontSize: "15px",
            color: "#1E396C",
            position: "relative",
        },
    },
    contactFormEmail: {
        color:'#1E396C',
        paddingLeft: "30px",
        paddingRight: "30px",
        fontSize: "18px",
        textAlign: "initial",
        color: "#1E396C",
        position: "relative",
        bottom: "10px",
    },
    cardIcon: {
        width: "60px",
        height: "100px",
        color: "#37A753",

    },
    icons:{
        color:'#1E396C', 
    },
    cardBox: {
        display: 'flex',
        justifyContent: "center",
        alignContent: 'center'
    },
    buttonBox: {
        display: 'flex',
        justifyContent: "center",
        alignContent: 'center'
    },
    submitButton: {
        backgroundColor: '#37A753',
        color: '#fff',
        "&:hover,&:focus": {
            backgroundColor: '#37A753',
            color: '#fff',
        },
    },
    submitButtonText: {
        color: '#fff',
    }
}));