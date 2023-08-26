import { ExpandMore } from '@mui/icons-material';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Container,
    Divider,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    useMediaQuery, useTheme
} from "@mui/material";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const classes = useStyles();
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box className={classes.TabBox}>
                    <Typography >{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
export default function FAQSection() {
    const { locale } = useRouter();
    const classes = useStyles();
    const { t } = useTranslation('common');
    const theme = useTheme();
    const veryWideScreen = useMediaQuery(theme.breakpoints.up('sm'), {
        noSsr: true,
    });
    const yourRef1 = useRef();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);

    };

    const handleYourScroll1 = () => {
        window.scrollTo({
            top: yourRef1.current.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <section>
            <Container className={classes.container}>
                <Typography variant='h1' className={classes.hometittle}>{t("faq.Faq tittle")}</Typography>
            </Container>
            <Container maxWidth="flase" className={classes.Tabsection} >
                <Box className={classes.verticaltabs}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider' }}>
                        <Tab className={classes.Tab} label={t("faq.Tab 1")} onClick={() => { !veryWideScreen && handleYourScroll1() }} {...a11yProps(0)} />
                        <Tab className={classes.Tab} label={t("faq.Tab 2")} onClick={() => { !veryWideScreen && handleYourScroll1() }} {...a11yProps(1)} />
                        <Tab className={classes.Tab} label={t("faq.Tab 3")} onClick={() => { !veryWideScreen && handleYourScroll1() }} {...a11yProps(2)} />
                        <Tab className={classes.Tab} label={t("faq.Tab 4")} onClick={() => { !veryWideScreen && handleYourScroll1() }} {...a11yProps(3)} />
                        <Tab className={classes.Tab} label={t("faq.Tab 5")} onClick={() => { !veryWideScreen && handleYourScroll1() }} {...a11yProps(4)} />
                        <Tab className={classes.Tab} label={t("faq.Tab 6")} onClick={() => { !veryWideScreen && handleYourScroll1() }} {...a11yProps(5)} />
                        <Tab className={classes.Tab} label={t("faq.Tab 7")} onClick={() => { !veryWideScreen && handleYourScroll1() }} {...a11yProps(6)} />
                        <Tab className={classes.Tab} label={t("faq.Tab 8")} onClick={() => { !veryWideScreen && handleYourScroll1() }} {...a11yProps(7)} />
                        <Tab className={classes.Tab} label={t("faq.Tab 9")} onClick={() => { !veryWideScreen && handleYourScroll1() }} {...a11yProps(8)} />
                    </Tabs>
                    <div ref={yourRef1}>
                        <TabPanel className={classes.TabPanel} value={value} index={0}>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 1 Accordion question1")}</AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 1 Accordion question2")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans2")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 1 Accordion question3")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans3")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 1 Accordion question4")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans4")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 1 Accordion question5")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans5 1")}<a href="mailto:contactus@raqamyah.com">contactus@raqamyah.com.</a>
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans5 2")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans5 2 1")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans5 3")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans5 4")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans5 5")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans5 6")}
                                </AccordionDetails>
                                <span className={classes.ArabicHide}>  <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans5 7")}
                                </AccordionDetails ></span>
                                <span className={classes.ArabicHide}> <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans5 8")}
                                </AccordionDetails></span>


                                <AccordionDetails className={classes.AccordionDetails}>
                                    <a target="blank" className={classes.EnglishHide} href="https://www.sama.gov.sa/ar-sa/consumerprotection/pages/complaint.aspx">https://www.sama.gov.sa/ar-sa/consumerprotection/pages/complaint.aspx</a> <a className={classes.ArabicLinkHide} target="blank" href="http://www.sama.gov.sa/en-us/consumerprotection/pages/complaint.aspx">http://www.sama.gov.sa/en-us/consumerprotection/pages/complaint.aspx</a>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 1 Accordion question6")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans6 1")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans6 2")}
                                </AccordionDetails>
                            </Accordion>

                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 1 Accordion question7")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans7 1")}
                                </AccordionDetails>
                                <ul>
                                    <li>
                                        <AccordionDetails className={classes.AccordionDetails}>
                                            {t("faq.Tab 1 Accordion Ans7 2")}
                                        </AccordionDetails>
                                    </li>
                                    <li>
                                        <AccordionDetails className={classes.AccordionDetails}>
                                            {t("faq.Tab 1 Accordion Ans7 3")}
                                        </AccordionDetails>
                                    </li>
                                </ul>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans7 4")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans7 5")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 1 Accordion question8")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans8 1")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 1 Accordion question9")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans9 1")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 1 Accordion question10")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans10 1")}
                                </AccordionDetails>
                                <ul>
                                    <li>
                                        <AccordionDetails className={classes.AccordionDetails}>
                                            {t("faq.Tab 1 Accordion Ans10 2")}
                                        </AccordionDetails>
                                    </li>
                                    <li>
                                        <AccordionDetails className={classes.AccordionDetails}>
                                            {t("faq.Tab 1 Accordion Ans10 3")}
                                        </AccordionDetails>
                                    </li>
                                    <li>
                                        <AccordionDetails className={classes.AccordionDetails}>
                                            {t("faq.Tab 1 Accordion Ans10 4")}
                                        </AccordionDetails>
                                    </li>
                                    <li>
                                        <AccordionDetails className={classes.AccordionDetails}>
                                            {t("faq.Tab 1 Accordion Ans10 5")}
                                        </AccordionDetails>
                                    </li>
                                </ul>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 1 Accordion question11")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans11 1")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans11 2")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans11 3")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 1 Accordion question12")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans12 1")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans12 2")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 1 Accordion question13")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans13 1")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 1 Accordion question14")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans14 1")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 1 Accordion question15")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    <Typography className={classes.AccordionDetails}>{t("faq.Tab 1 Accordion Ans15 1")}&nbsp;<Link href={`/${locale}/selectionProcess`}>{t("faq.Tab 1 Accordion Ans15 2")}</Link></Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 1 Accordion question16")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans16 1")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 1 Accordion question17")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    <Typography className={classes.AccordionDetails}>{t("faq.Tab 1 Accordion Ans17 1")} &nbsp;<Link href={`/${locale}/recoveryProcess`} >{t("faq.Tab 1 Accordion Ans17 2")}</Link> </Typography>
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans17 3")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 1 Accordion question18")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans18 1")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 1 Accordion question19")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 1 Accordion Ans19 1")}
                                </AccordionDetails>
                            </Accordion>
                        </TabPanel>
                        <TabPanel className={classes.TabPanel} value={value} index={1}>
                            <Accordion className={classes.Accordion} >
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 2 Accordion question1")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 2 Accordion Ans1")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 2 Accordion question2")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 2 Accordion Ans2")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 2 Accordion question3")}
                                </AccordionSummary>
                                <Divider />

                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 2 Accordion Ans3")}
                                </AccordionDetails>
                                <ul>
                                    <li>
                                        <AccordionDetails className={classes.AccordionDetails}>
                                            {t("faq.Tab 2 Accordion Ans3 1")}
                                        </AccordionDetails>
                                        <ul>
                                            <li>
                                                <AccordionDetails className={classes.AccordionDetails}>
                                                    {t("faq.Tab 2 Accordion Ans3 2")}
                                                </AccordionDetails>
                                            </li>
                                            <li>
                                                <AccordionDetails className={classes.AccordionDetails}>
                                                    {t("faq.Tab 2 Accordion Ans3 3")}
                                                </AccordionDetails>
                                            </li>
                                            <li>
                                                <AccordionDetails className={classes.AccordionDetails}>
                                                    {t("faq.Tab 2 Accordion Ans3 4")}
                                                </AccordionDetails>
                                            </li>
                                        </ul>
                                    </li>
                                    <AccordionDetails className={classes.AccordionDetails}>
                                        {t("faq.Tab 2 Accordion Ans3 5")}
                                    </AccordionDetails>
                                    <AccordionDetails className={classes.AccordionDetails}>
                                        {t("faq.Tab 2 Accordion Ans3 6")}
                                    </AccordionDetails>
                                </ul>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 2 Accordion question4")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 2 Accordion Ans4")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 2 Accordion question5")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 2 Accordion Ans5 1")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    <Typography className={classes.AccordionDetails}>{t("faq.Tab 2 Accordion Ans5 2")}&nbsp;<Link href={`/${locale}/selectionProcess`} >{t("faq.Tab 2 Accordion Ans5 3")}</Link></Typography>

                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 2 Accordion question6")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 2 Accordion Ans6 1")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 2 Accordion Ans6 2")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 2 Accordion Ans6 3")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    <TableContainer className={classes.table}>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell className={classes.th}>{t("faq.Tab 2 Accordion table6 tittle1")}</TableCell>
                                                    <TableCell className={classes.th}>{t("faq.Tab 2 Accordion table6 tittle2")}</TableCell>
                                                    <TableCell className={classes.th}>{t("faq.Tab 2 Accordion table6 tittle3")}</TableCell>
                                                    <TableCell className={classes.th}>{t("faq.Tab 2 Accordion table6 tittle4")}</TableCell>
                                                    <TableCell className={classes.th}>{t("faq.Tab 2 Accordion table6 tittle5")}</TableCell>
                                                    <TableCell className={classes.th}>{t("faq.Tab 2 Accordion table6 tittle6")}</TableCell>
                                                    <TableCell className={classes.th}>{t("faq.Tab 2 Accordion table6 tittle7")}</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className={classes.td}>0</TableCell>
                                                    <TableCell className={classes.td}>10000</TableCell>
                                                    <TableCell className={classes.td}></TableCell>
                                                    <TableCell className={classes.td}></TableCell>
                                                    <TableCell className={classes.td}></TableCell>
                                                    <TableCell className={classes.td}>	</TableCell>
                                                    <TableCell className={classes.td}></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>1</TableCell>
                                                    <TableCell className={classes.td}>9583</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>83</TableCell>
                                                    <TableCell className={classes.td}>17</TableCell>
                                                    <TableCell className={classes.td}>	2.6</TableCell>
                                                    <TableCell className={classes.td}>480.5</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>	2</TableCell>
                                                    <TableCell className={classes.td}>	9167</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>80</TableCell>
                                                    <TableCell className={classes.td}>16</TableCell>
                                                    <TableCell className={classes.td}>	2.4</TableCell>
                                                    <TableCell className={classes.td}>478.6</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>	3</TableCell>
                                                    <TableCell className={classes.td}>8750</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>76</TableCell>
                                                    <TableCell className={classes.td}>15</TableCell>
                                                    <TableCell className={classes.td}>2.3</TableCell>
                                                    <TableCell className={classes.td}>475.8</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>4</TableCell>
                                                    <TableCell className={classes.td}>8333</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>73</TableCell>
                                                    <TableCell className={classes.td}>14</TableCell>
                                                    <TableCell className={classes.td}>2.1</TableCell>
                                                    <TableCell className={classes.td}>473.9</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>5</TableCell>
                                                    <TableCell className={classes.td}>7917</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>69</TableCell>
                                                    <TableCell className={classes.td}>14</TableCell>
                                                    <TableCell className={classes.td}>2.1</TableCell>
                                                    <TableCell className={classes.td}>469.9</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>6</TableCell>
                                                    <TableCell className={classes.td}>7500</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>66</TableCell>
                                                    <TableCell className={classes.td}>13</TableCell>
                                                    <TableCell className={classes.td}>2.0</TableCell>
                                                    <TableCell className={classes.td}>468.1</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>7</TableCell>
                                                    <TableCell className={classes.td}>7083</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>62</TableCell>
                                                    <TableCell className={classes.td}>12</TableCell>
                                                    <TableCell className={classes.td}>1.8</TableCell>
                                                    <TableCell className={classes.td}>465.2</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>8</TableCell>
                                                    <TableCell className={classes.td}>6667</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>59</TableCell>
                                                    <TableCell className={classes.td}>12</TableCell>
                                                    <TableCell className={classes.td}>1.8</TableCell>
                                                    <TableCell className={classes.td}>462.2</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>9</TableCell>
                                                    <TableCell className={classes.td}>6250</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>55</TableCell>
                                                    <TableCell className={classes.td}>11</TableCell>
                                                    <TableCell className={classes.td}>1.7</TableCell>
                                                    <TableCell className={classes.td}>459.4</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>10</TableCell>
                                                    <TableCell className={classes.td}>5833</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>52</TableCell>
                                                    <TableCell className={classes.td}>10</TableCell>
                                                    <TableCell className={classes.td}>1.5</TableCell>
                                                    <TableCell className={classes.td}>457.5</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>11</TableCell>
                                                    <TableCell className={classes.td}>5417</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>49</TableCell>
                                                    <TableCell className={classes.td}>10</TableCell>
                                                    <TableCell className={classes.td}>1.5</TableCell>
                                                    <TableCell className={classes.td}>454.5</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>12</TableCell>
                                                    <TableCell className={classes.td}>5000</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>45</TableCell>
                                                    <TableCell className={classes.td}>9</TableCell>
                                                    <TableCell className={classes.td}>1.4</TableCell>
                                                    <TableCell className={classes.td}>451.7</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>13</TableCell>
                                                    <TableCell className={classes.td}>4583</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>42</TableCell>
                                                    <TableCell className={classes.td}>8</TableCell>
                                                    <TableCell className={classes.td}>1.2</TableCell>
                                                    <TableCell className={classes.td}>449.8</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>14</TableCell>
                                                    <TableCell className={classes.td}>4167</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>38</TableCell>
                                                    <TableCell className={classes.td}>8</TableCell>
                                                    <TableCell className={classes.td}>1.2</TableCell>
                                                    <TableCell className={classes.td}>445.8</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>15</TableCell>
                                                    <TableCell className={classes.td}>3750</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>35</TableCell>
                                                    <TableCell className={classes.td}>7</TableCell>
                                                    <TableCell className={classes.td}>1.1</TableCell>
                                                    <TableCell className={classes.td}>444.0</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>16</TableCell>
                                                    <TableCell className={classes.td}>3333</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>31</TableCell>
                                                    <TableCell className={classes.td}>6</TableCell>
                                                    <TableCell className={classes.td}>0.9</TableCell>
                                                    <TableCell className={classes.td}>441.1</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>17</TableCell>
                                                    <TableCell className={classes.td}>2917</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>28</TableCell>
                                                    <TableCell className={classes.td}>5</TableCell>
                                                    <TableCell className={classes.td}>0.8</TableCell>
                                                    <TableCell className={classes.td}>439.3</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>18</TableCell>
                                                    <TableCell className={classes.td}>2500</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>24</TableCell>
                                                    <TableCell className={classes.td}>5</TableCell>
                                                    <TableCell className={classes.td}>0.8</TableCell>
                                                    <TableCell className={classes.td}>435.3</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>19</TableCell>
                                                    <TableCell className={classes.td}>2083</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>21</TableCell>
                                                    <TableCell className={classes.td}>4</TableCell>
                                                    <TableCell className={classes.td}>0.6</TableCell>
                                                    <TableCell className={classes.td}>433.4</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>20</TableCell>
                                                    <TableCell className={classes.td}>1667</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>17</TableCell>
                                                    <TableCell className={classes.td}>3</TableCell>
                                                    <TableCell className={classes.td}>0.5</TableCell>
                                                    <TableCell className={classes.td}>430.6</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>21</TableCell>
                                                    <TableCell className={classes.td}>1250</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>14</TableCell>
                                                    <TableCell className={classes.td}>3</TableCell>
                                                    <TableCell className={classes.td}>0.5</TableCell>
                                                    <TableCell className={classes.td}>427.6</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>22</TableCell>
                                                    <TableCell className={classes.td}>833</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>10</TableCell>
                                                    <TableCell className={classes.td}>2</TableCell>
                                                    <TableCell className={classes.td}>0.3</TableCell>
                                                    <TableCell className={classes.td}>424.7</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>23</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>7</TableCell>
                                                    <TableCell className={classes.td}>1</TableCell>
                                                    <TableCell className={classes.td}>0.2</TableCell>
                                                    <TableCell className={classes.td}>422.9</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>24</TableCell>
                                                    <TableCell className={classes.td}>-</TableCell>
                                                    <TableCell className={classes.td}>417</TableCell>
                                                    <TableCell className={classes.td}>3</TableCell>
                                                    <TableCell className={classes.td}>1</TableCell>
                                                    <TableCell className={classes.td}>0.2</TableCell>
                                                    <TableCell className={classes.td}>418.9</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>{t("faq.Tab 2 Accordion table6 tittle8")}</TableCell>
                                                    <TableCell className={classes.td}></TableCell>
                                                    <TableCell className={classes.td}>10,000</TableCell>
                                                    <TableCell className={classes.td}>1,039</TableCell>
                                                    <TableCell className={classes.td}>208</TableCell>
                                                    <TableCell className={classes.td}>30.9</TableCell>
                                                    <TableCell className={classes.td}>11,277.9</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 2 Accordion question7")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 2 Accordion Ans7 1")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 2 Accordion Ans7 2")}
                                </AccordionDetails>
                            </Accordion>
                        </TabPanel>
                        <TabPanel className={classes.TabPanel} value={value} index={2}>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 3 Accordion question1")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 3 Accordion Ans1")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 3 Accordion question2")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 3 Accordion Ans2")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 3 Accordion question3")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 3 Accordion Ans3")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 3 Accordion question4")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 3 Accordion Ans4")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 3 Accordion question5")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 3 Accordion Ans5 1")}
                                </AccordionDetails>
                                <ul>
                                    <AccordionDetails className={classes.AccordionDetails}>
                                        {t("faq.Tab 3 Accordion Ans5 2")}
                                    </AccordionDetails>
                                    <AccordionDetails className={classes.AccordionDetails}>
                                        {t("faq.Tab 3 Accordion Ans5 3")}
                                    </AccordionDetails>
                                    <AccordionDetails className={classes.AccordionDetails}>
                                        {t("faq.Tab 3 Accordion Ans5 4")}
                                    </AccordionDetails>
                                </ul>

                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 3 Accordion question6")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 3 Accordion Ans6")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 3 Accordion question7")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 3 Accordion Ans7")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 3 Accordion question8")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 3 Accordion Ans8")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 3 Accordion question9")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 3 Accordion Ans9")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 3 Accordion question10")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 3 Accordion Ans10")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 3 Accordion question11")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 3 Accordion Ans11")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 3 Accordion question12")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 3 Accordion Ans12")}
                                </AccordionDetails>
                            </Accordion>
                        </TabPanel>
                        <TabPanel className={classes.TabPanel} value={value} index={3}>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 4 Accordion question1")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 4 Accordion Ans1")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 4 Accordion question2")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 4 Accordion Ans2")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 4 Accordion question3")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 4 Accordion Ans3")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 4 Accordion question4")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 4 Accordion Ans4")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 4 Accordion question5")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 4 Accordion Ans5 1")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 4 Accordion Ans5 2")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 4 Accordion Ans5 3")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 4 Accordion Ans5 4")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 4 Accordion question6")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 4 Accordion Ans6")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 4 Accordion question7")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 4 Accordion Ans7")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 4 Accordion question8")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 4 Accordion Ans8")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 4 Accordion question9")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 4 Accordion Ans9")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 4 Accordion question10")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 4 Accordion Ans10")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 4 Accordion question11")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 4 Accordion Ans11")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 4 Accordion question12")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 4 Accordion Ans12")}
                                </AccordionDetails>
                            </Accordion>
                        </TabPanel>
                        <TabPanel className={classes.TabPanel} value={value} index={4}>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 5 Accordion question1")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 5 Accordion Ans1")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 5 Accordion Ans1 2")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 5 Accordion question2")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 5 Accordion Ans2")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 5 Accordion question3")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 5 Accordion Ans3 1")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 5 Accordion Ans3 2")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    <TableContainer className={classes.table}>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell className={classes.th}>{t("faq.Tab 5 Accordion table3 tittle1")}</TableCell>
                                                    <TableCell className={classes.th}>{t("faq.Tab 5 Accordion table3 tittle2")}</TableCell>
                                                    <TableCell className={classes.th}>{t("faq.Tab 5 Accordion table3 tittle3")}</TableCell>
                                                    <TableCell className={classes.th}>{t("faq.Tab 5 Accordion table3 tittle4")}</TableCell>
                                                    <TableCell className={classes.th}>{t("faq.Tab 5 Accordion table3 tittle5")}</TableCell>
                                                    <TableCell className={classes.th}>{t("faq.Tab 5 Accordion table3 tittle6")}</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className={classes.td}>1</TableCell>
                                                    <TableCell className={classes.td}>414.0</TableCell>
                                                    <TableCell className={classes.td}>116.7</TableCell>
                                                    <TableCell className={classes.td}>16.7</TableCell>
                                                    <TableCell className={classes.td}>2.5</TableCell>
                                                    <TableCell className={classes.td}>511.5</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>2</TableCell>
                                                    <TableCell className={classes.td}>503.0</TableCell>
                                                    <TableCell className={classes.td}>111.8</TableCell>
                                                    <TableCell className={classes.td}>16.0</TableCell>
                                                    <TableCell className={classes.td}>2.4</TableCell>
                                                    <TableCell className={classes.td}>596.5</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>3</TableCell>
                                                    <TableCell className={classes.td}>320.0</TableCell>
                                                    <TableCell className={classes.td}>106.0</TableCell>
                                                    <TableCell className={classes.td}>15.1</TableCell>
                                                    <TableCell className={classes.td}>2.3</TableCell>
                                                    <TableCell className={classes.td}>408.6</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>4</TableCell>
                                                    <TableCell className={classes.td}>485.0</TableCell>
                                                    <TableCell className={classes.td}>102.2</TableCell>
                                                    <TableCell className={classes.td}>14.6</TableCell>
                                                    <TableCell className={classes.td}>2.2</TableCell>
                                                    <TableCell className={classes.td}>570.4</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>5</TableCell>
                                                    <TableCell className={classes.td}>569.0</TableCell>
                                                    <TableCell className={classes.td}>96.6</TableCell>
                                                    <TableCell className={classes.td}>13.8</TableCell>
                                                    <TableCell className={classes.td}>2.1</TableCell>
                                                    <TableCell className={classes.td}>649.7</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>6</TableCell>
                                                    <TableCell className={classes.td}>444.0</TableCell>
                                                    <TableCell className={classes.td}>89.9</TableCell>
                                                    <TableCell className={classes.td}>12.8</TableCell>
                                                    <TableCell className={classes.td}>1.9</TableCell>
                                                    <TableCell className={classes.td}>519.2</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>7</TableCell>
                                                    <TableCell className={classes.td}>519.0</TableCell>
                                                    <TableCell className={classes.td}>84.8</TableCell>
                                                    <TableCell className={classes.td}>12.1</TableCell>
                                                    <TableCell className={classes.td}>1.8</TableCell>
                                                    <TableCell className={classes.td}>589.8</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>8</TableCell>
                                                    <TableCell className={classes.td}>480.0</TableCell>
                                                    <TableCell className={classes.td}>78.7</TableCell>
                                                    <TableCell className={classes.td}>11.2</TableCell>
                                                    <TableCell className={classes.td}>1.7</TableCell>
                                                    <TableCell className={classes.td}>545.8</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>9</TableCell>
                                                    <TableCell className={classes.td}>419.0</TableCell>
                                                    <TableCell className={classes.td}>73.1</TableCell>
                                                    <TableCell className={classes.td}>10.4</TableCell>
                                                    <TableCell className={classes.td}>1.6</TableCell>
                                                    <TableCell className={classes.td}>480.1</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>10</TableCell>
                                                    <TableCell className={classes.td}>452.0</TableCell>
                                                    <TableCell className={classes.td}>68.2</TableCell>
                                                    <TableCell className={classes.td}>9.7</TableCell>
                                                    <TableCell className={classes.td}>1.5</TableCell>
                                                    <TableCell className={classes.td}>509.0</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>11</TableCell>
                                                    <TableCell className={classes.td}>385.0</TableCell>
                                                    <TableCell className={classes.td}>62.9</TableCell>
                                                    <TableCell className={classes.td}>9.0</TableCell>
                                                    <TableCell className={classes.td}>1.3</TableCell>
                                                    <TableCell className={classes.td}>437.6</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>12</TableCell>
                                                    <TableCell className={classes.td}>594.0</TableCell>
                                                    <TableCell className={classes.td}>58.5</TableCell>
                                                    <TableCell className={classes.td}>8.4</TableCell>
                                                    <TableCell className={classes.td}>1.3</TableCell>
                                                    <TableCell className={classes.td}>642.8</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>13</TableCell>
                                                    <TableCell className={classes.td}>439.0</TableCell>
                                                    <TableCell className={classes.td}>51.5</TableCell>
                                                    <TableCell className={classes.td}>7.4</TableCell>
                                                    <TableCell className={classes.td}>1.1</TableCell>
                                                    <TableCell className={classes.td}>482.1</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>14</TableCell>
                                                    <TableCell className={classes.td}>488.0</TableCell>
                                                    <TableCell className={classes.td}>46.4</TableCell>
                                                    <TableCell className={classes.td}>6.6</TableCell>
                                                    <TableCell className={classes.td}>1.0</TableCell>
                                                    <TableCell className={classes.td}>526.8</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>15</TableCell>
                                                    <TableCell className={classes.td}>543.0</TableCell>
                                                    <TableCell className={classes.td}>40.7</TableCell>
                                                    <TableCell className={classes.td}>5.8</TableCell>
                                                    <TableCell className={classes.td}>0.9</TableCell>
                                                    <TableCell className={classes.td}>577.0</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>16</TableCell>
                                                    <TableCell className={classes.td}>450.0</TableCell>
                                                    <TableCell className={classes.td}>34.4</TableCell>
                                                    <TableCell className={classes.td}>4.9</TableCell>
                                                    <TableCell className={classes.td}>0.7</TableCell>
                                                    <TableCell className={classes.td}>478.7</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>17</TableCell>
                                                    <TableCell className={classes.td}>506.0</TableCell>
                                                    <TableCell className={classes.td}>29.1</TableCell>
                                                    <TableCell className={classes.td}>4.2</TableCell>
                                                    <TableCell className={classes.td}>0.6</TableCell>
                                                    <TableCell className={classes.td}>530.3</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>18</TableCell>
                                                    <TableCell className={classes.td}>560.0</TableCell>
                                                    <TableCell className={classes.td}>23.2</TableCell>
                                                    <TableCell className={classes.td}>3.3</TableCell>
                                                    <TableCell className={classes.td}>0.5</TableCell>
                                                    <TableCell className={classes.td}>579.4</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>19</TableCell>
                                                    <TableCell className={classes.td}>495.0</TableCell>
                                                    <TableCell className={classes.td}>16.7</TableCell>
                                                    <TableCell className={classes.td}>2.4</TableCell>
                                                    <TableCell className={classes.td}>0.4</TableCell>
                                                    <TableCell className={classes.td}>508.9</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>20</TableCell>
                                                    <TableCell className={classes.td}>531.0</TableCell>
                                                    <TableCell className={classes.td}>10.9</TableCell>
                                                    <TableCell className={classes.td}>1.6</TableCell>
                                                    <TableCell className={classes.td}>0.2</TableCell>
                                                    <TableCell className={classes.td}>540.1</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>21</TableCell>
                                                    <TableCell className={classes.td}>404.0</TableCell>
                                                    <TableCell className={classes.td}>4.7</TableCell>
                                                    <TableCell className={classes.td}>0.7</TableCell>
                                                    <TableCell className={classes.td}>0.1</TableCell>
                                                    <TableCell className={classes.td}>407.9</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.td}>{t("faq.Tab 5 Accordion table3 tittle7")}</TableCell>
                                                    <TableCell className={classes.td}>10,000.0</TableCell>
                                                    <TableCell className={classes.td}>1,307.0</TableCell>
                                                    <TableCell className={classes.td}>186.7</TableCell>
                                                    <TableCell className={classes.td}>28.0</TableCell>
                                                    <TableCell className={classes.td}>11,092.3</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 5 Accordion Ans3 3")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 5 Accordion question4")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 5 Accordion Ans4")}
                                </AccordionDetails>
                            </Accordion>
                        </TabPanel>
                        <TabPanel className={classes.TabPanel} value={value} index={5}>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 6 Accordion question1")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 6 Accordion Ans1")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 6 Accordion question2")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 6 Accordion Ans2")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 6 Accordion question3")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 6 Accordion Ans3 1")}
                                </AccordionDetails>
                                <ul>
                                    <li>
                                        <AccordionDetails className={classes.AccordionDetails}>
                                            {t("faq.Tab 6 Accordion Ans3 2")}
                                        </AccordionDetails>
                                    </li>
                                    <li>
                                        <AccordionDetails className={classes.AccordionDetails}>
                                            {t("faq.Tab 6 Accordion Ans3 3")}
                                        </AccordionDetails>
                                    </li>
                                    <li>
                                        <AccordionDetails className={classes.AccordionDetails}>
                                            {t("faq.Tab 6 Accordion Ans3 4")}
                                        </AccordionDetails>
                                    </li>
                                </ul>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 6 Accordion Ans3 5")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 6 Accordion question4")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 6 Accordion Ans4")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 6 Accordion question5")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 6 Accordion Ans5")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 6 Accordion question6")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 6 Accordion Ans6")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 6 Accordion question7")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 6 Accordion Ans7")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 6 Accordion question8")}
                                </AccordionSummary>
                                <Divider />
                                <ul>
                                    <li>
                                        <AccordionDetails className={classes.AccordionDetails}>
                                            {t("faq.Tab 6 Accordion Ans8 1")}
                                        </AccordionDetails>
                                    </li>
                                    <li>
                                        <AccordionDetails className={classes.AccordionDetails}>
                                            {t("faq.Tab 6 Accordion Ans8 2")}
                                        </AccordionDetails>
                                    </li>
                                    <li>
                                        <AccordionDetails className={classes.AccordionDetails}>
                                            {t("faq.Tab 6 Accordion Ans8 3")}
                                        </AccordionDetails>
                                    </li>
                                </ul>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 6 Accordion question9")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 6 Accordion Ans9")}
                                </AccordionDetails>
                            </Accordion>
                        </TabPanel>
                        <TabPanel className={classes.TabPanel} value={value} index={6}>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 7 Accordion question1")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 7 Accordion Ans1")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 7 Accordion question2")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 7 Accordion Ans2")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 7 Accordion question3")}
                                </AccordionSummary>
                                <Divider />
                                <ul>
                                    <li><AccordionDetails className={classes.AccordionDetails}>
                                        {t("faq.Tab 7 Accordion Ans3 1")}
                                    </AccordionDetails></li>
                                    <li><AccordionDetails className={classes.AccordionDetails}>
                                        {t("faq.Tab 7 Accordion Ans3 2")}
                                    </AccordionDetails></li>
                                    <li><AccordionDetails className={classes.AccordionDetails}>
                                        {t("faq.Tab 7 Accordion Ans3 3")}
                                    </AccordionDetails></li>
                                </ul>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 7 Accordion question4")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 7 Accordion Ans4")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 7 Accordion question5")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 7 Accordion Ans5")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 7 Accordion question6")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 7 Accordion Ans6 1")}
                                </AccordionDetails>
                                <ul>
                                    <li>
                                        <AccordionDetails className={classes.AccordionDetails}>
                                            <strong>{t("faq.Tab 7 Accordion Ans6 2")}</strong>{t("faq.Tab 7 Accordion Ans6 3")}
                                        </AccordionDetails>
                                    </li>
                                    <li>
                                        <AccordionDetails className={classes.AccordionDetails}>
                                            <strong>{t("faq.Tab 7 Accordion Ans6 4")}</strong>{t("faq.Tab 7 Accordion Ans6 5")}
                                        </AccordionDetails>
                                    </li>
                                </ul>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 7 Accordion question7")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 7 Accordion Ans7")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 7 Accordion question8")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 7 Accordion Ans8")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 7 Accordion question9")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 7 Accordion Ans9")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 7 Accordion question10")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 7 Accordion Ans10")}
                                </AccordionDetails>
                            </Accordion>
                        </TabPanel>
                        <TabPanel className={classes.TabPanel} value={value} index={7}>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 8 Accordion question1")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 8 Accordion Ans1")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 8 Accordion question2")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 8 Accordion Ans2")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 8 Accordion question3")}
                                </AccordionSummary>
                                <Divider />
                                <ul>
                                    <li>
                                        <AccordionDetails className={classes.AccordionDetails}>
                                            {t("faq.Tab 8 Accordion Ans3 1")}
                                        </AccordionDetails>
                                    </li>
                                    <li>
                                        <AccordionDetails className={classes.AccordionDetails}>
                                            {t("faq.Tab 8 Accordion Ans3 2")}
                                        </AccordionDetails>
                                    </li>
                                    <li>
                                        <AccordionDetails className={classes.AccordionDetails}>
                                            {t("faq.Tab 8 Accordion Ans3 3")}
                                        </AccordionDetails>
                                    </li>
                                </ul>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 8 Accordion question4")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 8 Accordion Ans4")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 8 Accordion question5")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 8 Accordion Ans5")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 8 Accordion question6")}
                                </AccordionSummary>
                                <Divider />
                                <ul>
                                    <li>
                                        <AccordionDetails className={classes.AccordionDetails}>
                                            {t("faq.Tab 8 Accordion Ans6 1")}
                                        </AccordionDetails>
                                    </li>
                                    <li>
                                        <AccordionDetails className={classes.AccordionDetails}>
                                            {t("faq.Tab 8 Accordion Ans6 2")}
                                        </AccordionDetails>
                                    </li>
                                    <li>
                                        <AccordionDetails className={classes.AccordionDetails}>
                                            {t("faq.Tab 8 Accordion Ans6 3")}
                                        </AccordionDetails>
                                    </li>
                                </ul>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 8 Accordion Ans6 4")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 8 Accordion question7")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 8 Accordion Ans7")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 8 Accordion question8")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 8 Accordion Ans8")}
                                </AccordionDetails>
                            </Accordion>
                        </TabPanel>
                        <TabPanel className={classes.TabPanel} value={value} index={8}>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 9 Accordion question1")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 9 Accordion Ans1")}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 9 Accordion question2")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 9 Accordion Ans2 1")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    <Typography className={classes.AccordionDetails}>{t("faq.Tab 9 Accordion Ans2 2")}&nbsp;<a rel="noreferrer" target="_blank" href="https://www.shariyah.com">https://www.shariyah.com</a></Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary className={classes.AccordionSummary} expandIcon={<ExpandMore />}>
                                    {t("faq.Tab 9 Accordion question1")}
                                </AccordionSummary>
                                <Divider />
                                <AccordionDetails className={classes.AccordionDetails}>
                                    {t("faq.Tab 9 Accordion Ans3 1")}
                                </AccordionDetails>
                                <AccordionDetails className={classes.AccordionDetails}>
                                    <Typography className={classes.AccordionDetails}> {t("faq.Tab 9 Accordion Ans3 2")}&nbsp;<a rel="noreferrer" target="_blank" href="https://www.ddcap.com/who-we-are/">https://www.ddcap.com/who-we-are</a></Typography>
                                </AccordionDetails>
                            </Accordion>
                        </TabPanel>
                    </div>

                </Box>

            </Container>


        </section>
    );
}

const useStyles = makeStyles((theme, local) => ({
    container:{
        paddingTop: '0px',
        paddingBottom: '0px',
        [theme.breakpoints.down("sm")]: {
            paddingTop: '10px',
            paddingBottom: '20px',
        }
    },
    Tabsection:{
        paddingTop: '50px',
        paddingBottom: '0px',
    },
    hometittle: {
        fontWeight: "bold",
        fontSize: "30px",
        color: "#1E396C",
        paddingBottom: "10px",
        textAlign: 'center',
        [theme.breakpoints.down("sm")]: {
            fontWeight: "bold",
            fontSize: "25px",
            color: "#1E396C",
            paddingBottom: "5px",
            textAlign: 'center',
        },
    },

    verticaltabs: {
        flexGrow: 1,
        display: 'flex',
        height: "100%",
        minWidth: 'max-content',
        justifyContent:'center',
        margin: "10px",
        borderRadius: "5px",
        [theme.breakpoints.down("sm")]: {
            display: "block",
            minWidth: 'inherit',
        },
    },
    TabPanel: {
        [theme.breakpoints.up("xl")]: {
            width: '1200px',
        },
        [theme.breakpoints.down("xl")]: {
            width: '800px',
        },
        [theme.breakpoints.down("lg")]: {
            width: '700px',
        },
        [theme.breakpoints.down("md")]: {
            width: '400px',
        },
        [theme.breakpoints.between("sm", "md")]: {
            width: '400px',
        },
        [theme.breakpoints.down("sm")]: {
            width: '350px',
        },
    },
    Tab: {
        backgroundColor: '#39B064 !important',
        marginTop: '5px',
        marginBottom: '5px',
        borderRadius: '5px',
        fontSize: '16px',
        color: '#000',
        textTransform: 'capitalize',
        "&:selected": {
            color: "#35A052",
            background: "#ffff",
            pointerEvent: "all",
            border: '1px solid #35A052',
        },
    },
    TabBox: {
        paddingLeft: '24px',
        paddingRight: '24px',
        [theme.breakpoints.down("sm")]: {
            padding: '0px',
        },
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
    th: {
        fontSize: "15px",
        color: "#1E396C",
        fontWeight: "bold",
    },
    td: {
        fontSize: "15px",
        color: "#1E396C",
    },
    ArabicHide: {
        display: local === "ar" ? "none" : "initial",
    }, EnglishHide: {
        display: local === "ar" ? "initial" : "none",
    },
    ArabicLinkHide: {
        display: local === "ar" ? "none" : "initial",
    }
}));
