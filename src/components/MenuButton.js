import React from 'react';
import styled from 'styled-components';

const Bars = styled.i`
  font-size: 1.5em;
  color: #4A4A4A;
`;

const Button = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    float: right;
  }
`;

const MenuButton = props => {
 return(
   <Button>
      <Bars className="fa fa-bars" />
   </Button>
 ); 
}

export default MenuButton;