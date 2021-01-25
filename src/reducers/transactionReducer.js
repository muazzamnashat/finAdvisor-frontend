function transactionReducer(state = [], action) {
  switch (action.type) {
    case "START_ADDING_TRANSACTIONS_REQUEST":
      return state;

    case "ADD_TRANSACTIONS":
      return [action.payload, ...state];

    case "UPDATE_TRANSACTIONS":
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
