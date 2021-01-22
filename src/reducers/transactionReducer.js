function transactionReducer(state = [], action) {
  switch (action.type) {
    case "START_ADDING_TRANSACTIONS_REQUEST":
      return state;

    case "ADD_TRANSACTIONS":
      return [...state, action.payload];

    case "UPDATE_TRANSACTIONS":
      let updatedTransactionIdx = state.findIndex(
        (transaction) => transaction.id === action.payload.id
      );
      let updatedState = [...state];
      updatedState[updatedTransactionIdx] = action.payload;
      return updatedState;

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
