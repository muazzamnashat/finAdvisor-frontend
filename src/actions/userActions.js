const ROOT_URL = "http://localhost:3000/api/v1";

import { fetchTransactions } from "./fetchTransactions";
import { fetchCategories } from "./fetchCategories";
import { fetchTotalSpend, fetchTotalIncome } from "./transactionsSummary";

export function signUp(data) {
  return (dispatch) => {
    dispatch({ type: "START_ADDING_USER_REQUEST" });
    fetch(`${ROOT_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        // debugger;
        localStorage.token = response.jwt;
        dispatch({ type: "ADD_USER", payload: response.user });
      });
  };
}

export function LoginUser(data) {
  // const history = useHistory();
  return (dispatch) => {
    dispatch({ type: "START_ADDING_USER_REQUEST" });
    fetch(`${ROOT_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.message) {
          alert(response.message);
        } else {
          localStorage.token = response.jwt;
          dispatch({ type: "ADD_USER", payload: response.user });
          dispatch({ type: "SUCCESS" });

          // load the transactions after login
          dispatch(fetchTransactions());
          // load categories after login
          dispatch(fetchCategories());

          dispatch(fetchTotalSpend());
          dispatch(fetchTotalIncome());
        }
      });
  };
}

export function autoLoginUser() {
  return (dispatch) => {
    dispatch({ type: "START_ADDING_USER_REQUEST" });
    fetch(`${ROOT_URL}/profile`, {
      method: "GET",
      headers: {
        Authorization: localStorage.token,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: "ADD_USER", payload: response.user });
        dispatch({ type: "SUCCESS" });
      });
  };
}
