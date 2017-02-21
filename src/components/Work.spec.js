import React from 'react';
import {shallow} from 'enzyme';
import Work from './Work';

describe('Work Component', () => {
  it('renders the work component', () => {
    const wrapper = shallow(<Work />);
    const work = wrapper.find('#work').length;
    const expected = 1;
    expect(work).toEqual(expected);
  });
});