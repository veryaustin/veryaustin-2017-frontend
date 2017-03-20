import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';

// Main Footer Component Styles
const MainFooter = styled.footer`
  display: flex;
  height: 83px;
  text-align: center;
  font-size: 0.750em;
  padding: 2.063em;
  border-top: 1px solid #C5C5C5;
  @media only screen and (min-width: 769px) {
    font-size: 1em;
    padding: .5em 0 .5em 2em;
  }
`;

// Footer Link Component Styles 
const FooterLink = styled(Link)`
  color: #4A4A4A;
`;

// Footer Component
const Footer = () => {
  return(
    <MainFooter>
      <h5>&copy; {new Date().getFullYear()} Austin Lauritsen | Powered by <FooterLink to="https://facebook.github.io/react"><img src={require('../images/react_color.svg')}/> React</FooterLink> + <FooterLink to="http://redux.js.org/"><img src={require('../images/redux_color.svg')}/> Redux</FooterLink></h5>
    </MainFooter>
  );
};

export default Footer;