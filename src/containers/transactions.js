import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Title from "../components/Title";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Toolbar from "../components/Toolbar";
import Transaction from "../components/Transaction";
import { TransactionTableHead } from "../components/TransactionTableHead";
import { connect } from "react-redux";
import uuid from "react-uuid";

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

function Transactions(props) {
  const [keyword, setKeyword] = useState("");
  let sortedData = props.transactions.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  let rows = sortedData.map((transaction) => {
    return {
      id: transaction.id,
      date: transaction.date,
      description: transaction.description,
      category: transaction.category,
      category_id: transaction.category_id,
      amount: transaction.amount,
      user_id: transaction.user_id,
      deposit: transaction.deposit,
    };
  });

  const classes = useStyles();

  const populateTable = () => {
    return rows.map((row, idx) => {
      if (keyword === "")
        return <Transaction key={uuid()} row={row} showBtn={true} />;
      else if (row.description.includes(keyword))
        return <Transaction key={uuid()} row={row} showBtn={true} />;
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
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTransaction: (data) => dispatch(updateTransaction(data)),
    deleteTransaction: (id) => dispatch(deleteTransaction(id)),
  };
};

export default connect(mapStateToProps)(Transactions);
