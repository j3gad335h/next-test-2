import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import baseUrl from '../../baseUrl';
const image1 = '/assetsNew/images/HomeBanner/Landing-Page-Banner-Slide_1.webp';
const image2 = '/assetsNew/images/HomeBanner/Landing-Page-Banner-Slide_3.webp';
const image3 = '/assetsNew/images/HomeBanner/banner1.webp';

const useStyles = makeStyles((theme) => ({
  slider1: {
    backgroundImage:(props) =>props.locale === "ar" ? `url(${image2})` : `url(${image1})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    minHeight: '25vh',
    zIndex: -2,
    [theme.breakpoints.up('sm')]: {
      minHeight: '40vh',
    },
  
    [theme.breakpoints.up('md')]: {
      minHeight: '40vh',
    },

    [theme.breakpoints.between('md','lg')]: {
      minHeight: '70vh',
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: '83vh',
    },
    [theme.breakpoints.up('xl')]: {
      minHeight: '83vh',
    },
    // ...other breakpoints
  },
  slider2: {
    backgroundImage:(props) =>props.locale === "ar" ? `url(${image1})` : `url(${image2})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    minHeight: '25vh',
    zIndex: -2,
    [theme.breakpoints.up('sm')]: {
      minHeight: '40vh',
    },
    [theme.breakpoints.up('md')]: {
      minHeight: '40vh',
    },
    [theme.breakpoints.between('md','lg')]: {
      minHeight: '70vh',
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: '83vh',
    },
    [theme.breakpoints.up('xl')]: {
      minHeight: '83vh',
    },
  },
  slider3: {
    backgroundImage: `url(${image3})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    minHeight: '25vh',
    zIndex: -2,
    [theme.breakpoints.up('sm')]: {
      minHeight: '40vh',
    },


    [theme.breakpoints.up('md')]: {
      minHeight: '40vh',
    },
    [theme.breakpoints.between('md','lg')]: {
      minHeight: '70vh',
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: '83vh',
    },
    [theme.breakpoints.up('xl')]: {
      minHeight: '83vh',
    },
  },
  bannerText: {

    fontSize: '18px',
    fontWeight: 'bold',
    color: "#fff",
    lineHeight:" 1.5 !important" ,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(0),
    [theme.breakpoints.up('xs')]: {

      fontSize: '18px',
      fontWeight: 'bold',
      color: "#fff",
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(0),
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),

      fontSize: '25px',
      fontWeight: 'bold',
      color: "#fff",
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(10),
   
      fontSize: '30px',
      fontWeight: 'bold',
      color: "#fff",
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(10),
    
      fontSize: '42px',
      fontWeight: 'bold',
      color: "#fff",
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: theme.spacing(10),
  
      fontSize: '42px',
      fontWeight: 'bold',
      color: "#fff",
    },

  },
  Button: {
    background: "#35A052",
    color: '#fff',
    fontSize: '14px',
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
    [theme.breakpoints.up('sm')]: {
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
  },
  container: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '0px',
    minHeight: '32vh',
    paddingLeft: '150px',
    [theme.breakpoints.up('xs')]: {
      display: "flex",
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '0px',
      minHeight: '32vh',
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
      minHeight: '30vh',
      paddingLeft: '500px',
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
  }
}));

const HomeBanner = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const classes = useStyles({ locale });
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider  {...settings}>
      <div locale={locale} className={classes.slider1}>
        <Container className={classes.container}>
          <Typography style={{textAlign: locale ==='ar'?'right':'left',}} color="inherit"  className={classes.bannerText}>
            {t('home.slider1')}
          </Typography>
        </Container>
      </div>
      <div  locale={locale} className={classes.slider2}>
        <Container className={classes.container}>
          <Typography style={{textAlign: locale ==='ar'?'right':'left',}} color="inherit" variant="h2" className={classes.bannerText}>
          {t('home.slider2')}
          </Typography>
        </Container>
      </div>
      <div locale={locale} className={classes.slider3}>
        <Container className={classes.container}>
          <Typography style={{textAlign: locale ==='ar'?'right':'left',}} color="inherit" variant="h4" className={classes.bannerText}>
          {t('home.slider3')}
          </Typography>
        </Container>
      </div>
    </Slider>
  );
};

export default HomeBanner;

