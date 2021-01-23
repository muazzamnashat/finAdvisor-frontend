const ROOT_URL = "http://localhost:3000/api/v1";

export function fetchTotalSpend() {
  return (dispatch) => {
    dispatch({ type: "START_ADDING_TRANSACTIONS_REQUEST" });
    fetch(`${ROOT_URL}/total_spend`, {
      method: "GET",
      headers: {
        Authorization: localStorage.token,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // debugger;
        Object.keys(response).forEach((key) => {
          const monthStr = new Date(key).toLocaleString("default", {
            month: "long",
          });
          const payload = { [monthStr]: response[key] };
          //   debugger;
          dispatch({
            type: "ADD_TOTAL_SPEND",
            payload,
          });
        });
      });
  };
}

export function fetchTotalIncome() {
  return (dispatch) => {
    dispatch({ type: "START_ADDING_TRANSACTIONS_REQUEST" });
    fetch(`${ROOT_URL}/total_income`, {
      method: "GET",
      headers: {
        Authorization: localStorage.token,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // debugger;
        Object.keys(response).forEach((key) => {
          const monthStr = new Date(key).toLocaleString("default", {
            month: "long",
          });
          const payload = { [monthStr]: response[key] };
          //   debugger;
          dispatch({
            type: "ADD_TOTAL_INCOME",
            payload,
          });
        });
      });
  };
}
