import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';
import Wrapper from './Wrapper';
import Navigation from './Navigation';

// Main Header Component Styles
const MainHeader = styled.header`
  padding: 1em 0;
  border-bottom: 1px solid #C5C5C5;
  overflow: auto;
  zoom: 1;
`;

// Logo Link Component Styles 
const Logo = styled(Link)`
  float: left;
  margin: 0;
  color: #4A4A4A;
  font-family: 'Volte Sans Rounded';
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.30px; 
`;

const Header = () => {
  return(
    <MainHeader>
      <Wrapper>
        <Logo to="/">Austin Lauritsen</Logo>
        <Navigation />
      </Wrapper> 
    </MainHeader>
  );
};

export default Header;