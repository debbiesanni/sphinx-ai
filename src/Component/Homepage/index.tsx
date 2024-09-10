"use client";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import DoneIcon from "@mui/icons-material/Done";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { studentData } from "../data";
import { StudentInt, TableColumns } from "@/Utils/type";
import StickyHeadTable from "../Shared/table";

const HomePage = () => {
  const router = useRouter();
  const { listStudents } = studentData();
  const [filteredStudents, setFilteredStudents] = useState(listStudents);

  const handleClick = (student: StudentInt) => {
    router.push(`/student/${student.id}`);
  };

  const columns: TableColumns = [
    { key: "avatar", name: "Avatar", minWidth: 170 },
    { key: "forename", name: "First name", minWidth: 170 },
    { key: "surname", name: "Surname", minWidth: 170 },
    { key: "form", name: "Form", minWidth: 170 },
    { key: "id", name: "Student Id", minWidth: 170 },
    { key: "send", name: "Send", minWidth: 170 }
  ];

  function filterStudents(query: string) {
    const filtered = listStudents.filter((student) => {
      const searchTerm = query.toLowerCase();
      return (
        student.id.toString().includes(searchTerm) ||
        student.forename.toLowerCase().includes(searchTerm) ||
        student.surname.toLowerCase().includes(searchTerm) ||
        student.form.toLowerCase().includes(searchTerm) ||
        (student.send ? "true" : "false").includes(searchTerm)
      );
    });
    setFilteredStudents(filtered);
  }

  const students = filteredStudents?.map(
    (student: StudentInt, index: number) => ({
      index: ++index,
      ...student,
      avatar: <Avatar src={student.avatar} />,
      send: <DoneIcon sx={{ color: student.send ? "green" : "#c1c1c1" }} />
    })
  );

  return (
    <Container>
      <Box
        mb={4}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Typography variant="h3" sx={{ color: "#333" }}>
          List of students
        </Typography>
        <Box>
          <TextField
            label="Search students"
            variant="outlined"
            onChange={(e) => filterStudents(e.target.value)}
          />
        </Box>
      </Box>
      <Box mb={10}>
        <StickyHeadTable
          columns={columns}
          rows={students}
          onClick={handleClick}
        />
      </Box>
    </Container>
  );
};

export default HomePage;
