import React from 'react';
import {shallow} from 'enzyme';
import Banner from './Banner';

describe ('Banner Component', () => {
  // Component Tests
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Banner />);
  });

  it('renders the banner', () => {
    const banner = wrapper.find('header');
    expect(banner).toExist;
  });
});