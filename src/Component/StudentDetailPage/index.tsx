"use client";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import DoneIcon from "@mui/icons-material/Done";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { useParams } from "next/navigation";
import { studentData } from "../data";

const StudentDetailPage = () => {
  const { studentDetails } = studentData();
  const params = useParams();
  const { id } = params;
  const student = studentDetails(id as string);
  return (
    <Container>
      <Box height={{ xs: "110vh", md: "70vh" }}>
        <Typography variant="h3" sx={{ color: "#333", mb: 1, mt: 4 }}>
          Student detail page
        </Typography>
        <Typography mb={4}>{id}</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            maxHeight: 500,
            height: "100%",
            background: "#f1f1f1",
            borderRadius: 4
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              height: 500,
              background: "linear-gradient(to right, #563768, #7a3f7c)",
              display: "flex",
              justifyContent: "center",
              borderRadius: { xs: 4, md: "20px 0 0 20px" }
            }}
          >
            <Box
              sx={{
                mt: { xs: 10 },
                textAlign: "center",
                position: "relative"
              }}
            >
              <Avatar src={student.avatar} sx={{ width: 150, height: 150 }} />
              <Box mt={5} sx={{ background: "" }}>
                <Typography
                  variant="h4"
                  sx={{ color: "#fff", textAlign: "center" }}
                >
                  {student.forename} {student.surname}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", textAlign: "center", mt: 1 }}
                >
                  Form: {student.form}
                </Typography>
                <Box
                  mt={1}
                  sx={{
                    display: "flex",
                    justifyContent: "Center"
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "Center",
                      alignItems: "center",
                      borderRadius: "50%",
                      height: 30,
                      width: 30,
                      background: "#fff"
                    }}
                  >
                    <DoneIcon sx={{ color: student.send ? "green" : "#333" }} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "57%" },
              height: { xs: 450, md: 500 },
              background: "#f1f1f1",
              borderRadius: { xs: 0, md: "0 20px 20px 0" },
              py: 4,
              pr: 4,
              pl: 2
            }}
          >
            <Box borderBottom="solid 1px #dbdbdb">
              <Typography variant="h4" mb={2}>
                Basic Information
              </Typography>
            </Box>
            <Box
              borderBottom="solid 1px #dbdbdb"
              sx={{ display: "flex", justifyContent: "space-evenly", mt: 6 }}
            >
              <Box>
                <Typography variant="h4" mb={2}>
                  Firstname
                </Typography>
                <Typography variant="h5" mb={2}>
                  {student.forename}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" mb={2}>
                  Surname
                </Typography>
                <Typography variant="h5" mb={6}>
                  {student.surname}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="h4" mt={5}>
                Media handles
              </Typography>
              <Box textAlign="center" mt={5}>
                <FacebookIcon sx={{ fontSize: 35, color: "#3b5998", mr: 2 }} />
                <XIcon sx={{ fontSize: 35, color: "#333", mr: 2 }} />
                <LinkedInIcon sx={{ fontSize: 35, color: "#0077B5", mr: 2 }} />
                <InstagramIcon sx={{ fontSize: 35, color: "#bc2a8d" }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default StudentDetailPage;
