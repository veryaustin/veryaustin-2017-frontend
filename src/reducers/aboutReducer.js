import * as actions from '../constants/actionTypes';
import initialState from './initialState';
const {about} = initialState;

export default function(state = about, action) {
  switch(action.type) {
    case actions.DATA_FETCH:
      return Object.assign(action.payload.data, state);
    default:
      return state;
  }
}