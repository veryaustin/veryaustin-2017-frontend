import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
// import {Link} from 'react-router';
import Header from './Header';


describe('Header Component', () => {
  // Component Test
  it('renders the header component', () => {
    const wrapper = shallow(<Header />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});