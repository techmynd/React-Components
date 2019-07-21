import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function FunctionName(props) {
  // event handler
  function handleClick(e) {
    e.preventDefault();
    console.log('Clicked One');
  }
  return (
    <div className=''>
      <div className='' onClick={handleClick}>
        Functional Component One
      </div>
    </div>
  );
}

FunctionName.propTypes = {};
export default FunctionName;

/** 
 @ Type: Stateless Component
 @ Desc: Description about component
 @ Accepts: props
 @ Required: 
*/
