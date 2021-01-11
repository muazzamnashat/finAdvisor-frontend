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
    minWidth: 150,
    maxWidth: 500
  },
});



export default function TransactionsTable(props) {
    // debugger
    console.log("I am from ", props)
  const classes = useStyles();
  const dateFormat = require("dateformat");
  const rows = props.transactions.map(transaction => {
    return { date: transaction.date , description: transaction.description, category: transaction.category.name, amount: transaction.amount}
      })
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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {dateFormat(row.date, "mmmm dS, yyyy")}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">
                  {new Intl.NumberFormat("en-US", { style: "currency",
                                                    currency: "USD"
                                                  }).format(row.amount)}
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
