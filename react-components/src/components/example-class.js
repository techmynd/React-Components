import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExampleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    // This binding is necessary to make `this` work in the callback
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}

  /*
  handleChange() {
    this.setState({
      counter: counter + 1
    });
  }
  handleChange = () => {
    this.setState({
      counter: counter + 1
    });
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  */

  render() {
    /*
    if (this.state.counter === null) {
      return 'Loading...';
    }
    */
    return (
      <div className=''>
        <div className=''>
          Class Component Example / counter: {this.state.counter}
        </div>
      </div>
    );
  }
}

ExampleClass.propTypes = {};
export default ExampleClass;

/** 
 @ Type: Stateful Component
 @ Desc: Description about component 
    May contain State, Component Life cycle methods
 @ Accepts: 
 @ Required: 
*/
