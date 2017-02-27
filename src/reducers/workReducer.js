import * as actions from '../constants/actionTypes';
import initialState from './initialState';

export default function(state = initialState.work, action) {
  switch(action.type) {
    case actions.WORK_FETCH:
      return Object.assign(...state, action.payload.data);
    default:
      return state;
  }
}