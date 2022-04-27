import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incCount() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log('Callback value', this.state.count);
    //   }
    // );

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }

  decCount() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  incByFive() {
    this.incCount();
    this.incCount();
    this.incCount();
    this.incCount();
    this.incCount();
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.decCount()}>Decrement</button>
        <button onClick={() => this.incCount()}>Increment</button>
        <button onClick={() => this.incByFive()}>Increment By 5</button>
      </div>
    );
  }
}

export default Counter;
