import * as actions from '../constants/actionTypes';
import initialState from './initialState';
const {work} = initialState;

export default function(state = work, action) {
  switch(action.type) {
    case actions.DATA_FETCH:
      return Object.assign(action.payload.data, state);
    default:
      return state;
  }
}