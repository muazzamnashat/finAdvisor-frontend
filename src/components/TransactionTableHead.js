import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export const TransactionTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Date</TableCell>
        <TableCell>Description</TableCell>
        <TableCell>Category</TableCell>
        <TableCell>Type</TableCell>
        <TableCell>Amount</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
};
