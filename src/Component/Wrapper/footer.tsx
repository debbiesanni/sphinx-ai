"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "#563768",
        mt: 5,
        py: 5,
        width: "100%"
      }}
    >
      <Container>
        <Typography variant="h3" sx={{ color: "#fff" }}>
          Footer
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
