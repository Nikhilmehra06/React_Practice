import React from 'react';

/*Simple Function
function Greet() {
  return <h1>Hello Nikhil</h1>;
}*/

//Arrow Function
const Greet = (props) => {
  const { name, children, heroName } = props;
  console.log();
  return (
    <div>
      <h2>
        Hello {name} a.k.a {heroName}
      </h2>
      {children}
    </div>
  );
};

export default Greet;
