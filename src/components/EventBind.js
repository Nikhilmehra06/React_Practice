import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello',
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler() {
  //   this.setState({
  //     message: 'GoodBye',
  //   });
  // }

  clickHandler = () => {
    this.setState({
      message: 'GoodBye!',
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {
          //Using the arrow function to bind the function
          /* <button onClick={() => this.clickHandler()}>Click Me</button> */
        }

        <button onClick={this.clickHandler}>Click Me</button>

        {/* 
        //Using the bind function
        <button onClick={this.clickHandler.bind(this)}>click</button> */}
      </div>
    );
  }
}

export default EventBind;
