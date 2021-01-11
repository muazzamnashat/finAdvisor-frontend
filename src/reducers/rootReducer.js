import { combineReducers } from "redux";
import transactionReducer from "./transactionReducer"
import categoryReducer from "./categoryReducer"
const rootReducer = combineReducers({
  transactions: transactionReducer,
  categories: categoryReducer,
});
 
export default rootReducer;