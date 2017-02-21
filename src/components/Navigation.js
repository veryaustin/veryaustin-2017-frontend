import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import MenuButton from './MenuButton';

class Navigation extends Component {

  // Component state for navigation toggle on mobile devices
  constructor(props){
    super(props);
    this.state = {nav: null};
    
    // Bind helper functions this in the constructor to cleanup the render function
    this.toggleNav = this.toggleNav.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  // Toggle the mobile navigation on mobile 
  toggleNav() {
    let navigation = this.state.nav;

    if(navigation == "active"){
      this.setState({nav: ''});
    } else {
      this.setState({nav: "active"});
    }
  }

  // Hide the mobile menu when clicking a link in the navigation
  handleNavClick() {
    this.setState({nav: ''});
  }

  render() {
   return(
     <div>
      <MenuButton onClick={this.toggleNav} />
      <nav id="main_nav" className={this.state.nav}>
        <IndexLink to="/" activeClassName="active" onClick={this.handleNavClick}>Home</IndexLink>
        <Link to="work" activeClassName="active" onClick={this.handleNavClick}>Work</Link>
        <Link to ="about" activeClassName="active" onClick={this.handleNavClick}>About</Link>
        <a href="http://writing.veryaustin.com">Writing</a>
        <Link to="contact" activeClassName="active" onClick={this.handleNavClick}>Contact</Link>
      </nav>
    </div>
   );
 }
}

export default Navigation;