import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import {connect} from "react-redux"

function TransactionForm ({categories}){
const [date,setDate] = useState("")
const [description,setDescription] = useState("")
const [category,setCategory] = useState("")
const [amount,setAmount] = useState(0)

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
const classes = useStyles();
const handleChange = event => {
    switch (event.target.name) {
        case "date":
            setDate(event.target.value)
            break;
        case "description":
            setDescription(event.target.value)
            break;
        case "category":
            setCategory(event.target.value)
            break;
        case "amount":
            setAmount(event.target.value)
            break;
        default:
            break;
    }
  }
 
    return (
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <label>Date</label>
            <TextField type="date" name="date" onChange={handleChange}/>
    
            <label>Description</label>
            <TextField type="text" name="description" onChange={handleChange}/>
            <label>Amount</label>
            <TextField type="number" name="amount" onChange={handleChange}/>
            
            <label>Category</label>
            <TextField
              select
            //   value={currency}
              onChange={handleChange}
              helperText="Please select a category"
            >
              {categories.map((category,index) => (
                <MenuItem key={index} value={category}>
                  {category}
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



const mapStateToProps = state => {
    return {
      categories: state.categories
    }
}
   
  
export default connect(mapStateToProps)(TransactionForm)