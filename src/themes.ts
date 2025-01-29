import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4640DE",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
            borderRadius:"0px",
          textTransform: "none",
          
        },
      },
    },
  },
});
