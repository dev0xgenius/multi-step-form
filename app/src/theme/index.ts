import { createTheme } from "@mui/material/styles";

export default createTheme({
  typography: {
    button: {
      textDecoration: "none",
    }
  },

  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true
      }
    }
  }
});


