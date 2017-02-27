import * as ActionTypes from '../constants/actionTypes';
import {ROOT_URL} from '../constants/apiEndpoints';
import axios from 'axios';

export function fetchWork(page) {
  const url = `${ROOT_URL}/${page}.json`;
  const request = axios.get(url)
    .catch(function(error){
      console.log(error);
    });

  return {
    type: ActionTypes.WORK_FETCH,
    payload: request
  };
}
