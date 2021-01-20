import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Title from "../components/Title";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Toolbar from "../components/Toolbar";
import { Transaction } from "../components/Transaction";
import { TransactionTableHead } from "../components/TransactionTableHead";

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
        return <Transaction key={idx} row={row} idx={idx} showBtn={true} />;
      else if (row.description.includes(keyword))
        return <Transaction key={idx} row={row} idx={idx} showBtn={true} />;
      else return;
    });
  };

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Toolbar setKeyword={setKeyword} />
        <Paper className={classes.paper}>
          <Title>Here are all the transactions</Title>

          <Table size="small">
            <TransactionTableHead />
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
