import * as actions from '../constants/actionTypes';
import {DATA_ROOT_URL} from '../constants/apiEndpoints';
import axios from 'axios';

export function fetchContact(page) {
  const url = `${DATA_ROOT_URL}/${page}.json`;
  const request = axios.get(url)
    .catch((error) => {
      console.log('Failed to fetch the contact page data', error);
    });
  
  return {
    type: actions.CONTACT_FETCH,
    payload: request
  };
}