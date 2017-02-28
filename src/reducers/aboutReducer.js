import * as actions from '../constants/actionTypes';
import initialState from './initialState';

export default function(state = initialState.about, action) {
  switch(action.type) {
    case actions.ABOUT_FETCH:
      return Object.assign(...state, action.payload.data);
    default:
      return state;
  }
}