import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import { makeStyles, withStyles } from '@mui/styles'
import LocaleSwitcher from '../language-switcher';
import BaseUrl from '../../baseUrl';
import { useTranslation } from "next-i18next";
import { CircularProgress, Container, Grid, Hidden } from '@mui/material';
import { useRouter } from "next/router";
import LoginButton from '../LoginButton';
import Image from 'next/image';

const drawerWidth = 240;

function Header(props) {
  const getFinanceIcon = BaseUrl + "assetsNew/images/MenuIcons/getFinacneIcons.webp";
  const financeIcon = BaseUrl + "assetsNew/images/MenuIcons/financeIcons.webp";
  const posFinanceIcon = BaseUrl + "assetsNew/images/MenuIcons/posFinanceIcons.webp";
  const howItWorksIcon = BaseUrl + "assetsNew/images/MenuIcons/howItWorksIcons.webp";
  const aboutIcon = BaseUrl + "assetsNew/images/MenuIcons/aboutIcon.webp";
  const contactIcon = BaseUrl + "assetsNew/images/MenuIcons/contactIcons.webp";
  const SmesIcon = BaseUrl + "assetsNew/images/MenuIcons/balance.webp";

  const classes = useStyles();
  const { window } = props;
  const router = useRouter();
  const { locale } = useRouter();
  const { t } = useTranslation('common');
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };



  const headerContent = [
    {
      menu: '1',
      link: `getFinanced`,
      pageName: locale === 'en' ? 'Get Financed' : "تقدم بطلب تمويل",
      icon: <Image width={25} height={25} alt="getFinanceIcon" src={getFinanceIcon} />,
    },
    {
      menu: '2',
      link: `finance`,
      pageName: locale === 'en' ? 'Finance' : "ابدأ بالتمويل",
      icon: <Image width={25} height={25} alt="financeIcon" src={financeIcon} />,
    },
    {
      menu: '3',
      link: `posFinance`,
      pageName: locale === 'en' ? 'Pos Finance' : "تمويل نقاط البيع",
      icon: <Image width={25} height={25} alt="posFinanceIcon" src={posFinanceIcon} />,
    },
    {
      menu: '4',
      link: `smes`,
      pageName: locale === 'en' ? 'Financing Rate' : "أسعار المنتجات",
      icon: <Image width={25} height={25} alt="Supplychain" src={SmesIcon} />,
    },
    {
      menu: '5',
      link: `howItWorks`,
      pageName: locale === 'en' ? 'How It Works' : "كيف تعمل المنصة",
      icon: <Image width={25} height={25} alt="howItWorksIcon" src={howItWorksIcon} />,
    },
    {
      menu: '6',
      link: `about`,
      pageName: locale === 'en' ? 'About' : "عن رقمية",
      icon: <Image width={25} height={25} alt="aboutIcon" src={aboutIcon} />,
    },
    {
      menu: '7',
      link: `contactUs`,
      pageName: locale === 'en' ? 'Contact Us' : "تواصل معنا",
      icon: <Image width={25} height={25} alt="contactIcon" src={contactIcon} />,
    },
  ];
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Logo />
      <Divider />
      <List>
        <List variant="ul" className={classes.list} >
          {headerContent.map((item, index) => (
            <div key={index}>
              <ListItem variant="li" className={classes.listItem}>
                <span className={classes.MenuIcons}>{item.icon}</span>
                <Link className={classes.navLink} href={`/${locale}/${item.link}`} style={{ borderBottom: router.pathname.includes(item.link) && "2px solid #3AB15F", borderRadius: "none !important", width: "auto", }} key={index}>
                  {t(`${item.pageName}`)}
                </Link>
              </ListItem>

              {index !== headerContent.length - 1 && (
                <ListItem variant="li" className={classes.listItem}>
                  <div className={classes.divider} />
                </ListItem>
              )}
            </div>
          ))}
        </List>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className={classes.headerBox} sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar className={classes.SubHeader}>
          <Container className={classes.buttonContainer} >
            <LocaleSwitcher />
            <LoginButton />
          </Container>
        </Toolbar>
        <Toolbar className={classes.MenuHeader}>
          <Container className={classes.headerBox} style={{ display: 'flex' }}>
            <Logo />
            <Hidden lgDown implementation="css">
              <List variant="ul" className={classes.list}>
                {headerContent.map((item, index) => (
                  <div key={index}>
                    <ListItem variant="li" className={classes.listItem}>
                      <Link className={classes.navLink} href={`/${locale}/${item.link}`} style={{ borderBottom: router.pathname.includes(item.link) && "2px solid #3AB15F", borderRadius: "none !important", width: "auto", }} key={item.menu} >
                        {t(`${item.pageName}`)}
                      </Link>
                      {index !== headerContent.length - 1 && (
                        <div className={classes.divider} />
                      )}
                    </ListItem>
                  </div>
                ))}
              </List>
            </Hidden>
            <Box className={classes.drawerBox}>
              <IconButton
                aria-label="open drawer"
                edge="end"
                className={classes.drawerButton}
                onClick={handleDrawerToggle}
                sx={{ display: { lg: 'none' } }}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Hidden lgUp implementation="js">
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', lg: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}>
            {drawer}
          </Drawer>
        </Box>
      </Hidden>
      <Toolbar />
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};


export default Header;
const useStyles = makeStyles((theme, locale) => ({
  headerBox: {
    paddingLeft: "0px",
    paddingRight: "0px",
    [theme.breakpoints.up("xl")]: {
      marginLeft:'35px',
      marginRight:'auto',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    },
    [theme.breakpoints.down("md")]: {
    
    }
  },
  SubHeader: {
    background: "linear-gradient(0.25turn, #28A4DB, #3AB15F) !important",
    minHeight: "40px !important"
  },
  MenuHeader: {
    backgroundColor: "#fff !important",
    minHeight: "70px !important",
    paddingLeft: "0px",
    paddingRight: "0px",
    paddingTop: '1px',
    paddingBottom: '1px',
    width: "100%", // Set width to 100% for full width
    [theme.breakpoints.up("xl")]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto', // Center the header horizontally (optional if you want it centered)
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
      paddingRight: "0px",
    }
  },
  MenuIcons: {
    display: "none",
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      color: "#37A753",
      width: "25px",
      height: "25px",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      color: "#37A753",
      width: "25px",
      height: "25px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      color: "#37A753",
      width: "25px",
      height: "25px",
    },
  },
  listItem: {
    float: locale === "en" ? "left" : "right",
    color: "inherit",
    position: "relative",
    display: "flex",
    width: "auto",
    padding: "5px",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      display: "flex",
      paddingRight: "10px",
      paddingLeft: "10px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      display: "flex",
      paddingRight: "10px",
      paddingLeft: "10px",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "flex",
      paddingRight: "10px",
      paddingLeft: "10px",
    },
  },
  list: {
    position: 'relative',
    right: locale === "en" ? "0px" : "150px",
    left: locale === "en" ? "0px" : "150px",
    fontSize: "14px",
    marginLeft: "10px",
    paddingLeft: "0",
    listStyle: "none",
    color: "inherit",
    display: "flex !important",
    [theme.breakpoints.down("lg")]: {
      fontSize: "14px",
      marginLeft: "10px",
      paddingLeft: "0",
      listStyle: "none",
      color: "inherit",
      display: "block !important",
      position: 'relative',
      right: "0px",
      left: "0px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      marginLeft: "10px",
      paddingLeft: "0",
      listStyle: "none",
      color: "inherit",
      display: "block !important",
      position: 'relative',
      right: "0px",
      left: "0px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      marginLeft: "10px",
      paddingLeft: "0",
      listStyle: "none",
      color: "inherit",
      display: "block !important",
      position: 'relative',
      right: "0px",
      left: "0px",
    },
  },
  divider: {
    width: "2px",
    content: '""',
    height: "35px",
    display: "block",
    marginTop: "0px",
    backgroundColor: "#28A4DB",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navLink: {
    color: "#555555",
    position: "relative",
    padding: "0.5rem",
    fontWeight: "400",
    fontSize: "16px",
    marginLeft: "4px",
    marginRight: "4px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "#555555",
      backgroundColor: "transparent",
      textDecoration: "#28A4DB",
    },
    [theme.breakpoints.down("lg")]: {
      width: "calc(100% - 30px)",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
    [theme.breakpoints.down("md")]: {
      width: "calc(100% - 30px)",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  },
  drawerButton: {
    color: '#000 !important',
  },
  drawerBox: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'end',
    alignItems: 'center',
    [theme.breakpoints.down("lg")]: {
      position: 'relative',
      left: '80%',
      right: '80%',
    },
    [theme.breakpoints.down("md")]: {
      position: 'relative',
      left: '70%',
      right: '70%',
    },
    [theme.breakpoints.down("sm")]: {
      position: 'relative',
      left: '50%',
      right: '50%',
    },
    [theme.breakpoints.down("xs")]: {
      position: 'relative',
      left: '30%',
      right: '30%',
    },
  },
  buttonContainer: {
    display: 'inline-flex',
    justifyContent: locale === 'en' ? 'end' : 'end'
  }
}));
