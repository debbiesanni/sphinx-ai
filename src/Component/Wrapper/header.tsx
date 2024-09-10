"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        py: 2,
        background: "#fff",
        color: "black",
        boxShadow: "none",
        transition: "background 100ms ease-out"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Box>
            <Link href="/">
              <Box sx={{ width: 200 }}>
                <Image
                  src="/images/logo.png"
                  alt="Sphinx AI"
                  priority
                  fill
                  objectFit="contain"
                />
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
