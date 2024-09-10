"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function StickyHeadTable({
  columns,
  rows,
  onClick
}: {
  columns: Array<any>;
  rows: Array<any>;
  onClick?: (value) => void;
}) {
  return (
    <Paper sx={{ overflow: "hidden" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontWeight: 700,
                    color: "#563768"
                  }}
                >
                  {column.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.id}
                  onClick={() => onClick && onClick(row)}
                  sx={{ cursor: onClick ? "pointer" : "" }}
                >
                  {columns.map((column) => {
                    const value = row[column.key];
                    return (
                      <TableCell key={column.key} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
