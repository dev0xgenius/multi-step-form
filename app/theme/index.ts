import {
  createTheme,
  type CSSProperties,
  type PaletteColor,
  responsiveFontSizes,
} from "@mui/material/styles";

import { TextFieldDefaultProps } from "./textField.ts";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      pastelBlue: Palette["primary"];
      lightBlue: Palette["primary"];
      strawberryRed: Palette["primary"];
    };
    neutral: {
      coolGray: string;
      lightGray: string;
      magnolia: string;
      alabaster: string;
      white: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      pastelBlue?: PaletteOptions["primary"];
      lightBlue?: PaletteOptions["primary"];
      strawberryRed?: PaletteOptions["primary"];
    };
    neutral?: {
      coolGray: string;
      lightGray: string;
      magnolia: string;
      alabaster: string;
      white: string;
    };
  }

  interface Mixins {
    coverParentAbsolutely?: CSSProperties;
    centerStack?: CSSProperties;
    highlightBorder?: CSSProperties;
  }
}

let customTheme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "hsl(213, 96%, 18%)",
    },
    secondary: {
      main: "hsl(243, 100%, 62%)",
    },
    custom: {
      pastelBlue: { main: "hsl(228, 100%, 84%)" },
      lightBlue: { main: "hsl(206, 94%, 87%)" },
      strawberryRed: { main: "hsl(354, 84%, 57%)" },
    },
    neutral: {
      coolGray: "hsl(231, 11%, 63%)",
      lightGray: "hsl(229, 24%, 87%)",
      magnolia: "hsl(217, 100%, 97%)",
      alabaster: "hsl(231, 100%, 99%)",
      white: "hsl(0, 0%, 100%)",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 992,
      xl: 1440,
    },
  },

  shape: {
    borderRadius: 10,
  },

  typography: {
    button: {
      textTransform: "none",
      textDecoration: "none",
    },

    fontFamily: "'Ubuntu', system-ui",
  },
});

customTheme = createTheme(customTheme, {
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
        spacing: 1,
      },
    },
    MuiTextField: { defaultProps: { ...TextFieldDefaultProps } },
    MuiButton: {
      defaultProps: { size: "large" },
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: "none"
        },
      },
    },
  },

  mixins: {
    coverParentAbsolutely: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    centerStack: {
      alignItems: "center",
      justifyContent: "center",
    },
    highlightBorder: {
      border: 2,
      borderColor: customTheme.palette.secondary.main,
      bgcolor: customTheme.palette.neutral.alabaster,
    },
  },
});

customTheme = responsiveFontSizes(customTheme, { factor: 1.5 });
export default customTheme;
