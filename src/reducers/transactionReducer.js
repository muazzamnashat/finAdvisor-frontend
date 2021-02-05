function transactionReducer(state = { list: [], loading: false }, action) {
  switch (action.type) {
    case "START_ADDING_TRANSACTIONS_REQUEST":
      return { ...state, loading: true };

    case "ADD_TRANSACTIONS":
      const loadedState = {
        list: [...state.list, ...action.payload],
        loading: false,
      };
      return loadedState;

    case "UPDATE_TRANSACTIONS":
      const updatedTransactionIdx = state.findIndex(
        (transaction) => transaction.id === action.payload.id
      );

      return {
        list: [
          ...state.slice(0, updatedTransactionIdx),
          action.payload,
          ...state.slice(updatedTransactionIdx + 1),
        ],
        loading: false,
      };

    case "DELETE_TRANSACTIONS":
      const newState = state.filter(
        (transaction) => transaction.id !== action.payload
      );
      return { list: [...newState], loading: false };

    default:
      return state;
  }
}

export default transactionReducer;
