import React from 'react';
import { mount, shallow, render } from 'enzyme';
import EFT from './ExampleFunctionTwo';

describe('Example Function Two Component', () => {
  it('Should render without errors', () => {
    shallow(<EFT />);
  });
});
