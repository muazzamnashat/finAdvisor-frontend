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
      //   debugger;
      //   let updatedTransaction = state.find(
      //     (transaction) => transaction.id === action.payload.id
      //   );
      // updatedTransaction = {...updatedTransaction, action.payload }
      //   let updatedState = state;
      state[updatedTransactionIdx] = action.payload;
      return state;

    default:
      return state;
  }
}

export default transactionReducer;
