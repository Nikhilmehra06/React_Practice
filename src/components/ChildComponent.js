import React from 'react';

function ChildComponent(props) {
  //Destructuring the greetHandler from the Props
  const { greetHandler } = props;
  return (
    <div>
      {/* <button onClick={greetHandler}>Greet Parent</button> */}
      <button onClick={() => greetHandler('child')}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
