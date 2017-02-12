import React from 'react';
import {shallow} from 'enzyme';
import Navigation from './Navigation';

describe('Navigation Component', () => {
  it('should render the navigation component', () => {
    const wrapper = shallow(<Navigation />);
    const navigation = wrapper.type();
    const expected = 'nav';
    expect(navigation).toEqual(expected);
  });

});