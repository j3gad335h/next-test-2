import React from 'react';
import { Container, Divider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { useTranslation } from "next-i18next";

export default function FinancerTermsConditionsSection() {
    const classes = useStyles();
    const { t } = useTranslation('common');

    return (
        <div className={classes.home}>
            <Container >
                <div className={classes.pragraphsection}>
                    <h1 className={classes.hometittle}>
                        {t("financerTerm.Financers Terms conditions tittle")}
                    </h1>
                    <Typography className={classes.Introduction}>
                        {t("financerTerm.Financers Terms conditions sub tittle1")}
                    </Typography>
                </div>
                <Typography className={classes.Introduction}>
                    {t("financerTerm.Financers Terms conditions sub tittle2")}
                </Typography>
                <Typography className={classes.discription}>
                    {t("financerTerm.Financers Terms conditions discription1")}
                </Typography>
                <Typography className={classes.discription}>
                    {t("financerTerm.Financers Terms conditions discription2")}
                </Typography>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>
                    {t("financerTerm.Financers Terms conditions sub tittle3")}
                </Typography>
                <Typography className={classes.discription}>
                    {t("financerTerm.Financers Terms conditions discription4")}
                    <strong>
                        &nbsp;{t("financerTerm.Financers Terms conditions discription4.1")}
                    </strong>
                    &nbsp;{t("financerTerm.Financers Terms conditions discription4.2")}
                    <strong>
                        &nbsp;{t("financerTerm.Financers Terms conditions discription4.3")}
                    </strong>
                    &nbsp;{t("financerTerm.Financers Terms conditions discription4.4")}
                    <strong>
                        &nbsp;{t("financerTerm.Financers Terms conditions discription4.5")}
                    </strong>
                    &nbsp;{t("financerTerm.Financers Terms conditions discription4.6")}
                </Typography>
                <Typography className={classes.discription}>
                    {t("financerTerm.Financers Terms conditions discription5")}
                    <strong>
                        &nbsp;{t("financerTerm.Financers Terms conditions discription5.1")}
                    </strong>
                    &nbsp;{t("financerTerm.Financers Terms conditions discription5.2")}
                </Typography>
                <Typography className={classes.discription}>
                    {t("financerTerm.Financers Terms conditions discription6")}
                </Typography>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>
                    {t("financerTerm.Financers Terms conditions sub tittle4")}
                </Typography>
                <ul style={{ margin: "0px" }}>
                    <ul style={{ margin: "0px" }}>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription7")}
                        </Typography>
                        <ul style={{ margin: "0px" }}>
                            <Typography className={classes.discription}>
                                {t("financerTerm.Financers Terms conditions discription8")}
                            </Typography>
                            <ul style={{ margin: "0px" }}>
                                <li>
                                    <Typography className={classes.discription}>
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription9")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription9.1")}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography className={classes.discription}>
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription10")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription10.1")}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography className={classes.discription}>
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription11")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription11.1")}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography className={classes.discription}>
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription12")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription12.1")}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography className={classes.discription}>
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription13")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription13.1")}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography className={classes.discription}>
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription14")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription14.1")}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography className={classes.discription}>
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription15")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription15.1")}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography className={classes.discription}>
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription16")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription16.1")}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography className={classes.discription}>
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription17")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription17.1")}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography className={classes.discription}>
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription18")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription18.1")}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography className={classes.discription}>
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription19")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription19.1")}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography className={classes.discription}>
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription20")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription20.1")}
                                        &nbsp;
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription20.2")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription20.3")}
                                        &nbsp;
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription20.4")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription20.5")}
                                        &nbsp;
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription20.6")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription20.7")}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography className={classes.discription}>
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription21")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription21.1")}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography className={classes.discription}>
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription22")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription22.1")}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography className={classes.discription}>
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription23")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription23.1")}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography className={classes.discription}>
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription24")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription24.1")}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography className={classes.discription}>
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription25")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription25.1")}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography className={classes.discription}>
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription26")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription26.1")}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography className={classes.discription}>
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription27")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription27.1")}
                                    </Typography>
                                </li>
                                <li>
                                    <Typography className={classes.discription}>
                                        <strong>
                                            {t("financerTerm.Financers Terms conditions discription28")}
                                        </strong>
                                        &nbsp;{t("financerTerm.Financers Terms conditions discription28.1")}
                                        &nbsp;
                                        <a href="https://www.raqamyah.com/">www.raqamyah.com</a>
                                    </Typography>
                                </li>
                            </ul>
                        </ul>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription29")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription30")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription31")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription32")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription33")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription34")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription35")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription36")}
                        </Typography>
                    </ul>
                </ul>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>
                    {t("financerTerm.Financers Terms conditions sub tittle5")}
                </Typography>
                <ul style={{ margin: "0px" }}>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription37")}
                    </Typography>
                </ul>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>
                    {t("financerTerm.Financers Terms conditions sub tittle6")}
                </Typography>
                <ul style={{ margin: "0px" }}>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription38")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription39")}
                    </Typography>
                    <ul style={{ margin: "0px" }}>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription40 1")}
                        </Typography>
                        <ul style={{ margin: "0px" }}>
                            <Typography className={classes.discription}>
                                {t("financerTerm.Financers Terms conditions discription41 11")}
                            </Typography>
                            <Typography className={classes.discription}>
                                {t("financerTerm.Financers Terms conditions discription42 12")}
                            </Typography>
                            <Typography className={classes.discription}>
                                {t("financerTerm.Financers Terms conditions discription43 13")}
                            </Typography>
                            <Typography className={classes.discription}>
                                {t("financerTerm.Financers Terms conditions discription44 14")}
                            </Typography>
                            <Typography className={classes.discription}>
                                {t("financerTerm.Financers Terms conditions discription45 15")}
                            </Typography>
                        </ul>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription46 2")}
                        </Typography>
                        <ul style={{ margin: "0px" }}>
                            <Typography className={classes.discription}>
                                {t("financerTerm.Financers Terms conditions discription47 21")}
                            </Typography>
                            <Typography className={classes.discription}>
                                {t("financerTerm.Financers Terms conditions discription48 22")}
                            </Typography>
                            <Typography className={classes.discription}>
                                {t("financerTerm.Financers Terms conditions discription49 23")}
                            </Typography>
                            <Typography className={classes.discription}>
                                {t("financerTerm.Financers Terms conditions discription50 24")}
                            </Typography>
                            <ul style={{ margin: "0px" }}>
                                <Typography className={classes.discription}>
                                    {t("financerTerm.Financers Terms conditions discription51 24 1")}
                                </Typography>
                                <Typography className={classes.discription}>
                                    {t("financerTerm.Financers Terms conditions discription52 24 2")}
                                </Typography>
                                <Typography className={classes.discription}>
                                    {t("financerTerm.Financers Terms conditions discription53 24 3")}
                                </Typography>
                                <Typography className={classes.discription}>
                                    {t("financerTerm.Financers Terms conditions discription54 24 4")}
                                </Typography>
                            </ul>
                        </ul>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription55 3")}
                        </Typography>
                        <ul style={{ margin: "0px" }}>
                            <Typography className={classes.discription}>
                                {t("financerTerm.Financers Terms conditions discription56 31")}
                            </Typography>
                            <Typography className={classes.discription}>
                                {t("financerTerm.Financers Terms conditions discription57 32")}
                            </Typography>
                            <Typography className={classes.discription}>
                                {t("financerTerm.Financers Terms conditions discription58 33")}
                            </Typography>
                            <Typography className={classes.discription}>
                                {t("financerTerm.Financers Terms conditions discription59 34")}
                            </Typography>
                            <ul style={{ margin: "0px" }}>
                                <Typography className={classes.discription}>
                                    {t("financerTerm.Financers Terms conditions discription60 34 1")}
                                </Typography>
                                <Typography className={classes.discription}>
                                    {t("financerTerm.Financers Terms conditions discription61 34 2")}
                                </Typography>
                                <Typography className={classes.discription}>
                                    {t("financerTerm.Financers Terms conditions discription62 34 3")}
                                </Typography>
                                <Typography className={classes.discription}>
                                    {t("financerTerm.Financers Terms conditions discription63 34 4")}
                                </Typography>
                            </ul>
                            <Typography className={classes.discription}>
                                {t("financerTerm.Financers Terms conditions discription64 35")}
                            </Typography>
                        </ul>
                    </ul>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription65")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription66")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription67")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription68")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription69")}
                    </Typography>
                </ul>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>
                    {t("financerTerm.Financers Terms conditions sub tittle7")}
                </Typography>
                <ul style={{ margin: "0px" }}>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription70")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription71")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription72")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription73")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription74")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription75")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription76")}
                    </Typography>
                </ul>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>
                    {t("financerTerm.Financers Terms conditions sub tittle8")}
                </Typography>
                <ul style={{ margin: "0px" }}>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription77")}
                    </Typography>
                    <ul style={{ margin: "0px" }}>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription77 1")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription77 2")}&nbsp;
                            <a href="mailto:contactus@raqamyah.com">
                                contactus@raqamyah.com.
                            </a>
                            &nbsp;{t("financerTerm.Financers Terms conditions discription77 2 2")}&nbsp;
                            <a href="tel:+920004032">+920004032</a> &nbsp;
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription77 3")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription77 4")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription77 5")}
                        </Typography>
                    </ul>
                </ul>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>
                    {t("financerTerm.Financers Terms conditions sub tittle9")}
                </Typography>
                <ul style={{ margin: "0px" }}>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription79")}
                    </Typography>
                    <ul style={{ margin: "0px" }}>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription79 1")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription79 2")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription79 3")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription79 4")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription79 5")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription79 6")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription79 7")}
                        </Typography>
                    </ul>
                </ul>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>
                    {t("financerTerm.Financers Terms conditions sub tittle10")}
                </Typography>
                <ul style={{ margin: "0px" }}>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription80")}
                    </Typography>
                    <ul style={{ margin: "0px" }}>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription80 1")}
                        </Typography>
                        <ul style={{ margin: "0px" }}>
                            <Typography className={classes.discription}>
                                {t("financerTerm.Financers Terms conditions discription80 11")}
                            </Typography>
                            <Typography className={classes.discription}>
                                {t("financerTerm.Financers Terms conditions discription80 12")}
                            </Typography>
                            <Typography className={classes.discription}>
                                {t("financerTerm.Financers Terms conditions discription80 13")}
                            </Typography>
                        </ul>
                    </ul>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription81")}
                    </Typography>
                    <ul style={{ margin: "0px" }}>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription81 1")}
                        </Typography>
                    </ul>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription82")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription83")}
                    </Typography>
                    <ul style={{ margin: "0px" }}>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription83 1")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription83 2")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription83 3")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription83 4")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription83 5")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription83 6")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription83 7")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription83 8")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription83 9")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription83 10")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription83 11")}
                        </Typography>
                    </ul>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription84")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription85")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription86")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription87")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription88")}
                    </Typography>
                </ul>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>
                    {t("financerTerm.Financers Terms conditions sub tittle11")}
                </Typography>
                <Typography className={classes.discription}>
                    {t("financerTerm.Financers Terms conditions discription89")}
                </Typography>
                <ul style={{ margin: "0px" }}>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription90")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription91")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription92")}
                    </Typography>
                </ul>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>
                    {t("financerTerm.Financers Terms conditions sub tittle12")}
                </Typography>
                <ul style={{ margin: "0px" }}>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription93")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription94")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription95")}
                    </Typography>
                    <ul style={{ margin: "0px" }}>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription95 1")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription95 2")}
                        </Typography>
                    </ul>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription96")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription97")}
                    </Typography>
                </ul>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>
                    {t("financerTerm.Financers Terms conditions sub tittle13")}
                </Typography>
                <ul style={{ margin: "0px" }}>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription98")}
                    </Typography>
                    <ul style={{ margin: "0px" }}>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription98 1")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription98 2")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription98 3")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription98 4")}
                        </Typography>
                    </ul>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription99")}
                    </Typography>
                    <ul style={{ margin: "0px" }}>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription99 1")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription99 2")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription99 3")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription99 4")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription99 5")}
                        </Typography>
                    </ul>
                </ul>
                <Typography className={classes.discription}>
                    {t("financerTerm.Financers Terms conditions discription100")}
                </Typography>
                <ul style={{ margin: "0px" }}>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription100 1")}
                    </Typography>
                    <ul>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription100 1 1")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription100 1 2")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription100 1 3")}
                        </Typography>
                    </ul>
                </ul>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>
                    {t("financerTerm.Financers Terms conditions sub tittle14")}
                </Typography>
                <ul style={{ margin: "0px" }}>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription101")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription102")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription103")}
                    </Typography>
                </ul>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>
                    {t("financerTerm.Financers Terms conditions sub tittle15")}
                </Typography>
                <ul style={{ margin: "0px" }}>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription104")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription105")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription106")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription107")}
                    </Typography>
                    <ul style={{ margin: "0px" }}>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription107 1")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription107 2")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription107 3")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription107 4")}
                        </Typography>
                    </ul>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription108")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription109")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription110")}
                    </Typography>
                    <ul style={{ margin: "0px" }}>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription110 1")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription110 2")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription110 3")}
                        </Typography>
                    </ul>
                </ul>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>
                    {t("financerTerm.Financers Terms conditions sub tittle16")}
                </Typography>
                <ul style={{ margin: "0px" }}>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription111")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription112")}
                    </Typography>
                    <ul style={{ margin: "0px" }}>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription112 1")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription112 2")}
                        </Typography>
                    </ul>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription113")}
                    </Typography>
                </ul>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>
                    {t("financerTerm.Financers Terms conditions sub tittle17")}
                </Typography>
                <ul style={{ margin: "0px" }}>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription114")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription115")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription116")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription117")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription118")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription119")}
                    </Typography>
                    <ul style={{ margin: "0px" }}>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription119 1")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription119 2")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription119 3")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription119 4")}
                        </Typography>
                    </ul>
                </ul>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>
                    {t("financerTerm.Financers Terms conditions sub tittle18")}
                </Typography>
                <ul style={{ margin: "0px" }}>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription120 1")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription120 2")}
                    </Typography>
                    <ul style={{ margin: "0px" }}>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription120 2 1")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription120 2 2")}
                        </Typography>
                    </ul>
                </ul>
                <Typography className={classes.discription}>
                    {t("financerTerm.Financers Terms conditions discription121")}
                </Typography>
                <ul style={{ margin: "0px" }}>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription122")}
                    </Typography>
                </ul>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>
                    {t("financerTerm.Financers Terms conditions sub tittle19")}
                </Typography>
                <ul style={{ margin: "0px" }}>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription123")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription124")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription125")}
                    </Typography>
                    <ul style={{ margin: "0px" }}>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription125 1")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription125 2")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription125 3")}
                        </Typography>
                    </ul>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription126")}
                    </Typography>
                </ul>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>
                    {t("financerTerm.Financers Terms conditions sub tittle20")}
                </Typography>
                <ul style={{ margin: "0px" }}>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription127")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription128")}
                    </Typography>
                    <ul style={{ margin: "0px" }}>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription128 1")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription128 2")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription128 3")}
                        </Typography>
                    </ul>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription129")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription130")}
                    </Typography>
                    <ul style={{ margin: "0px" }}>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription130 1")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription130 2")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription130 3")}
                        </Typography>
                    </ul>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription131")}
                    </Typography>
                    <ul style={{ margin: "0px" }}>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription131 1")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription132 2")}
                        </Typography>
                    </ul>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription133")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription134")}
                    </Typography>
                    <ul style={{ margin: "0px" }}>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription134 1")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription134 2")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription134 3")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription134 4")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription134 5")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription134 6")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription134 7")}
                        </Typography>
                    </ul>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription135")}
                    </Typography>
                    <ul style={{ margin: "0px" }}>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription135 1")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription135 2")}
                        </Typography>
                    </ul>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription136")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription137")}
                    </Typography>
                </ul>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>
                    {t("financerTerm.Financers Terms conditions sub tittle21")}
                </Typography>
                <ul style={{ margin: "0px" }}>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription138")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription139")}
                        <a href="mailto:contactus@raqamyah.com.">contactus@raqamyah.com.</a>
                    </Typography>
                </ul>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>
                    {t("financerTerm.Financers Terms conditions sub tittle22")}
                </Typography>
                <ul style={{ margin: "0px" }}>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription140")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription141")}
                    </Typography>
                </ul>
                <Divider className={classes.Divider} />
                <Typography className={classes.Introduction}>
                    {t("financerTerm.Financers Terms conditions sub tittle23")}
                </Typography>
                <ul style={{ margin: "0px" }}>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription142")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription143")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription144")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription145")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription146")}
                    </Typography>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription147")}
                    </Typography>
                    <ul style={{ margin: "0px" }}>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription147 1")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription147 2")}
                        </Typography>
                        <Typography className={classes.discription}>
                            {t("financerTerm.Financers Terms conditions discription147 3")}
                        </Typography>
                        <ul style={{ margin: "0px" }}>
                            <Typography className={classes.discription}>
                                {t("financerTerm.Financers Terms conditions discription147 3 1")}
                            </Typography>
                        </ul>
                    </ul>
                    <Typography className={classes.discription}>
                        {t("financerTerm.Financers Terms conditions discription148")}
                    </Typography>
                </ul>
                <Divider className={classes.Divider} />
            </Container>
        </div>
    );
}

const useStyles = makeStyles((theme, local) => ({
    home: {
        background: "#fff",
        height: "100%",
        position: "relative",
        padding: "50px",
        [theme.breakpoints.down("sm")]: {
            background: "#fff",
            height: "100%",
            position: "relative",
            marginTop: "110px",
            padding: "20px",
        },
    },

    hometittle: {
        fontWeight: "600px",
        fontSize: "30px",
        color: "#1E396C",
        paddingBottom: "10px",
        [theme.breakpoints.down("sm")]: {

            fontWeight: "600px",
            fontSize: "25px",
            color: "#1E396C",
            paddingBottom: "5px",
        },
    },
    Introduction: {
        fontWeight: "550px",
        fontSize: "20px",
        color: "#1E396C",
        paddingBottom: "5px",
        [theme.breakpoints.down("sm")]: {

            fontWeight: "550px",
            fontSize: "20px",
            color: "#1E396C",
        },
    },
    discription: {
        fontWeight: "normal",
        fontSize: "18px",
        color: "#1E396C",
        lineHeight: "35px",
        textAlign: "justify",
        paddingBottom: "5px !important",
        paddingTop: "5px !important",
        [theme.breakpoints.down("sm")]: {

            fontWeight: "normal",
            fontSize: "15px",
            color: "#1E396C",
            textAlign: "justify",
            paddingBottom: "5px !important",
            paddingTop: "5px !important",
        },
    },
    Divider: {
        marginTop: "10px",
        marginBottom: "10px",
    },
}));
