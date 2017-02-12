import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

describe('Header Component', () => {
  // Shallow rendering for each test
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  
  // Component Tests
  it('renders the header component', () => {
    const header = wrapper.type();
    const expected = 'header';

    expect(header).toEqual(expected);
  });

  // Logo Tests
  describe('Logo', () => {
    it('exists on the page', () => {
      const logo = wrapper.find('.logo').length;
      const expected = 1;
      expect(logo).toEqual(expected);
    });

    it('contains the text Austin Lauritsen', () => {
      const logo = wrapper.find('.logo');
      const expected = 'Austin Lauritsen';
      expect(logo.childAt(0).text()).toEqual(expected);
    });

    it('links to the home page', () => {
      const link = wrapper.find('Link').first();
      expect(link.props().to).toBe('/');
    });

  });
});