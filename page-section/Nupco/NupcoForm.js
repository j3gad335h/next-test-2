import CloseIcon from '@mui/icons-material/Close';
import {
    Box,
    Button,
    Card,
    CircularProgress,
    Container,
    Dialog,
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    IconButton,
    InputLabel,
    List, ListItem,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import $ from "jquery";
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';
import { useState } from 'react';
import MuiSnackbar from '../../components/SnackBar/SnackBar';
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
        left: locale === 'en' ? "auto" : "7px",
    },
    "& .Mui-checked": {
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
export default function NupcoForm() {
    const { locale } = useRouter();
    const classes = useStyles();
    const { t } = useTranslation('common');
    const [companyName, setCompanyName] = useState('');
    const [yearsOfBusiness, setYearsOfBusiness] = useState("");
    const [auditedFinancials, setAuditedFinancials] = useState("");
    const [responseStatus, setResponseStatus] = useState();
    const [responseMessage, setResponseMessage] = useState();
    const [totalSalesForCurrentYear, setTotalSalesForCurrentYear] = useState("");
    const [response, setResponse] = useState(false);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [countryCode, setCountryCode] = useState("+966");
    let [isLoading, setIsLoading] = useState(false);
    const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, '');


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // radioButton///
    const YearOfBusiness = async (value) => {
        if (value <= 3) {
            setResponseMessage(t("Campaign.business year greater validation"));
            setResponse(true);
            setResponseStatus(500);
            return;

        } else {
            setYearsOfBusiness(value)
        }

    }

    // radioButton///
    const radioChangeHandler = async (value) => {
        if (value == "no") {
            setResponseMessage(t("Campaign.financial statement validation"));
            setResponse(true);
            setResponseStatus(500);
            return;

        } else {
            setAuditedFinancials(value);
        }
    };
    const handleTotalSalesForCurrentYear = value => {
        if (value == '') {
            setTotalSalesForCurrentYear();
        } else {
            let number = value.toString().split('.');
            number[0] = addCommas(removeNonNumeric(number[0]));
            setTotalSalesForCurrentYear(number.join('.'));
        }
    };

    const handleInputChange = (event) => {
        setCompanyName(event.target.value);
    };


    const Apply = () => {

        if (companyName.length === 0) {
            setResponseMessage(t("Campaign.Campaign form  Company Name Validation"));
            setResponse(true);
            setResponseStatus(500);
            return;
        }
        if (yearsOfBusiness.length === 0) {
            setResponseMessage(t("Campaign.Campaign form  Number of years in Business Validation"));
            setResponse(true);
            setResponseStatus(500);
            return;
        }
        if (auditedFinancials.length === 0) {
            setResponseMessage(t("Campaign.Campaign.yes no validation"));
            setResponse(true);
            setResponseStatus(500);
            return;
        }
        if (totalSalesForCurrentYear.length === 0) {
            setResponseMessage(t("Campaign.Campaign form  Total sales for current year Validation"));
            setResponse(true);
            setResponseStatus(500);
            return;
        }

        handleClickOpen()
    }

    const SubmitForm = () => {
        if (name.length === 0) {
            setResponseMessage(t("Campaign.Campaign form Name Validation"));
            setResponse(true);
            setResponseStatus(500);
            return;
        }
        if (email.length === 0) {
            setResponseMessage(t("Campaign.Campaign form Email Validation"));
            setResponse(true);
            setResponseStatus(500);
            return;
        }
        if (email !== confirmEmail) {
            setResponseMessage(t("Campaign.Campaign form Email Confirm Validation"));
            setResponse(true);
            setResponseStatus(500);
            return;
        }
        if (phoneNo.length === 0) {
            setResponseMessage(t("Campaign.Campaign form Phone Number Validation"));
            setResponse(true);
            setResponseStatus(500);
            return;
        }
        if (phoneNo.substring(0, 1) !== "5") {
            setResponseMessage(t("Campaign.Phone number Validation"));
            setResponse(true);
            setResponseStatus(500);
            return;
        }
        if (phoneNo.length < 9) {
            setResponseMessage(t("Campaign.Phone number Validation"));
            setResponse(true);
            setResponseStatus(500);
            return;
        }
        if (phoneNo.length > 9) {
            setResponseMessage(t("Campaign.Phone number Validation"));
            setResponse(true);
            setResponseStatus(500);
            return;
        }
        var data = {
            service_id: 'service_5r5x79x',
            template_id: 'template_3epf2nv',
            user_id: '8IlY5b3fDiIHgHgbc',
            // service_id: 'service_7466mcy',
            // template_id: 'template_67i9ckj',
            // user_id: 'Jm3LZHmjw9JD7kDw6',
            template_params: {
                companyName: companyName,
                yearsOfBusiness: yearsOfBusiness > 1 ? yearsOfBusiness == 10 ? "More than 10 years" : yearsOfBusiness + "years" : yearsOfBusiness + "year",
                auditedFinancials: auditedFinancials,
                totalSalesForCurrentYear: totalSalesForCurrentYear,
                name: name,
                email: email,
                phoneNo: phoneNo,
                countryCode: countryCode,
            }
        };
        setIsLoading(true)
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function () {
            setResponseMessage(t("Campaign.Your details are submitted successfully"));
            setResponse(true);
            setResponseStatus(1);
            localStorage.clear();
            window.location.reload()
        }).fail(function (error) {
            setIsLoading(false)
            setResponseMessage('Oops... ' + JSON.stringify(error));
            setResponse(true);
            setResponseStatus(500);
        });
    }
    return (
        <section className={classes.nupcoForm}>
            <MuiSnackbar
                status={responseStatus}
                visible={response}
                setResponse={setResponse}
                message={responseMessage}
                setResponseStatus={setResponseStatus}
                setResponseMessage={setResponseMessage} />
                <Container maxWidth='lg'>
                <Card className={classes.formCard}>
                <Container className={classes.titleContainer}>
                    <Grid container spacing={2}>
                        <Grid textAlign={'center'} item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Typography className={classes.Title}>{t('Campaign.Campaign form Title')}</Typography>
                            <Divider className={classes.Divider} />
                        </Grid>
                    </Grid>
                </Container>
                <Container className={classes.formContainer}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <StyledTextField
                                locale={locale}
                                required
                                fullWidth
                                label={t('Campaign.Company Name')}
                                type="text"
                                autoComplete='off'
                                name="companyName"
                                onChange={handleInputChange}
                                inputProps={{ maxLength: 8 }}
                                className={classes.textField}
                                InputProps={{
                                    className: classes.input,
                                }} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>


                            <StyledSelect variant="outlined" locale={locale} fullWidth>
                                <InputLabel className={classes.textField} id="demo-simple-select-outlined-label" >{t('Campaign.Number of years in business')}</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={yearsOfBusiness}
                                    onChange={(e) => YearOfBusiness(e.target.value)}
                                    autoComplete='off'>
                                    <MenuItem className={classes.textField} value={1}>{t('Campaign.Label1')}</MenuItem>
                                    <MenuItem className={classes.textField} value={2}>{t('Campaign.Label2')}</MenuItem>
                                    <MenuItem className={classes.textField} value={3}>{t('Campaign.Label3')}</MenuItem>
                                    <MenuItem className={classes.textField} value={4}>{t('Campaign.Label4')}</MenuItem>
                                    <MenuItem className={classes.textField} value={5}>{t('Campaign.Label5')}</MenuItem>
                                    <MenuItem className={classes.textField} value={6}>{t('Campaign.Label6')}</MenuItem>
                                    <MenuItem className={classes.textField} value={7}>{t('Campaign.Label7')}</MenuItem>
                                    <MenuItem className={classes.textField} value={8}>{t('Campaign.Label8')}</MenuItem>
                                    <MenuItem className={classes.textField} value={9}>{t('Campaign.Label9')}</MenuItem>
                                    <MenuItem className={classes.textField} value={10}>{t('Campaign.Label10')}</MenuItem>
                                </Select>
                            </StyledSelect>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <FormControl>
                                <FormLabel className={classes.textField} id="demo-row-radio-buttons-group-label">{t('Campaign.Audited financials')}</FormLabel>
                                <RadioGroup
                                    row
                                    className={classes.textField}
                                    InputProps={{ className: classes.input, }}
                                    onChange={(e) => radioChangeHandler(e.target.value)}
                                    value={auditedFinancials}
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group">
                                    <FormControlLabel value="yes" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label={<span className={classes.textField}>{t('Campaign.yes')}</span>} />
                                    <FormControlLabel value="no" control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />} label={<span className={classes.textField}> {t('Campaign.No')}</span>} />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <StyledTextField
                                locale={locale}
                                required
                                fullWidth
                                label={t('Campaign.Total sales for current year')}
                                type="text"
                                autoComplete='off'
                                name="totalSalesForCurrentYear"
                                inputProps={{ maxLength: 8 }}
                                className={classes.textField}
                                value={totalSalesForCurrentYear}
                                onChange={(e) => handleTotalSalesForCurrentYear(e.target.value)}
                                InputProps={{ className: classes.input, }}

                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Box className={classes.buttonBox}>
                                <Button onClick={Apply} className={classes.submitButton}>{t('Campaign.Submit')}</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Card>
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

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.modalTitle}>
                                    <Typography color="inherit" variant="h7" className={classes.modalTitle}>{t('Campaign.Campaign form Title')}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <StyledTextField
                                        locale={locale}
                                        id="outlined-basic"
                                        label={t('Campaign.Campaign form Name')}
                                        type="text"
                                        variant="outlined"
                                        fullWidth
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
                                        onChange={(e) => setName(e.target.value)} />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <StyledTextField
                                        locale={locale}
                                        id="outlined-basic"
                                        label={t('Campaign.Campaign form Email')}
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                        onChange={(e) => setEmail(e.target.value)}
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
                                    <StyledTextField
                                        locale={locale}
                                        id="outlined-basic"
                                        type="email"
                                        label={t('Campaign.Campaign form Confirm Email')}
                                        variant="outlined"
                                        fullWidth
                                        onChange={(e) => setConfirmEmail(e.target.value)}
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
                                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                                    <StyledTextField
                                        locale={locale}
                                        variant="outlined"
                                        type="text"
                                        label={t('Campaign.Campaign form Phone Country Code')}
                                        fullWidth
                                        disabled
                                        value={'+966'}
                                        name="countryCode"
                                        onChange={(e) => setCountryCode(e.target.value)}
                                        className={classes.textField}
                                        InputProps={{
                                            className: classes.input,
                                        }}
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.cssLabel,
                                                focused: classes.cssFocused
                                            }
                                        }} />
                                </Grid>
                                <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                                    <StyledTextField
                                        locale={locale}
                                        id="outlined-basic"
                                        variant="outlined"
                                        type="text"
                                        label={t('Campaign.Campaign form Phone Number')}
                                        fullWidth
                                        name='phoneNo'
                                        onChange={(e) => {
                                            setPhoneNo(e.target.value);
                                            if (phoneNo.length !== 9) {
                                                setResponseMessage(t("Campaign.Phone number Validation"));
                                                setResponse(true);
                                                setResponseStatus(500);
                                                return;
                                            }
                                        }}
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
                                    <Box className={classes.ModalBox}>
                                        <Button className={classes.ModalButton} style={{ backgroundColor: isLoading ? "#1E396C" : "#37A753", }} disabled={isLoading} onClick={() => SubmitForm()}>
                                            <Typography className={classes.ModalText}>
                                                {isLoading ? (
                                                    <CircularProgress
                                                        size={15}
                                                        color="secondary"
                                                        style={{ color: '#37A753' }} />) : t('Campaign.Submit')}
                                            </Typography>
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </List>
                </Container>
            </Dialog>
                </Container>

        </section>
    );
}
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
    nupcoForm: {
        padding: '0px 200px 50px 200px',
        [theme.breakpoints.down('md')]: {
            padding: '0px 20px 20px 20px',
        }
    },
    formCard: {
        padding: '20px 50px 20px 50px',
        [theme.breakpoints.down('md')]: {
            padding: '20px 25px 20px 25px',
        }
    },
    formContainer: {
        padding: '20px'
    },
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
    Divider: {
        width: 'auto',
        height: '2px',
        background: '#37A753',
        marginLeft: '45%',
        marginRight: '45%',
        marginTop: '10px',
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
    ModalButton: {
        fontWeight: "normal",
        fontSize: "15px",
        color: "#ffffff",
        position: "relative",
        left: "41%",
        paddingLeft: "15px",
        paddingRight: "15px",
        borderRadius: "25px",
        textTransform: "none",
        backgroundColor: "#37A753",
        "&:hover,&:focus": {
            color: "#ffffff",
            backgroundColor: "#37A753",
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "20px",
            paddingRight: "20px",
            color: "#ffffff",
            backgroundColor: "#37A753",
            fontWeight: "normal",
            textTransform: "none",
            borderRadius: "20px",
            fontSize: "15px",
            position: "relative",
            display: "flex",
            left: "37%",
        },
    },
    ModalBox: {
        justifyContent: 'center',
        alignItems: "center"
    }
}));