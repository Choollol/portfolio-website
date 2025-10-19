import { createTheme, CSSProperties, responsiveFontSizes } from "@mui/material";

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    pageTitle: true;
  }
}

const headerCommonStyles: CSSProperties = {
  fontWeight: "bold",
  textAlign: "center",
}

export const defaultStyle: CSSProperties = {
  body: {
    padding: 0,
    margin: 0,
    color: "white",
    backgroundColor: "hsl(0, 0%, 18%)",
    fontSize: 20,
  },
}

let theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          "& .MuiLink-root": {
            color: "lightcyan",
            textDecoration: "underline",
            "&:hover": {
              color: "lightblue",
            },
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "inherit",
          textDecoration: "none",
          transition: "color 0.08s",
          "&:hover": {
            color: "lightblue",
          },
          "& .Mui-visited": {
            color: "inherit"
          }
        }
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "inherit"
        },
        asterisk: {
          color: "red"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          transition: "background-color 0.2s",
          "&:hover": {
            backgroundColor: "hsla(0, 0%, 100%, 0.06)",
          },
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "hsla(0, 0%, 100%, 0.6)",
        }
      }
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: "white"
        }
      }
    }
  },
  typography: {
    fontFamily: [
      "Inter",
      "system-ui",
      "Avenir",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(", "),
    fontSize: 18,
    h2: {
      ...headerCommonStyles
    },
    h3: {
      ...headerCommonStyles
    },
    h4: {
      ...headerCommonStyles
    },
    h5: {
      ...headerCommonStyles
    },
    h6: {
      ...headerCommonStyles
    },
    body1: {
      lineHeight: 1.3
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
