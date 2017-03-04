import * as actions from '../constants/actionTypes';
import initialState from './initialState';
const {home} = initialState;

export default function(state = home, action) {
  switch(action.type) {
    case actions.HOME_FETCH:
      return Object.assign(action.payload.data, state);
    default:
      return state;
  }
}