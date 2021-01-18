import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "../components/Title";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Toolbar from "../components/Toolbar";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

export function Transactions(props) {
  const [keyword, setKeyword] = useState("");
  const rows = props.transactions.map((transaction) => {
    return {
      date: transaction.date,
      description: transaction.description,
      category: transaction.category.name,
      amount: transaction.amount,
    };
  });

  const classes = useStyles();

  const populateTable = () => {
    return rows.map((row, idx) => {
      if (keyword === "")
        return (
          <TableRow key={idx + 1}>
            <TableCell key={idx + 2}>{row.date}</TableCell>
            <TableCell key={idx + 3}>{row.description}</TableCell>
            <TableCell key={idx + 4}>{row.category}</TableCell>
            <TableCell key={idx + 5}>{row.amount}</TableCell>
          </TableRow>
        );
      else if (row.description.includes(keyword)) {
        return (
          <TableRow key={idx + 1}>
            <TableCell key={idx + 2}>{row.date}</TableCell>
            <TableCell key={idx + 3}>{row.description}</TableCell>
            <TableCell key={idx + 4}>{row.category}</TableCell>
            <TableCell key={idx + 5}>{row.amount}</TableCell>
          </TableRow>
        );
      } else return;
    });
  };
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Toolbar setKeyword={setKeyword} />
        <Paper className={classes.paper}>
          <Title>Here are all the transactions</Title>

          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{populateTable()}</TableBody>
          </Table>
          <div className={classes.seeMore}>
            <Link color="primary" href="#">
              See more transactions
            </Link>
          </div>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
