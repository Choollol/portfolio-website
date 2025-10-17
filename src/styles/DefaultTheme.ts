import { createTheme, CSSProperties } from "@mui/material";

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

export const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          "& .MuiLink-root": {
            textDecoration: "underline"
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
      lineHeight: "130%"
    },
  },
});