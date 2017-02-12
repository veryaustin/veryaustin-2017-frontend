import React, {Component} from 'react';
import {IndexLink} from 'react-router';
import MenuButton from './MenuButton';

class Navigation extends Component {
 render() {
   return(
     <div>
     <MenuButton />
      <nav id="main_nav">
        <IndexLink to="/">Home</IndexLink>
        <a href="#">Work</a>
        <a href="#">About</a>
        <a href="http://writing.veryaustin.com">Writing</a>
        <a href="#">Contact</a>
      </nav>
    </div>
   );
 }
}

export default Navigation;