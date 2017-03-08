import React from 'react';
import {shallow} from 'enzyme';
import Tools from './Tools';

describe ('Tools Component', () => {
  // Component Tests
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Tools />);
  });

  it('renders the tools', () => {
    const tools = wrapper.find('styled.div');
    expect(tools).toExist;
  });
});