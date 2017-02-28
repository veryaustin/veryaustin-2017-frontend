import * as actions from '../constants/actionTypes';
import {DATA_ROOT_URL} from '../constants/apiEndpoints';
import axios from 'axios';

export function fetchWork(page) {
  const url = `${DATA_ROOT_URL}/${page}.json`;
  const request = axios.get(url)
    .catch(function(error){
      console.log('Failed to fetch work page data', error);
    });

  return {
    type: actions.WORK_FETCH,
    payload: request
  };
}
