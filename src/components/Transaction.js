import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
export const Transaction = ({ row, idx }) => {
  return (
    <>
      <TableRow key={idx + 1}>
        <TableCell key={idx + 2}>{row.date}</TableCell>
        <TableCell key={idx + 3}>{row.description}</TableCell>
        <TableCell key={idx + 4}>{row.category}</TableCell>
        <TableCell key={idx + 5}>{row.amount}</TableCell>
      </TableRow>
    </>
  );
};
