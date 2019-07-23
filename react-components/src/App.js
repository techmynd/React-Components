// @flow
import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';

import ExampleClass from './components/ExampleClass';
import ExampleFuncOne from './components/ExampleFunctionOne';
import ExampleFuncTwo from './components/ExampleFunctionTwo';

/*
type Props = {
  // props types
};
*/

function App() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

//App.propTypes = {};
export default App;

/** 
 @ Main Component
 @ Type: Stateless Component
 @ Desc: Description about component
 @ Accepts: props
 @ Required: 
*/
