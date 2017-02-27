import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import About from './About';
import initialState from '../reducers/initialState';

describe('About Component', () => {
 let middlewares, mockStore, store;
 beforeEach(() => {
  middlewares = [];
  mockStore = configureStore(middlewares);
  store = mockStore(initialState);
 });

 it('renders the about component', () => {
    const wrapper = shallow(<About store={store} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});