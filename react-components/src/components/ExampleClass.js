import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';

type Props = {
  // in case > props.title // check it like below
  // title: string
  // isEnabled: boolean,
  //  prevState: any,
  //  prevProps: any,
};
type State = { counter: number };

class ExampleClass extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      counter: 1,
    };
    // This binding is necessary to make `this` work in the callback
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}
  //componentDidUpdate(prevProps: Props, prevState: Props) {}
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
      <Fragment>
        <div className=''>
          Class Component Example / counter: {this.state.counter}
        </div>
      </Fragment>
    );
  }
}

//ExampleClass.propTypes = {};
export default ExampleClass;

/** 
 @ Type: Stateful Component
 @ Desc: Description about component 
    May contain State, Component Life cycle methods
 @ Accepts: 
 @ Required: 
*/
