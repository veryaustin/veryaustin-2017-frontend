import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import initialState from '../reducers/initialState';
import Home from './Home';

describe('Home Component', () => {
  let middlewares, mockStore, store;
  beforeEach(() => {
    middlewares = [];
    mockStore = configureStore(middlewares);
    store = mockStore(initialState);
  });

  it('renders the home component', () => {
    const wrapper = shallow(<Home store={store} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});