import React from 'react';
import {shallow} from 'enzyme';
import About from './About';

describe('About Component', () => {
  it('renders the about component', () => {
    const wrapper = shallow(<About />);
    const about = wrapper.find('#about').length;
    const expected = 1;
    expect(about).toEqual(expected);
  });
});