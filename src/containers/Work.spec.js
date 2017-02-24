import React from 'react';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import Work from './Work';

describe('Work Component', () => {
  let initialState, middlewares, mockStore, store;
  beforeEach(() => {
    initialState = {
      work: [
        {
          description: 'Test Description 1',
          image_url: 'http://lorempixel.com/180/180/cats',
          repo_url: 'https://test_repo_url_1',
          site_url: 'http://test_site_url_1',
          summary: 'Summary 1',
          title: 'Title 1'
        },
        {
          description: 'Test Description 2',
          image_url: 'http://lorempixel.com/180/180/cats',
          repo_url: 'https://test_repo_url_2',
          site_url: 'http://test_site_url_2',
          summary: 'Summary 2',
          title: 'Title 2'
        }
      ]
    };
    middlewares = [];
    mockStore = configureStore(middlewares);
    store = mockStore(initialState);
  });

  it('renders the work component', () => {
    const wrapper = mount(<Work store={store}/>);
    const work = wrapper.find('#work').length;
    const expected = 1;
    expect(work).toEqual(expected);
  });
});