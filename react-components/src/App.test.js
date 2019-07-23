import React from 'react';
import { mount, shallow, render } from 'enzyme';
import APP from './App';

describe('App Component', () => {
  it('Should render without errors', () => {
    shallow(<APP />);
  });
});
