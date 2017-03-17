import React, {PropTypes} from 'react';
import styled from 'styled-components';

const Bars = styled.i`
  font-size: 1.5em;
  color: #4A4A4A;
`;

const Button = styled.div`
  @media only screen and (min-width: 769px) {
    display: none;  
  }
`;

const MenuButton = ({onClick}) => {
  return(
    <Button onClick = {onClick} >
      <Bars className="fa fa-bars" />
    </Button>
  );
};

// MenuButton Props Validation
MenuButton.propTypes = {
  onClick: PropTypes.func
};

export default MenuButton;