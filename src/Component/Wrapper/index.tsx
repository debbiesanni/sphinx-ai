"use client";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material";
import Footer from "./footer";
import Header from "./header";
import { theme } from "@/Styles/theme";
import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Box>
          <Header />
          <Box pt={15}>{children}</Box>

          <Footer />
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default Wrapper;
