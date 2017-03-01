import * as actions from '../constants/actionTypes';
import initialState from './initialState';

export default function(state = initialState.contact, action) {
  switch(action.type) {
    case actions.CONTACT_FETCH:
      return Object.assign(...state, action.payload.data);
    default:
      return state;
  }
}