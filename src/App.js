import React, { Component } from "react";
import { API } from "./api/API";
import Transactions from "./containers/transactions";
import CenteredTabs from "./components/navMenu";
import Dashboard from "./components/Dashboard";
import { connect } from "react-redux";
import { fetchTransactions } from "./actions/fetchTransactions";
import { fetchCategories } from "./actions/fetchCategories";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/signup";
import Login from "./components/login";

class App extends Component {
  componentDidMount() {
    // if (localStorage.token) {
    this.props.fetchTransactions();
    this.props.fetchCategories();
    // }
    // console.log(this.props.transactions)
  }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" render={(routerProps) => <Login />} />
            <Route exact path="/signup" render={(routerProps) => <SignUp />} />
            <Route
              path="/"
              render={(routerProps) => (
                <Dashboard
                  {...routerProps}
                  transactions={this.props.transactions}
                />
              )}
            />

            {/* <Route
              path="/transactions"
              render={(routerProps) => (
                <Transactions transactions={this.props.transactions} />
              )}
            /> */}
          </Switch>

          {/* <Transactions/> */}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTransactions: () => dispatch(fetchTransactions()),
    fetchCategories: () => dispatch(fetchCategories()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
