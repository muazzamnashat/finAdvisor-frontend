const ROOT_URL = "http://localhost:3000/api/v1";

export function fetchTransactions() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_TRANSACTIONS_REQUEST' });
      fetch(`${ROOT_URL}/user_transactions?id=${2}`)
        .then(response => response.json())
        .then(response => {
            // debugger
            response.forEach(resp => dispatch({ type: 'ADD_TRANSACTIONS', payload: resp}))})
    };
}