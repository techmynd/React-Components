import React, { Fragment } from 'react';
// import React, { useState, useEffect, Fragment } from 'react';
// import PropTypes from 'prop-types';

type Props = {
  // props types
};

function FunctionName(props: Props) {
  // event handler
  function handleClick(e) {
    e.preventDefault();
    console.log('Clicked One');
  }
  return (
    <Fragment>
      <div className='' onClick={handleClick}>
        Functional Component One
      </div>
    </Fragment>
  );
}

//FunctionName.propTypes = {};
export default FunctionName;

/** 
 @ Type: Stateless Component
 @ Desc: Description about component
 @ Accepts: props
 @ Required: 
*/
