export default function summaryReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_TOTAL_SPEND":
      // console.log("This is add total_spend");
      return {
        ...state,
        total_spend: { ...state.total_spend, ...action.payload },
      };

    case "ADD_TOTAL_INCOME":
      // console.log("This is add total income");
      return {
        ...state,
        total_income: { ...state.total_income, ...action.payload },
      };
    default:
      return state;
  }
}
