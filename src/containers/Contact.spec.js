import React from 'react';
import {shallow} from 'enzyme';
import Contact from './Contact';

describe('Contact Component', () => {
  it('renders the work component', () => {
    const wrapper = shallow(<Contact />);
    const contact = wrapper.find('#contact').length;
    const expected = 1;
    expect(contact).toEqual(expected);
  });
});