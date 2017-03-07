import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import {Link} from 'react-router';

// Main Footer Component Styles
const MainFooter = styled.footer`
  padding: .5em 0 .5em 0;
  border-top: 1px solid #C5C5C5;
  width: 100%;
  height: 75px;
  font-weight: 200;
`;

// Footer Link Component Styles 
const FooterLink = styled(Link)`
  color: #4A4A4A;
`;

// Footer Component
const Footer = () => {
  return(
    <MainFooter>
      <Wrapper>
        <h5>&copy; {new Date().getFullYear()} Austin Lauritsen  | Built in Nashville.
        Powered by <FooterLink to="https://facebook.github.io/react"><img src={require('../images/react_color.svg')}/> React</FooterLink> + <FooterLink to="http://redux.js.org/"><img src={require('../images/redux_color.svg')}/> Redux</FooterLink></h5>
      </Wrapper>
    </MainFooter>
  );
};

export default Footer;