import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import MenuButton from './MenuButton';

class Navigation extends Component {
 render() {
   return(
     <div>
     <MenuButton />
      <nav id="main_nav">
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        <Link to="work" activeClassName="active">Work</Link>
        <a href="#">About</a>
        <a href="http://writing.veryaustin.com">Writing</a>
        <a href="#">Contact</a>
      </nav>
    </div>
   );
 }
}

export default Navigation;