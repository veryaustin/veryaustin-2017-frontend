import React from 'react';
import {shallow} from 'enzyme';
import Navigation from './Navigation';

describe('Navigation Component', () => {

  // Component Tests
  it('renders the navigation component', () => {
    const wrapper = shallow(<Navigation />);
    const navigation = wrapper.find('#main_nav').type();
    expect(navigation).toEqual('nav');
  });

  describe('Hamburger Navigation', () => {
    let wrapper;
   
    beforeEach(() => {
      wrapper = shallow(<Navigation />);
    });

    it('should call `onClick` with hamburger menu open menu', () => {
      wrapper.find('MenuButton').simulate('click');
      const navigation = wrapper.find('#main_nav');
      expect(navigation.hasClass('active')).toEqual(true);
    });

    it('should call `onClick with hamburger menu to close menu`', () => {
      wrapper.setState({nav: "active"});
      wrapper.find('MenuButton').simulate('click');
      const navigation = wrapper.find('#main_nav');
      expect(navigation.hasClass('active')).toEqual(false);
    });
  });

  describe('Links', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Navigation />);
      wrapper.setState({nav: "active"});
    });

    it('navigates to the "home" page', () => {
      const link = wrapper.find('IndexLink');
      expect(link.props().to).toBe('/');
    });

    it('hides navigation when clicking the "home" link', () => {
      wrapper.find('IndexLink').simulate('click');
      const navigation = wrapper.find('#main_nav');
      expect(navigation.hasClass('active')).toBe(false);
    });
  
    it('navigates to the "work" page', () => {
      const link = wrapper.find('Link[children="Work"]');
      expect(link.props().to).toBe('work');
    });

    it('hides navigation when clicking the "work" link', () => {
      wrapper.find('Link[children="Work"]').simulate('click');
      const navigation = wrapper.find('#main_nav');
      expect(navigation.hasClass('active')).toBe(false);
    });

    it('navigates to the "about" page', () => {
      const link = wrapper.find('Link[children="About"]');
      expect(link.props().to).toBe('about');
    });

    it('hides navigation when clicking the "about" link', () => {
      wrapper.find('Link[children="About"]').simulate('click');
      const navigation = wrapper.find('#main_nav');
      expect(navigation.hasClass('active')).toBe(false);
    });

    it('navigates to the external "writing" page', () => {
      const link = wrapper.find('a[children="Writing"]');
      expect(link.props().href).toBe('http://writing.veryaustin.com');
    });
    
    it('navigates to the "contact" page', () => {
      const link = wrapper.find('Link[children="Contact"]');
      expect(link.props().to).toBe('contact');
    });

    it('hides navigation when clicking the "contact" link', () => {
      wrapper.find('Link[children="Contact"]').simulate('click');
      const navigation = wrapper.find('#main_nav');
      expect(navigation.hasClass('active')).toBe(false);
    });

  });
});