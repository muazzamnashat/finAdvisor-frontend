import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import {
  updateTransaction,
  deleteTransaction,
} from "../actions/fetchTransactions";
import uuid from "react-uuid";
import DeleteConfirmation from "./DeleteConfirmation";
class Transaction extends React.Component {
  state = {
    openDialog: false,
    data: {
      id: this.props.row.id,
      date: this.props.row.date,
      description: this.props.row.description,
      category_id: this.props.row.category_id,
      amount: this.props.row.amount,
      user_id: this.props.row.user_id,
      category: this.props.row.category,
      deposit: this.props.row.deposit,
    },
  };

  showType = () => {
    if (this.state.data.deposit) {
      return <p id="type">Deposit</p>;
    } else {
      return <p id="type">Withdraw</p>;
    }
  };

  handleEdit = () => {
    this.setState({ ...this.state, currentlyEditing: true });
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

      case "type":
        this.setState((prevState) => {
          return {
            ...prevState,
            data: { ...prevState.data, deposit: event.target.value },
          };
        });
        break;

      case "category":
        const categoryName = this.props.categories.find(
          (category) => category.id === event.target.value
        ).name;
        // debugger;
        this.setState((prevState) => {
          return {
            ...prevState,
            data: {
              ...prevState.data,
              category_id: event.target.value,
              category: { name: categoryName },
            },
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

  handleUpdate = () => {
    const categoryName = this.props.categories.find(
      (category) => category.id === this.state.data.category_id
    ).name;
    const updatedData = {
      ...this.state.data,
      category: { name: categoryName },
    };
    this.props.updateTransaction(updatedData);
  };

  handleDelete = () => {
    this.setState({ ...this.state, openDialog: true });
  };

  confirmDelete = (term) => {
    if (term) this.props.deleteTransaction(this.state.data.id);
    this.setState({ ...this.state, openDialog: false });
  };

  // hide the buttons when displayed on recent transactions table
  showButton() {
    // debugger;
    if (this.props.showBtn) {
      return (
        <TableCell key={uuid()}>
          {this.state.currentlyEditing ? (
            <DoneIcon
              name="done"
              color="primary"
              onClick={this.handleUpdate.bind(this)}
            />
          ) : (
            <>
              <EditIcon color="primary" name="edit" onClick={this.handleEdit} />
              <DeleteIcon
                id={this.state.data.id}
                color="primary"
                onClick={this.handleDelete}
              />
            </>
          )}
        </TableCell>
      );
    }
  }
  render() {
    {
      const date = this.state.data.date.split("T0")[0].split("-");
      var formattedDate = `${date[1]}-${date[2]}-${date[0]}`;
    }
    return (
      <>
        {/* Delete confirmation */}
        <TableRow hover={true}>
          {this.state.openDialog ? (
            <TableCell>
              <DeleteConfirmation
                confirmDelete={this.confirmDelete.bind(this)}
              />
            </TableCell>
          ) : null}

          {/* this is date section */}
          <TableCell>
            {this.state.currentlyEditing ? (
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
              <p id="date">{formattedDate}</p>
            )}
          </TableCell>

          {/* description */}

          <TableCell>
            {this.state.currentlyEditing ? (
              <TextareaAutosize
                name="description"
                defaultValue={this.state.data.description}
                onChange={this.handleChange}
              />
            ) : (
              <p id="description">{this.state.data.description}</p>
            )}
          </TableCell>

          {/* category */}

          <TableCell>
            {this.state.currentlyEditing ? (
              <TextField
                select
                name="category"
                value={this.state.data.category_id}
                onChange={this.handleChange}
                helperText="Please select a category"
              >
                {this.props.categories.map((category, index) => {
                  return (
                    <MenuItem
                      key={uuid()}
                      value={category.id}
                      name={category.name}
                    >
                      {category.name}
                    </MenuItem>
                  );
                })}
              </TextField>
            ) : (
              <p id="category">{this.state.data.category.name}</p>
            )}
          </TableCell>

          {/* Type */}

          <TableCell>
            {this.state.currentlyEditing ? (
              <TextField
                select
                name="type"
                value={this.state.data.deposit}
                onChange={this.handleChange}
                helperText="Please select a type"
              >
                {[
                  <MenuItem key={uuid()} value={true}>
                    Deposit
                  </MenuItem>,

                  <MenuItem key={uuid()} value={false}>
                    Withdraw
                  </MenuItem>,
                ]}
              </TextField>
            ) : (
              this.showType()
            )}
          </TableCell>

          {/* amount */}
          <TableCell>
            {this.state.currentlyEditing ? (
              <TextField
                type="number"
                name="amount"
                onChange={this.handleChange}
                defaultValue={this.state.data.amount}
              />
            ) : (
              <p id="amount">{this.state.data.amount}</p>
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
    updateTransaction: (data) => dispatch(updateTransaction(data)),
    deleteTransaction: (id) => dispatch(deleteTransaction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
