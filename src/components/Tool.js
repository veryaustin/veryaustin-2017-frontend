import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';

// Container for individual tool item
const ToolItem = styled.div`
  width: 10vw;
  height: 10vw;
  background-color: ${props => props.color};
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 50vw;
    height: 50vw;
  }
  @media only screen and (min-device-width: 481px) and (max-width: 768px) {
    width: 20vw;
    height: 20vw;
  }
`;

// Logo image for an individual tool item
const ToolImage = styled.img`
  width: 50%;
  height: 50%;
  margin: 25%;
`;

// Tool Component
const Tool = ({tool}) => {
  return (
    <Link key={tool.title} to={tool.site_url}>
      <ToolItem color={tool.background_color}>
        <ToolImage src={tool.logo_url}/>
      </ToolItem>
    </Link>
  );
};

export default Tool;