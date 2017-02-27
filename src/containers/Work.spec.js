import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Work from './Work';
import initialState from '../reducers/initialState';

describe('Work Component', () => {
  let middlewares, mockStore, store;
  beforeEach(() => {
    middlewares = [];
    mockStore = configureStore(middlewares);
    store = mockStore(initialState);
  });
  
  it('renders the work component', () => {
    const wrapper = shallow(<Work store={store} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});