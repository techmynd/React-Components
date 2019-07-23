import React from 'react';
import { mount, shallow, render } from 'enzyme';
import ExampleClass from './ExampleClass';

describe('Example Class Component', () => {
  it('Should render without errors', () => {
    // const component = shallow(<ExampleClass />);
    // expect(component).toMatchSnapshot();
    shallow(<ExampleClass />);
  });
});
