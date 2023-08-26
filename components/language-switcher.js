import LanguageIcon from '@mui/icons-material/Language';
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
export default function LocaleSwitcher() {
  const router = useRouter();
  const classes = useStyles();
  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "default"
  );
  const Arabic = "/assetsNew/images/logo/saudi-arabia.webp";

  return (
    <span className="text-muted cursor-pointer">
      {otherLocales?.map((locale) => {
        const { pathname } = router;
        const asPath = `/${locale}${pathname}`;
        return (
          <span key={"locale-" + locale}>
            <Link href={asPath} as={asPath} locale={locale} style={{ fontFamily: locale === 'ar' ? 'Tajawal' : 'Ample', }} passHref className={classes.languageButton}>
              {locale === "en" ? <LanguageIcon locale={locale} style={{    marginLeft:locale==="en"?'10px': '0px',marginRight:locale==="en"?'0px': '0px',}}  className={classes.languageFlag}/> : <Image locale={locale} style={{    marginLeft:locale==="en"?'0px': '0px',marginRight:locale==="en"?'0px': '10px',}} width={23} height={10} className={classes.languageFlag} src={Arabic} alt="Arabic" />} 
              <span className={classes.languageText}>{locale === "en" ? "ENGLISH" : locale === "ar" ? "العربية" : null}</span>
            </Link>
          </span>
        );
      })}
    </span>
  );
}
const useStyles = makeStyles((theme, locale) => ({
  languageButton: {
    color: '#000',
    background: '#EFEFF0',
    fontWeight: 500,
    borderRadius: '15px',
    fontSize: '12px !important',
    fontFamily: locale === 'ar' ? 'Tajawal' : 'Ample',
    padding: '3px 10px 3px 10px',
    textDecoration: 'none',
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5px',
    "&:hover": {
      color: '#1E396C',
      background: '#EFEFF0',
      borderRadius: '15px',
      padding: '3px 10px 3px 10px',
      textDecoration: 'none',
    },
  },
  languageFlag: {
    width: '23px',
    height: 'auto',
    marginLeft:locale==="ar"?'10px': '0px',
    marginRight:locale==="en"?'0px': '10px',
  },
  languageText:{
    display:'flex',
    [theme.breakpoints.down('sm')]: {
      display:'none'
    }
  },
  languageFlag: {
    width: '23px',
    height: 'auto',
    marginLeft:locale==="ar"?'10px': '0px',
    marginRight:locale==="en"?'0px': '10px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0px !important',
      marginRight:'0px !important',
    }
  },
  loginIcon: {

    fontSize: '16px !important',
    fontWeight: 500,
  }
}));