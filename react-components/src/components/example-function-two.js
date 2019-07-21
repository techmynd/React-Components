import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const constName = props => {
  // event handler
  function handleClick(e) {
    e.preventDefault();
    console.log('Clicked Two');
  }

  return (
    <div className=''>
      <div className='' onClick={handleClick}>
        Functional Component Two
      </div>
    </div>
  );
};

constName.propTypes = {};
export default constName;

/** 
 @ Type: Stateless Component
 @ Desc: Description about component
 @ Accepts: props
 @ Required: 
*/
