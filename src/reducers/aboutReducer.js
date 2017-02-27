import * as actions from '../constants/actionTypes';

export default function(state = {}, action) {
  switch(action.type) {
    case actions.ABOUT_FETCH:
      return Object.assign(...state, action.payload.data);
    default:
      return state;
  }
}