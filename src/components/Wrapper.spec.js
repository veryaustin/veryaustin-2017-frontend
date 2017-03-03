import React from 'react';
import {render} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import Wrapper from './Wrapper';

describe('Wrapper', () => {
  it('renders the Wrapper component', () => {
    const wrapper = render(<Wrapper />);
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });
});