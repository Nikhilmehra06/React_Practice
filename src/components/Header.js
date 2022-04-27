import React from 'react';
import './myStyle.css';

function Header(props) {
  let className = props.primary ? 'primary' : '';
  return <h1 className={`${className} font-xl`}>Header</h1>;
}

export default Header;
