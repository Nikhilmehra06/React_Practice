import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    // Short circuit operator
    return this.state.isLoggedIn && <div>Welcome Nikhil</div>;

    //Conditional rendring the element using element variable
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Nikhil</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }

    //Conditionaly Rendring the element Using if/else
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <div>Welcome Nikhil </div>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <>
    //       <div>Welcome Guest</div>
    //     </>
    //   );
    // }

    // Conditionaly rendring using the ternery operator
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Nikhil</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
  }
}

export default UserGreeting;
