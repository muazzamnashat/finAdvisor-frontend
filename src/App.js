import React, { Component } from "react";
// import { API } from "./api/API";
// import Transactions from "./containers/transactions";
// import CenteredTabs from "./components/navMenu";
import Dashboard from "./components/Dashboard";
import { connect } from "react-redux";
import { fetchTransactions } from "./actions/fetchTransactions";
import { fetchCategories } from "./actions/fetchCategories";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import SignUp from "./components/signup";
import Login from "./components/login";

class App extends Component {
  componentDidMount() {
    // if (localStorage.token) {
    this.props.fetchTransactions();
    this.props.fetchCategories();
    // }"
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/login">
              {localStorage.token ? <Redirect to="/" /> : <Login />}
            </Route>
            {/* render={(routerProps) => <Login />} /> */}
            {/* <Route exact path="/login" render={(routerProps) => <Login />} /> */}
            <Route exact path="/signup" render={(routerProps) => <SignUp />} />
            {localStorage.token ? (
              <Route
                path="/"
                render={(routerProps) => (
                  <Dashboard
                    {...routerProps}
                    transactions={this.props.transactions}
                  />
                )}
              />
            ) : (
              <Route path="/">
                <Redirect to="/login" />
              </Route>
            )}
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
    userAlreadyLogged: state.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTransactions: () => dispatch(fetchTransactions()),
    fetchCategories: () => dispatch(fetchCategories()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
