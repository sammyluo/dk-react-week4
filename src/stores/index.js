import { combineReducers } from "redux";
import stockReducer from "./stock/reducer";

const reducers = {
  stock: stockReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
