import * as types from '../constants/actionTypes';
import reducer from './contactReducer';

describe('Contact Reducer',() => {
  it('should return the initial state', () => {
    const action = {type: 'unknown'};
    expect(reducer(undefined, action)).toMatchSnapshot();
  });

  it('should handle the CONTACT_FETCH action', () => {
    const initialState = {};

    const testData = {
      title: 'Test Contact Title',
      slogan: 'Test Contact Slogan',
      contactInfo: [
        {
          title: 'contact_1',
          icon_url: 'http://test_contact_1.com',
          site_url: 'test@contact_1.com',
        },
        {
          title: 'contact_2',
          icon_url: 'http://test_contact_2.com',
          site_url: 'test@contact_2.com',
        }
      ],
    };

    const action = {
      type: types.CONTACT_FETCH,
      payload: {data: testData}
    };
    
    expect(reducer(initialState, action)).toMatchSnapshot();
  });
});