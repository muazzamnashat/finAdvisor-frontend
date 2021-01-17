import { combineReducers } from "redux";
import transactionReducer from "./transactionReducer";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  transactions: transactionReducer,
  categories: categoryReducer,
  user: userReducer,
  isLoggedIn: loginReducer,
});

export default rootReducer;
