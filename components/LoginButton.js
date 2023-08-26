import { SvgIcon } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from "next-i18next";
import Link from 'next/link';
import { useRouter } from 'next/router';
import LoginBaseUrl from '../loginUrl';
export default function LoginButton() {
    const classes = useStyles();
    const { locale } = useRouter();
    const { t } = useTranslation('common');
    const Url =LoginBaseUrl+`signin?lang=${locale}`
  return (
    <Link href={Url} target='_blank' className={classes.loginButton} size='medium'>  
    <SvgIcon style={{   left: locale === "ar" ? "10px" : "0px",}} className={classes.svgicon}>
    <path
      id="Arrwo"
      d="M373.914,49l2.1-1.906L372.611,44l3.4-3.091L373.914,39l-4.451,4.043a1.264,1.264,0,0,0,0,1.907Z"
      transform="translate(-369.03 -39.004)"
      fill="#1e396c"
    />
  </SvgIcon>{t('menu.Login')}</Link>
  )
}
const useStyles = makeStyles((theme, locale) => ({
    loginButton:{
      color: '#000',
        background:'#EFEFF0',
        fontSize: '12px !important',
        textTransform:"uppercase",
        fontWeight:500,
        borderRadius:'15px',
        padding: '3px 10px 3px 10px',
        textDecoration:'none',
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin:'5px',
        "&:hover": {
          color: '#1E396C',
            background:'#EFEFF0',
            borderRadius:'15px',
            padding: '3px 10px 3px 10px',
            textDecoration:'none',
        },
    },
    loginIcon:{
        marginLeft:'5px',
        marginRight:'5px',
        fontSize: '16px !important',
        textAlign:'center'
    },
    svgicon: {
      position: "relative",
      top: "6px",
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      left: locale === "ar" ? "10px" : "0px",
      textAlign:'center',
      // marginLeft:locale==="en"?'0px': '10px',
      // marginRight:locale==="en"?'10px': '0px',
    },
  }));