import React, { Component } from "react";
import { API } from "./api/API";
import Transactions from "./containers/transactions";
import CenteredTabs from "./components/navMenu";
import Dashboard from "./components/Dashboard";
import { connect } from "react-redux";
import { fetchTransactions } from "./actions/fetchTransactions";
import { fetchCategories } from "./actions/fetchCategories";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/signup";

class App extends Component {
  componentDidMount() {
    // this.props.fetchTransactions();
    // this.props.fetchCategories();
    // console.log(this.props.transactions)
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/signup" render={(routerProps) => <SignUp />} />
          <Route
            exact
            path="/"
            render={(routerProps) => (
              <Dashboard
                {...routerProps}
                transactions={this.props.transactions}
              />
            )}
          />

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
