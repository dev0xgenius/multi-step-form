import { createTheme, type CSSProperties } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      pastelBlue: Palette['primary'];
      lightBlue: Palette['primary'];
      strawberryRed: Palette['primary'];
    };
  }

  interface PaletteOptions {
    custom?: {
      pastelBlue?: PaletteOptions['primary'],
      lightBlue?: PaletteOptions['primary'],
      strawberryRed?: PaletteOptions['primary']
    }
  }

  interface Mixins {
    coverParentAbsolutely?: CSSProperties;
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
      strawberryRed: { main: "hsl(354, 84%, 57%)" }
    }
  },

  shape: {
    borderRadius: "0.786rem"
  },

  typography: {
    button: {
      textTransform: "none",
      textDecoration: "none",
    },

    fontFamily: "'Ubuntu', system-ui",
  }
});

customTheme = createTheme(customTheme, {
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
        spacing: 1
      }
    },
  },

  mixins: {
    coverParentAbsolutely: {
      position: "absolute",
      top: 0, left: 0,
      bottom: 0, right: 0
    }
  }
});

export default customTheme;
