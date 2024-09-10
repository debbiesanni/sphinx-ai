import { Jost } from "next/font/google";
import { createTheme } from "@mui/material/styles";
const jost = Jost({ subsets: ["latin"] });

export const theme = createTheme({
  palette: {
    primary: {
      main: "#563768",
      contrastText: "#fff"
    },
    accent: {
      main: "#336094",
      contrastText: "#fff"
    }
  },
  typography: {
    h3: {
      fontWeight: 600,
      color: "#333333",
      lineHeight: "30px",
      fontSize: 24,
      "@media (min-width:600px)": {
        lineHeight: "40px",
        fontSize: 36
      }
    },
    h4: {
      fontWeight: 600,
      color: "#333333",
      lineHeight: "30px",
      fontSize: 24
    },
    h5: {
      fontSize: "18px",
      fontWeight: 500,
      color: "#333333"
    },
    fontFamily: jost.style.fontFamily
  }
});

declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
  }

  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }
}
