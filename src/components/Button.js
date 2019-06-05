import React from "react";
import styled from "styled-components";

// Button Styles
const StyledButton = styled.button`
  background: ${props =>
    props.secondary && props.dark
      ? "#FFFFFF"
      : props.secondary
      ? "#212425"
      : "#D3180E"};
  color: ${props =>
    props.secondary && props.dark
      ? "#212425"
      : props.secondary
      ? "#FFFFFF"
      : "#FFFFFF"};
  border: none;
  border-radius: 3px;
  width: 48%;
  padding: 5px;
  margin: 1%;
  font-family: "Volte Sans Rounded";
  font-size: 1.5em;
  font-weight: 600;
  letter-spacing: -0.5px;
  cursor: pointer;
`;

const Button = props => {
  return <StyledButton {...props} />;
};

export default Button;
