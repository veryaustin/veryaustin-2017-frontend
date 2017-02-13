import React from 'react';
import {shallow} from 'enzyme';
import Home from './Home';

describe('Home Component', () => {
  it('renders the home component', () => {
    const wrapper = shallow(<Home />);
    const home = wrapper.find('#home').length;
    const expected = 1;
    expect(home).toEqual(expected);
  });
});