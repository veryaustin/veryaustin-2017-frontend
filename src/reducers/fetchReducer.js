import * as types from "../constants/actionTypes";
import initialState from "../reducers/initialState";
const { fetching } = initialState;

const fetchReducer = (state = fetching, action) => {
  switch (action.type) {
    case types.FETCH_PAGE_BEGIN:
      return { ...state, isLoading: action.payload };
    case types.FETCH_PAGE_SUCCESS:
      return { ...state, isLoading: action.payload };
    case types.FETCH_PAGE_ERROR:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default fetchReducer;
