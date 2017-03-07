import * as types from '../constants/actionTypes';
import reducer from './aboutReducer';

describe('About Reducer',() => {
  it('should return the initial state', () => {
    const action = {type: 'unknown'};
    expect(reducer(undefined, action)).toMatchSnapshot();
  });

  it('should handle the ABOUT_FETCH action', () => {
    const initialState = {};

    const testData = {
      title: 'Test Title',
      intro: 'This is a test of the about introduction',
      photo: 'http://test_about_photo_url'
    };

    const action = {
     type: types.ABOUT_FETCH,
      payload: {data: testData}
    };
    
    expect(reducer(initialState, action)).toMatchSnapshot();
  });
});