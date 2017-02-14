import React from 'react';
import {shallow} from 'enzyme';
import Navigation from './Navigation';

describe('Navigation Component', () => {
  // Shallow rendering for each test
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  });

  // Component Tests
  it('should render the navigation component', () => {
    const wrapper = shallow(<Navigation />);
    const navigation = wrapper.find('#main_nav').type();
    expect(navigation).toEqual('nav');
  });

  describe('Links', () => {
    it('to the home page', () => {
      const link = wrapper.find('IndexLink');
      expect(link.props().to).toBe('/');
    });
    it('to the work page', () => {
      const link = wrapper.find('Link');
      expect(link.props().to).toBe('work');
    });
  });

});