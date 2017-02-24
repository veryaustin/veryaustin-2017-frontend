import {WORK_FETCH} from '../constants/actionTypes';

export default function(state = [], action) {
  switch(action.type) {
    case WORK_FETCH:
      return Object.assign(action.payload.data, state);
    default:
      return state;
  }
}