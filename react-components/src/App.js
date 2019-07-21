import React from 'react';
import PropTypes from 'prop-types';

import ExampleClass from './components/example-class';
import ExampleFuncOne from './components/example-function';
import ExampleFuncTwo from './components/example-function-two';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div>Some text goes here</div>
        <br />
        <br />
        <ExampleClass />
        <br />
        <ExampleFuncOne />
        <br />
        <ExampleFuncTwo />
      </div>
    </div>
  );
}

App.propTypes = {};
export default App;

/** 
 @ Main Component
 @ Type: Stateless Component
 @ Desc: Description about component
 @ Accepts: props
 @ Required: 
*/
