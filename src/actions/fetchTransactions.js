const ROOT_URL = "http://localhost:3000/api/v1";

export function fetchTransactions() {
  return (dispatch) => {
    dispatch({ type: "START_ADDING_TRANSACTIONS_REQUEST" });
    fetch(`${ROOT_URL}/user_transactions`, {
      method: "GET", // or 'PUT'
      headers: {
        Authorization: localStorage.token,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // debugger
        response.forEach((resp) =>
          dispatch({ type: "ADD_TRANSACTIONS", payload: resp })
        );
      });
  };
}

export function addTransaction(data) {
  return (dispatch) => {
    dispatch({ type: "START_ADDING_TRANSACTIONS_REQUEST" });
    fetch(`${ROOT_URL}/transactions`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.token,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        // debugger;
        dispatch({ type: "ADD_TRANSACTIONS", payload: response });
      });
  };
}
