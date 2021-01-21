import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import Moment from "react-moment";

class Transaction extends React.Component {
  state = {
    currentlyEditing: false,
    currentlyEditingDate: false,
    currentlyEditingDescription: false,
    currentlyEditingCategory: false,
    currentlyEditingAmount: false,
    data: {
      id: this.props.row.id,
      date: this.props.row.date,
      description: this.props.row.description,
      category_id: this.props.row.category_id,
      amount: this.props.row.amount,
      user_id: this.props.row.user_id,
    },
  };

  handleSwitch = (event) => {
    switch (event.target.id) {
      case "date":
        this.setState((prevState) => {
          return {
            ...prevState,
            currentlyEditing: true,
            currentlyEditingDate: true,
          };
        });
        break;

      case "description":
        this.setState((prevState) => {
          return {
            ...prevState,
            currentlyEditing: true,
            currentlyEditingDescription: true,
          };
        });
        break;

      case "category":
        this.setState((prevState) => {
          return {
            ...prevState,
            currentlyEditing: true,
            currentlyEditingCategory: true,
          };
        });
        break;

      case "amount":
        this.setState((prevState) => {
          return {
            ...prevState,
            currentlyEditing: true,
            currentlyEditingAmount: true,
          };
        });
        break;

      default:
        break;
    }
  };

  handleChange = (event) => {
    switch (event.target.name) {
      case "date":
        this.setState((prevState) => {
          return {
            ...prevState,
            data: {
              ...prevState.data,
              date: event.target.value,
            },
          };
        });
        break;
      case "description":
        this.setState((prevState) => {
          return {
            ...prevState,
            data: { ...prevState.data, description: event.target.value },
          };
        });
        break;
      case "category":
        this.setState((prevState) => {
          return {
            ...prevState,
            data: { ...prevState.data, category_id: event.target.value },
          };
        });
        break;
      case "amount":
        this.setState((prevState) => {
          return {
            ...prevState,
            data: { ...prevState.data, amount: parseFloat(event.target.value) },
          };
        });
        break;
      default:
        break;
    }
  };

  handleUpdate() {
    const categoryName = this.props.categories.find(
      (category) => category.id === this.state.data.category_id
    ).name;
    const updatedData = {
      ...this.state.data,
      category: { name: categoryName },
    };
    this.props.updateTransaction(updatedData);

    console.log(this.state.data);
  }
  // hide the buttons when displayed on recent transactions table
  showButton() {
    // debugger;
    if (this.props.showBtn) {
      return (
        <TableCell key={this.props.idx + 6}>
          {this.state.currentlyEditing ? (
            <DoneIcon id="done" onClick={this.handleUpdate.bind(this)} />
          ) : (
            <DeleteIcon color="primary" />
          )}
        </TableCell>
      );
    }
  }
  render() {
    // {
    //   debugger;
    // }
    return (
      <>
        <TableRow key={this.props.idx + 1}>
          {/* this is date section */}
          <TableCell key={this.props.idx + 2}>
            {this.state.currentlyEditingDate ? (
              <TextField
                name="date"
                label="Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.handleChange}
              />
            ) : (
              <p id="date" onClick={this.handleSwitch}>
                <Moment format="MM/DD/YYYY">{this.props.row.date}</Moment>
              </p>
            )}
          </TableCell>

          {/* description */}

          <TableCell key={this.props.idx + 3}>
            {this.state.currentlyEditingDescription ? (
              <TextareaAutosize
                name="description"
                defaultValue={this.props.row.description}
                onChange={this.handleChange}
              />
            ) : (
              <p id="description" onClick={this.handleSwitch}>
                {this.props.row.description}
              </p>
            )}
          </TableCell>

          {/* category */}

          <TableCell key={this.props.idx + 4}>
            {this.state.currentlyEditingCategory ? (
              <TextField
                select
                name="category"
                value={this.state.data.category_id}
                onChange={this.handleChange}
                helperText="Please select a category"
              >
                {this.props.categories.map((category, index) => {
                  return (
                    <MenuItem key={index} value={category.id}>
                      {category.name}
                    </MenuItem>
                  );
                })}
              </TextField>
            ) : (
              <p id="category" onClick={this.handleSwitch}>
                {this.props.row.category.name}
              </p>
            )}
          </TableCell>

          {/* amount */}
          <TableCell key={this.props.idx + 5}>
            {this.state.currentlyEditingAmount ? (
              <TextField
                type="number"
                name="amount"
                onChange={this.handleChange}
                defaultValue={this.props.row.amount}
              />
            ) : (
              <p id="amount" onClick={this.handleSwitch}>
                {this.props.row.amount}
              </p>
            )}
          </TableCell>
          {this.showButton()}
        </TableRow>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTransaction: (data) =>
      dispatch({ type: "UPDATE_TRANSACTIONS", payload: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
