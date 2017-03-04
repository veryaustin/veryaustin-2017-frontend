import * as types from '../constants/actionTypes';
import reducer from './homeReducer';

describe('Home Reducer',() => {
  it('should return the initial state', () => {
    const action = {type: 'unknown'};
    expect(reducer(undefined, action)).toMatchSnapshot();
  });

  it('should handle the HOME_FETCH action', () => {
    const initialState = {};

    const testData = {
      image_url: 'test_url',
      name: 'test_name',
      slogan: 'test_slogan'
    };

    const action = {
      type: types.HOME_FETCH,
      payload: {data: testData}
    };
    
    expect(reducer(initialState, action)).toMatchSnapshot();
  });
});