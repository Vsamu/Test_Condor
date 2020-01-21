import React from 'react';

import Navbar from './Navbar';
import Simple from './Simple';

function Layout(props) {
  // const children = props.children;

  return (
    <React.Fragment>
      <Simple />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
