import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

export const Transaction = ({ row, idx, showBtn }) => {
  // hide the buttons when displayed on recent transactions table
  const showButton = () => {
    if (showBtn) {
      return (
        <TableCell key={idx + 6}>
          <EditIcon color="primary" />
          <DeleteIcon color="primary" />
        </TableCell>
      );
    }
  };
  return (
    <>
      <TableRow key={idx + 1}>
        <TableCell key={idx + 2} onClick={handleChange}>
          {row.date}
        </TableCell>
        <TableCell key={idx + 3}>{row.description}</TableCell>
        <TableCell key={idx + 4}>{row.category}</TableCell>
        <TableCell key={idx + 5}>{row.amount}</TableCell>
        {showButton()}
      </TableRow>
      <TableRow>{/* <EditIcon />
        <DeleteIcon /> */}</TableRow>
    </>
  );
};

const handleChange = (event) => {
  console.log(event.target.innerText);
};
