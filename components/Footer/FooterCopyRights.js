import React, { useEffect, useState } from 'react'
import { makeStyles, withStyles } from '@mui/styles'
import { List, ListItem, Typography } from '@mui/material'
import classNames from "classnames";
import PropTypes from "prop-types";
import { useTranslation } from 'next-i18next';
import getConfig from 'next/config';
const useStyles = makeStyles((theme) => ({
    block: {
        color: "inherit",
        padding: "0.9375rem",
        fontWeight: "500",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        textDecoration: "none",
        position: "relative",
        textAlign: "center !important",
        display: "block",
      },
      left: {
        float: "center !important",
        display: "block",
      },
      right: {
        padding: "15px 0",
        margin: "0",
        float: "right!important",
        color: "#FFF",
      },
      footer: {
        textAlign: "center",
        zIndex: "2",
        position: "relative",
        backgroundColor: "#FFF",
        color: "#000",
      },
      a: {
        color: "#FFF",
        textDecoration: "none",
        backgroundColor: "transparent",
      },
      footerWhiteFont: {
        "&,&:hover,&:focus": {
          color: "#FFFFFF",
        },
      },
      list: {
        marginBottom: "0",
        padding: "0",
        marginTop: "0",
      },
      inlineBlock: {
        display: "inline-block",
        padding: "0px",
        width: "auto",
      },
}));
export default function FooterCopyRights(props) {
    const classes = useStyles();
    const { t } = useTranslation('common');
    const { whiteFont } = props;
    const { publicRuntimeConfig } = getConfig();
    const footerClasses = classNames({
      [classes.footer]: true,
      [classes.footerWhiteFont]: whiteFont,
    });

    return (
      <footer className={footerClasses}>
        <div className={classes.container}>
          <div className={classes.left}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
              <Typography className={classes.block}>{t("footer.Copy rights")} &nbsp; {t("footer.Company")}
                  {1900 + new Date().getYear()}&nbsp;{t("footer.Rights")}&nbsp;{"V-"+publicRuntimeConfig?.version}
                  </Typography>
              </ListItem>
            </List>
          </div>
        </div>
      </footer>
    );
  }
  
  FooterCopyRights.propTypes = {
    whiteFont: PropTypes.bool,
  };
  