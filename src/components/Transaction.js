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
import {
  updateTransaction,
  deleteTransaction,
} from "../actions/fetchTransactions";
import uuid from "react-uuid";

class Transaction extends React.Component {
  state = {
    currentlyEditing: false,
    currentlyEditingDate: false,
    currentlyEditingDescription: false,
    currentlyEditingCategory: false,
    currentlyEditingAmount: false,
    currentlyEditingType: false,
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

  //   showType = () => {
  //     if (this.state.data.deposit) {
  //       return (
  //         <p id="type" onClick={this.handleSwitch}>
  //           Deposit
  //         </p>
  //       );
  //     } else {
  //       return (
  //         <p id="type" onClick={this.handleSwitch}>
  //           Withdraw
  //         </p>
  //       );
  //     }
  //   };

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

      case "type":
        this.setState((prevState) => {
          return {
            ...prevState,
            currentlyEditing: true,
            currentlyEditingType: true,
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

  handleUpdate() {
    const categoryName = this.props.categories.find(
      (category) => category.id === this.state.data.category_id
    ).name;
    const updatedData = {
      ...this.state.data,
      category: { name: categoryName },
    };

    this.props.updateTransaction(updatedData);

    this.setState((prevState) => {
      return {
        ...prevState,
        currentlyEditing: false,
        currentlyEditingDate: false,
        currentlyEditingDescription: false,
        currentlyEditingCategory: false,
        currentlyEditingAmount: false,
      };
    });
  }

  //   handleDelete() {
  //     this.props.deleteTransaction(this.state.data.id);
  //     this.setState({});
  //   }

  // hide the buttons when displayed on recent transactions table
  showButton() {
    // debugger;
    if (this.props.showBtn) {
      return (
        <TableCell key={uuid()}>
          {
            this.state.currentlyEditing ? (
              <DoneIcon name="done" onClick={this.handleUpdate.bind(this)} />
            ) : null
            //   (
            //     <DeleteIcon
            //       id={this.state.data.id}
            //       color="primary"
            //       onClick={this.handleDelete.bind(this)}
            //     />
            //   )
          }
        </TableCell>
      );
    } else {
      return (
        <TableCell key={uuid()}>
          {this.state.currentlyEditing ? (
            <DoneIcon id="done" onClick={this.handleUpdate.bind(this)} />
          ) : null}
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
        <TableRow key={uuid()}>
          {/* this is date section */}
          <TableCell key={uuid()}>
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
                <Moment format="MM/DD/YYYY">{this.state.data.date}</Moment>
              </p>
            )}
          </TableCell>

          {/* description */}

          <TableCell key={uuid()}>
            {this.state.currentlyEditingDescription ? (
              <TextareaAutosize
                name="description"
                defaultValue={this.state.data.description}
                onChange={this.handleChange}
              />
            ) : (
              <p id="description" onClick={this.handleSwitch}>
                {this.state.data.description}
              </p>
            )}
          </TableCell>

          {/* category */}

          <TableCell key={uuid()}>
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
              <p id="category" onClick={this.handleSwitch}>
                {this.state.data.category.name}
              </p>
            )}
          </TableCell>

          {/* Type */}

          {/* <TableCell
            key={this.props.idx + (Math.floor(Math.random() * 10) + 1)}
          >
            {this.state.currentlyEditingType ? (
              <TextField
                select
                name="type"
                value={this.state.data.deposit}
                onChange={this.handleChange}
                helperText="Please select a type"
              >
                {[
                  <MenuItem value={true}>Deposit</MenuItem>,

                  <MenuItem value={false}>Withdraw</MenuItem>,
                ]}
              </TextField>
            ) : (
              this.showType()
            )}
          </TableCell> */}

          {/* amount */}
          <TableCell key={uuid()}>
            {this.state.currentlyEditingAmount ? (
              <TextField
                type="number"
                name="amount"
                onChange={this.handleChange}
                defaultValue={this.state.data.amount}
              />
            ) : (
              <p id="amount" onClick={this.handleSwitch}>
                {this.state.data.amount}
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
    updateTransaction: (data) => dispatch(updateTransaction(data)),
    deleteTransaction: (id) => dispatch(deleteTransaction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
