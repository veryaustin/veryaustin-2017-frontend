import * as types from "../constants/actionTypes";
import initialState from "./initialState";
const { pages } = initialState;

const pagesReducer = (state = pages, action) => {
  switch (action.type) {
    case types.RECEIVE_POSTS:
      return { ...state, [action.page]: action.payload };
    default:
      return state;
  }
};

export default pagesReducer;
