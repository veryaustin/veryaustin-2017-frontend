import React, {Component} from 'react';
import {IndexLink} from 'react-router';

class Navigation extends Component {
 render() {
   return(
    <nav id="main_nav">
      <IndexLink to="/">Home</IndexLink>
      <a href="#">Work</a>
      <a href="#">About</a>
      <a href="http://writing.veryaustin.com">Writing</a>
      <a href="#">Contact</a>
    </nav>
   );
 }
}

export default Navigation;