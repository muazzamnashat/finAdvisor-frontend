import { combineReducers } from "redux";
import transactionReducer from "./transactionReducer";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  transactions: transactionReducer,
  categories: categoryReducer,
  user: userReducer,
});

export default rootReducer;
