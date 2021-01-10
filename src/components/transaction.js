import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

// function createData(date, description, category, amount) {
//   return { date, description, category, amount};
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24),
//   createData("Ice cream sandwich", 237, 9.0, 37),
//   createData("Eclair", 262, 16.0, 24),
//   createData("Cupcake", 305, 3.7, 67),
//   createData("Gingerbread", 356, 16.0, 49),
// ];

export default function TransactionsTable(props) {
    // console.log("I am from ", props.transactions)
  const classes = useStyles();

//   const rows = props.transactions.map(transaction => createData(transaction[0],transaction[1],transaction[2],transaction[3]));
// console.log(rows)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.transactions.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
