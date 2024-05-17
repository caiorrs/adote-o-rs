import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ["Montserrat", "sans-serif"].join(", "),
    },
    h4: {
      fontSize: "20px",
    },
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiStack: {
      defaultProps: {
        sx: {
          backgroundColor: "#FFF",
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiTypography: {
      defaultProps: {
        sx: {
          fontFamily: "Montserrat",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          "&:before": {
            backgroundColor: "transparent",
          },
        },
      },
      defaultProps: {
        sx: {
          backgroundColor: "#F0F0F140",
          borderWidth: "1px",
          borderColor: "#A5A6F640",
          borderRadius: "20px",
          borderTopRightRadius: "20px",
          gap: "20px",
          py: "10px",
          px: "20px",
        },
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#5D5FEF",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    background: {
      default: "#FFFFFF",
    },
  },
});
