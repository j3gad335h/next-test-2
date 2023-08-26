import { createTheme } from "@mui/material/styles";
const theme = createTheme({
 
  MuiTypography: {
    styleOverrides: {
      root: {
        letterSpacing: "0.00938em !important",
        lineHeight: " 1.5 !important",
      },
    },
  },
  MuiGrid: {
    styleOverrides: {
      root: {
        marigin: "0px",
      },
    },
  },
});
export default theme;