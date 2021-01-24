import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { connect } from "react-redux";
import { addTransaction } from "../actions/fetchTransactions";

function TransactionForm({ categories, setShowForm, addTransaction }) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [amount, setAmount] = useState(0);
  const [deposit, setDeposit] = useState("");
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
      button: {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();
  const handleChange = (event) => {
    event.preventDefault();
    switch (event.target.name) {
      case "date":
        setDate(event.target.value);
        break;
      case "description":
        setDescription(event.target.value);
        break;
      case "category":
        setCategory_id(event.target.value);
        break;
      case "amount":
        setAmount(event.target.value);
        break;
      case "type":
        setDeposit(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    const data = { date, category_id, amount, description, deposit };
    // debugger;
    console.log(data);
    addTransaction({ transaction: data });
    setShowForm(false);
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <label>Date</label>
        <TextField type="date" name="date" onChange={handleChange} />

        <label>Description</label>
        <TextField type="text" name="description" onChange={handleChange} />
        <label>Amount</label>
        <TextField type="number" name="amount" onChange={handleChange} />

        <label>Category</label>
        <TextField
          select
          name="category"
          value={category_id}
          onChange={handleChange}
          helperText="Please select a category"
        >
          {categories.map((category, index) => (
            <MenuItem key={index} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </TextField>

        <label>Type</label>
        <TextField
          select
          name="type"
          value={deposit}
          onChange={handleChange}
          helperText="Please select type"
        >
          [ <MenuItem value={true}>Deposit</MenuItem>,
          <MenuItem value={false}>Withdraw</MenuItem>]
        </TextField>
      </div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Create Transaction
      </Button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTransaction: (data) => dispatch(addTransaction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
