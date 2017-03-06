import React from 'react';
import {shallow} from 'enzyme';
import Footer from './Footer';

describe ('Footer Component', () => {
  // Component Tests
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('renders the footer', () => {
    const footer = wrapper.find('footer');
    expect(footer).toExist;
  });

  it('renders the year', () => {
    const thisYear = new Date().getFullYear().toString();
    // const date = wrapper.find(thisYear)
    expect(wrapper.find(thisYear)).toExist;
  });
})