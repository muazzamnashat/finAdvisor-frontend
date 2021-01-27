function transactionReducer(state = [], action) {
  switch (action.type) {
    case "START_ADDING_TRANSACTIONS_REQUEST":
      console.log("This is transaction reducer start request section");
      return state;

    case "ADD_TRANSACTIONS":
      console.log("This is transaction reducer adding section");
      const loadedState = state.concat(action.payload);
      return loadedState;

    case "UPDATE_TRANSACTIONS":
      console.log("This is transaction reducer updating section");
      const updatedTransactionIdx = state.findIndex(
        (transaction) => transaction.id === action.payload.id
      );

      return [
        ...state.slice(0, updatedTransactionIdx),
        action.payload,
        ...state.slice(updatedTransactionIdx + 1),
      ];

    case "DELETE_TRANSACTIONS":
      const newState = state.filter(
        (transaction) => transaction.id !== action.payload
      );
      return [...newState];

    default:
      return state;
  }
}

export default transactionReducer;
