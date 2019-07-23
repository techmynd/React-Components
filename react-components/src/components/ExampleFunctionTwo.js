import React, { Fragment } from 'react';
//import React, { useState, useEffect, Fragment } from 'react';
// import PropTypes from 'prop-types';

type Props = {
  // props types
};

const constName = (props: Props) => {
  // event handler
  function handleClick(e) {
    e.preventDefault();
    console.log('Clicked Two');
  }

  return (
    <Fragment>
      <div className='' onClick={handleClick}>
        Functional Component Two
      </div>
    </Fragment>
  );
};

//constName.propTypes = {};
export default constName;

/** 
 @ Type: Stateless Component
 @ Desc: Description about component
 @ Accepts: props
 @ Required: 
*/
