import React from 'react';
import {shallow} from 'enzyme';
import Work from './Work';

describe('Work Component', () => {
  it('renders the home component', () => {
    const wrapper = shallow(<Work />);
    const home = wrapper.find('#work').length;
    const expected = 1;
    expect(home).toEqual(expected);
  });
});