import React from 'react';
import { mount, shallow, render } from 'enzyme';
import EFO from './ExampleFunctionOne';

describe('Example Function One Component', () => {
  it('Should render without errors', () => {
    shallow(<EFO />);
  });
});
