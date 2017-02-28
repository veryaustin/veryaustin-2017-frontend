import * as actions from '../constants/actionTypes';
import {DATA_ROOT_URL} from '../constants/apiEndpoints';
import axios from 'axios';

export function fetchAbout(page) {
  const url = `${DATA_ROOT_URL}/${page}.json`;
  const request = axios.get(url)
    .catch(function(error){
      console.log(error);
    });

  return {
    type: actions.ABOUT_FETCH,
    payload: request
  };
}
