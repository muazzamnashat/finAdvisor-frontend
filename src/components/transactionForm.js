import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    },
   button: {
        margin: theme.spacing(1),
    },
  }
}));

export default function TransactionForm() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <label>Date</label>
        <TextField type="date" />

        <label>Description</label>
        <TextField type="text" />
        <label>Amount</label>
        <TextField type="number" />
        
        <label>Category</label>
        <TextField
          select
          value={currency}
          onChange={handleChange}
          helperText="Please select a category"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <Button
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
