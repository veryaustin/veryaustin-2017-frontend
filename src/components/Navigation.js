import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import styled, {css} from 'styled-components';
import MenuButton from './MenuButton';

// Main Navigation Component Styles
const MainNavigation = styled.nav`
  float: right;
  font-size: 14px;
  font-weight: 200;
  padding-top: .4em;

  @media only screen and (max-width: 768px) {
    display: ${props => props.navToggled ? 'block' : 'none'}
    width: 100%;
  }
`;

// Navigation Link Styles
const NavLinkStyles = css`
  margin-left: 2.625em;
  color: #4A4A4A;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 768px) {
    margin: 0 !important;
    display: block
    padding: 1em 0;
    border-bottom: 1px solid #C5C5C5;
    &:last-child {
      border-bottom: none;
      padding-bottom: 0px;
    }
  }
`;

/* Navigation Link Component Styles
No Pseudo Class support for react router activeStyleClass. Inline
activeStyle used until issue is resolved
*/
const NavLink = styled(Link)`
  ${NavLinkStyles}
`;

// Navigation IndexLink Component Styles
const IndexNavLink = styled(IndexLink)`
  ${NavLinkStyles}
`;

// External Site Arrow
const NavOutIcon = styled.i`
  color: #4A4A4A;
  font-size: 14px;
  padding: 0 0 0 8px;
`;

// Navigation Component
class Navigation extends Component {

  // Component state for navigation toggle on mobile devices
  constructor(props){
    super(props);
    this.state = {navToggled: false};
    
    // Bind helper function 'this' in the constructor to cleanup the render function
    this.toggleNav = this.toggleNav.bind(this);
    // Bind helper function 'this' to close navigation on navigation link click
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  // Toggle the mobile navigation on mobile 
  toggleNav() {
    let navToggled = !this.state.navToggled;
    this.setState({navToggled});
  }

  // Hide the mobile menu when clicking a link in the navigation
  handleNavClick() {
    this.setState({navToggled: false});
  }

  render() {
   return(
     <div>
      <MenuButton onClick={this.toggleNav} />
      <MainNavigation navToggled={this.state.navToggled}>
        <IndexNavLink to="/" activeStyle={{textDecoration: "underline"}} onClick={this.handleNavClick}>Home</IndexNavLink>
        <NavLink to="work" activeStyle={{textDecoration: "underline"}} onClick={this.handleNavClick}>Work</NavLink>
        <NavLink to="about" activeStyle={{textDecoration: "underline"}} onClick={this.handleNavClick}>About</NavLink>
        <NavLink href="http://writing.veryaustin.com" className="">Writing<NavOutIcon className="fa fa-arrow-circle-o-right"/></NavLink>
        <NavLink to="contact" activeStyle={{ textDecoration: "underline"}} onClick={this.handleNavClick}>Contact</NavLink>
      </MainNavigation>
    </div>
   );
 }
}

export default Navigation;