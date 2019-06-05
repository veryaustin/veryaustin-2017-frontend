import React, { Component } from "react";
import { Link, IndexLink } from "react-router";
import styled, { css } from "styled-components";
import MenuButton from "./MenuButton";

// Main Header Component Styles
const Header = styled.header`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  border-bottom: 1px solid #c5c5c5;
`;

// Logo Link Component Styles
const Logo = styled(Link)`
  color: #4a4a4a;
  font-family: "Volte Sans Rounded";
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.3px;
`;

// Navigation Component Styles
const MainNavigation = styled.nav`
  width: 100%;
  font-size: 14px;
  font-weight: 200;
  display: ${props => (props.navToggled ? "flex" : "none")};
  flex-direction: ${props => (props.navToggled ? "column" : null)};
  @media only screen and (min-width: 769px) {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
  }
`;

// Navigation Link Styles
const NavLinkStyles = css`
  padding: 1em 0;
  color: #4a4a4a;
  &:hover {
    text-decoration: underline;
  }
  border-bottom: 1px solid #c5c5c5;
  &:last-child {
    border-bottom: none;
    padding-bottom: 0px;
  }
  @media only screen and (min-width: 769px) {
    border-bottom: none;
    margin-left: 2.625em;
    &:hover {
      text-decoration: underline;
    }
    &:last-child {
      padding-bottom: 1em;
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
  color: #4a4a4a;
  font-size: 14px;
  display: inline;
  padding: 0 0 0 8px;
  &:hover {
    text-decoration: underline;
  }
`;

// Navigation Component
class Navigation extends Component {
  // Component state for navigation toggle on mobile devices
  constructor(props) {
    super(props);
    this.state = { navToggled: false };

    // Bind helper function 'this' in the constructor to cleanup the render function
    this.toggleNav = this.toggleNav.bind(this);
    // Bind helper function 'this' to close navigation on navigation link click
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  // Toggle the mobile navigation on mobile
  toggleNav() {
    let navToggled = !this.state.navToggled;
    this.setState({ navToggled });
  }

  // Hide the mobile menu when clicking a link in the navigation
  handleNavClick() {
    this.setState({ navToggled: false });
  }

  render() {
    return (
      <Header>
        <Logo to="/">Austin Lauritsen</Logo>
        <MenuButton onClick={this.toggleNav} />
        <MainNavigation navToggled={this.state.navToggled}>
          <IndexNavLink
            to="/"
            activeStyle={{ textDecoration: "underline" }}
            onClick={this.handleNavClick}
          >
            Home
          </IndexNavLink>
          <NavLink
            to="work"
            activeStyle={{ textDecoration: "underline" }}
            onClick={this.handleNavClick}
          >
            Work
          </NavLink>
          <NavLink
            to="about"
            activeStyle={{ textDecoration: "underline" }}
            onClick={this.handleNavClick}
          >
            About
          </NavLink>
          <NavLink href="http://writing.veryaustin.com">
            Writing
            <NavOutIcon className="fa fa-arrow-circle-o-right" />
          </NavLink>
          <NavLink
            to="contact"
            activeStyle={{ textDecoration: "underline" }}
            onClick={this.handleNavClick}
          >
            Contact
          </NavLink>
        </MainNavigation>
      </Header>
    );
  }
}

export default Navigation;
