import * as actions from '../constants/actionTypes';
import initialState from './initialState';
const {contact} = initialState;

export default function(state = contact, action) {
  switch(action.type) {
    case actions.CONTACT_FETCH:
      return Object.assign(action.payload.data, state);
    default:
      return state;
  }
}