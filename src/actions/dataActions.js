import * as actions from '../constants/actionTypes';
import {DATA_ROOT_URL} from '../constants/apiEndpoints';
import axios from 'axios';

export function fetchData(path = '/') {
  const page = (path == '/' ? 'home' : path);
  const url = `${DATA_ROOT_URL}/${page}.json`;
  const request = axios.get(url)
    .catch((error) => {
      console.log(`Failed to fetch ${page} page data`, error);
    });

  return {
    type: actions.DATA_FETCH,
    payload: request
  };
}
