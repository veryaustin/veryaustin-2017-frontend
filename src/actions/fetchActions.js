import axios from "axios";
import * as types from "../constants/actionTypes";
import { DATA_ROOT_URL } from "../constants/apiEndpoints";

export const fetchPage = page => {
  return dispatch => {
    const url = `${DATA_ROOT_URL}/${page}.json`;
    dispatch(fetchPageBegin());
    return axios
      .get(url)
      .then(res => {
        dispatch(fetchPageSuccess());
        dispatch(receivePageData(page, res.data));
      })
      .catch(error => {
        dispatch(fetchPageError(error));
      });
  };
};

export const fetchPageBegin = () => {
  return {
    type: types.FETCH_PAGE_BEGIN,
    payload: true
  };
};

export const fetchPageSuccess = () => {
  return {
    type: types.FETCH_PAGE_SUCCESS,
    payload: false
  };
};

export const fetchPageError = error => {
  return {
    type: types.FETCH_PAGE_ERROR,
    payload: {
      isLoading: false,
      error: error.message
    }
  };
};

export const receivePageData = (page, payload) => {
  return {
    type: types.RECEIVE_POSTS,
    payload,
    page
  };
};
