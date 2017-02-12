import React from 'react';
import {shallow} from 'enzyme';
import MenuButton from './MenuButton';

describe('Menu Button Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MenuButton />);
  })

  it('renders the button component', () => {
    
  });

  it('renders the menu bar', () => {
    const menuButton = wrapper.find('.fa-bars').length;
    expect(menuButton).toBe(1);
  });
});
