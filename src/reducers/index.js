import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import fetchReducer from "./fetchReducer";
import pagesReducer from "./pagesReducer";

const rootReducer = combineReducers({
  routing: routerReducer,
  pages: pagesReducer,
  fetching: fetchReducer
});

export default rootReducer;
