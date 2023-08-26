import makeStyles from '@mui/styles/makeStyles';
import Image from 'next/image';
import Link from 'next/link';
const useStyles = makeStyles((theme) => ({
  logo: {
    width: '120px',
    height: '60px',
    position: 'relative',
  },
}));

function Logo() {
  const logo = "/assetsNew/images/logo/logo.webp";
  const classes = useStyles();

  return (
    <Link href="/">
      <Image
        width={120}
        height={50}
        src={logo}
        className={classes.logo} // Updated class name to "logo"
        alt="Logo"
      />
    </Link>
  );
}

export default Logo;