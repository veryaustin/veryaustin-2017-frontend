import * as ActionTypes from '../constants/actionTypes';
import axios from 'axios';

const ROOT_URL = 'https://veryaustin-55602.firebaseio.com/';

export function fetchWork(page) {
  const url = `${ROOT_URL}/${page}.json`;
  const request = axios.get(url);

  return {
    type: ActionTypes.WORK_FETCH,
    payload: request
  };
}