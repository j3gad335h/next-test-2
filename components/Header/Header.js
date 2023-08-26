import MenuIcon from "@mui/icons-material/Menu";
import { Container, Grid, Hidden } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import * as React from "react";
import { useEffect } from "react";
import LoginButton from "../LoginButton";
import Logo from "../Logo/Logo";
import ScmLoginButton from "../ScmLoginButton";
import LocaleSwitcher from "../language-switcher";
const drawerWidth = 240;

function Header(props) {
  const getFinanceIcon = "/assetsNew/images/MenuIcons/getFinacneIcons.webp";
  const financeIcon = "/assetsNew/images/MenuIcons/financeIcons.webp";
  const posFinanceIcon = "/assetsNew/images/MenuIcons/posFinanceIcons.webp";
  const howItWorksIcon = "/assetsNew/images/MenuIcons/howItWorksIcons.webp";
  const aboutIcon = "/assetsNew/images/MenuIcons/aboutIcon.webp";
  const contactIcon = "/assetsNew/images/MenuIcons/contactIcons.webp";
  const SmesIcon = "/assetsNew/images/MenuIcons/balance.webp";
  const supplyChain = "/assetsNew/images/MenuIcons/production.webp";
  const classes = useStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();
  const { locale } = useRouter();
  const { t } = useTranslation("common");
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    // Apply styles or modify appearance here
  }, []);
  const headerContent = [
    {
      menu: "1",
      link: `getFinanced`,
      pageName: locale === "en" ? "Get Financed" : "تقدم بطلب تمويل",
      icon: <Image width={25} height={25} alt="getFinanceIcon" src={getFinanceIcon} />,
    },
    {
      menu: "2",
      link: `finance`,
      pageName: locale === "en" ? "Finance" : "ابدأ بالتمويل",
      icon: <Image width={25} height={25} alt="financeIcon" src={financeIcon} />,
    },
    {
      menu: "3",
      link: `posFinance`,
      pageName: locale === "en" ? "Pos Finance" : "تمويل نقاط البيع",
      icon: <Image width={25} height={25} alt="posFinanceIcon" src={posFinanceIcon} />,
    },
    {
      menu: "4",
      link: `smes`,
      pageName: locale === "en" ? "Financing Rates" : "أسعار المنتجات",
      icon: <Image width={25} height={25} alt="Supplychain" src={SmesIcon} />,
    },
    {
      menu: "5",
      link: `supplyChain`,
      pageName: locale === "en" ? "Supply Chain" : "سلاسل الامداد",
      icon: <Image width={25} height={25} alt="supplyChain" src={supplyChain} />,
    },
    {
      menu: "5",
      link: `howItWorks`,
      pageName: locale === "en" ? "How It Works" : "كيف تعمل المنصة",
      icon: <Image width={25} height={25} alt="howItWorksIcon" src={howItWorksIcon} />,
    },
    {
      menu: "6",
      link: `about`,
      pageName: locale === "en" ? "About" : "عن رقمية",
      icon: <Image width={25} height={25} alt="aboutIcon" src={aboutIcon} />,
    },
    {
      menu: "7",
      link: `contactUs`,
      pageName: locale === "en" ? "Contact Us" : "تواصل معنا",
      icon: <Image width={25} height={25} alt="contactIcon" src={contactIcon} />,
    },
  ];
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <Logo />
      </Box>
      <Divider />

      <List variant="ul" className={classes.list}>
        {headerContent.map((item, index) => (
          <div key={index}>
            <ListItem variant="li" className={classes.listItem}>
              <span className={classes.MenuIcons}>{item.icon}</span>
              <Link className={classes.navLink} href={`/${locale}/${item.link}`} style={{ borderBottom: router.pathname.includes(item.link) && "2px solid #3AB15F", borderRadius: "none !important", width: "auto" }} key={index}>
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
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className={classes.mainSection}>
      <AppBar component="nav">
        <Toolbar className={classes.buttonToolbar}>
          <Container className={classes.buttonContainer}>
            <Grid style={{ display: "contents" }} container spacing={2}>
              <Grid className={classes.scmButtonToolbarBox} item sm={12} md={12}>
                <ScmLoginButton />
              </Grid>
              <Grid className={classes.buttonToolbarBox} item sm={12} md={12}>
                <LocaleSwitcher />
                <LoginButton />
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
        <Toolbar className={classes.menuToolbar}>
          <Container className={classes.menuContainer}>
            <Box sx={{ flexGrow: 1, display: { sm: "block" } }}>
              <Logo />
            </Box>
            <IconButton color="#000" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ margin: "0px 16px 0px 16px", display: { lg: "none" } }}>
              <MenuIcon style={{ margin: "0px 16px 0px 16px", color: "#000", fontSize: "30px" }} />
            </IconButton>

            <Hidden lgDown implementation="css">
              <Box>
                <List variant="ul" className={classes.list}>
                  {headerContent.map((item, index) => (
                    <div key={index}>
                      <ListItem variant="li" className={classes.listItem}>
                        <Link className={classes.navLink} href={`/${locale}/${item.link}`} style={{ borderBottom: router.pathname.includes(item.link) && "2px solid #3AB15F", borderRadius: "none !important", width: "auto" }} key={item.menu}>
                          {t(`${item.pageName}`)}
                        </Link>
                        {index !== headerContent.length - 1 && <div className={classes.divider} />}
                      </ListItem>
                    </div>
                  ))}
                </List>
              </Box>
            </Hidden>
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
              display: { xs: "block", lg: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
            }}>
            {drawer}
          </Drawer>
        </Box>
      </Hidden>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};
const useStyles = makeStyles((theme, locale) => ({
  mainSection: {
    height: "110px !important",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      backgroundColor: "#EFEFF0",
      height: "110px !important",
      overflow: "hidden",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#EFEFF0",
      height: "110px !important",
      overflow: "hidden",
    },
  },
  buttonToolbar: {
    background: "linear-gradient(0.25turn, #28A4DB, #3AB15F) !important",
    minHeight: "40px !important",
    display: "flex",
    justifyContent: "end",
  },
  buttonToolbarBox: {
    display: "flex",
    padding: "0px !important",
    justifyContent: "end",
  },
  scmButtonToolbarBox: {
    display: "flex",
    padding: "0px !important",
  },
  menuToolbar: {
    backgroundColor: "#fff !important",
    minHeight: "70px !important",
    // paddingLeft: "0px",
    // paddingRight: "0px",
    paddingTop: "1px",
    paddingBottom: "1px",
    width: "100%", // Set width to 100% for full width
    [theme.breakpoints.up("xl")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto", // Center the header horizontally (optional if you want it centered)
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
      paddingRight: "0px",
    },
  },
  menuContainer: {
    display: "flex",
    alignItems: "center",
    padding: "0px",
    [theme.breakpoints.down("lg")]: {
      // paddingLeft: "50px",
      // paddingRight: "50px",
    },
  },
  buttonContainer: {
    display: "inline-flex",
    justifyContent: locale === "en" ? "end" : "end",
    padding: "0px !important",
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
    position: "relative",
    //   right: locale === "en" ? "0px" : "150px",
    //   left: locale === "en" ? "0px" : "150px",
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
      position: "relative",
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
      position: "relative",
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
      position: "relative",
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
    color: "#000 !important",
  },
  drawerBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      position: "relative",
      left: "80%",
      right: "80%",
    },
    [theme.breakpoints.down("md")]: {
      position: "relative",
      left: "70%",
      right: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      left: "50%",
      right: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      left: "30%",
      right: "30%",
    },
  },
}));
export default Header;
