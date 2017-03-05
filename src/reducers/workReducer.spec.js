import * as types from '../constants/actionTypes';
import reducer from './workReducer';

describe('Work Reducer',() => {
  it('should return the initial state', () => {
    const action = {type: 'unknown'};
    expect(reducer(undefined, action)).toMatchSnapshot();
  });

  it('should handle the WORK_FETCH action', () => {
    const initialState = {};

    const testData = {
      title: 'Work',
      slogan: 'Test Slogan',
      projects: [
        {
          title: 'Test Project 1 Title',
          summary: 'Test Project 1 Summary',
          description: 'This is a description for Test Project 1',
          image_url: 'http://test_project_1_image_url.com',
          repo_url: 'https://test_project_1_repo_url.com',
          site_url: 'http://test_project_1_site_url.com'
        },
        {
          title: 'Test Project 2 Title',
          summary: 'Test Project 2 Summary',
          description: 'This is a description for Test Project 2',
          image_url: 'http://test_project_2_image_url.com',
          repo_url: 'https://test_project_2_repo_url.com',
          site_url: 'http://test_project_2_site_url.com'
        }
      ]
    };

    const action = {
      type: types.DATA_FETCH,
      payload: {data: testData}
    };
    
    expect(reducer(initialState, action)).toMatchSnapshot();
  });
});