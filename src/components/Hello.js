import React from 'react';

function Hello() {
  //JSX
  // return (
  //   <div className='dummyClass'>
  //     <h1>Hello Word</h1>
  //   </div>
  // );

  //Traditional Method of creating React Component
  return React.createElement(
    'div',
    { id: 'hello', className: 'dummyClass' },
    React.createElement('h1', null, 'Hello Word')
  );
}

export default Hello;
