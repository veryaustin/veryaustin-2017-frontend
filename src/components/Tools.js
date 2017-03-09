import React, {PropTypes} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';

// Container for all tool items
const ToolList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

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

// Tool title styles
const ToolTitle = styled.h2`
  font-family: Volte Sans Rounded;
  font-weight: 600;
  font-size: 2em;
  line-height: .75em;
  letter-spacing: -1px;
  padding: 15px 40px;
`;

// Logo image for an individual tool item
const ToolImage = styled.img`
  width: 50%;
  height: 50%;
  margin: 25%;
`;

// Component to return a div containing all tool items
const Tools = ({tools}) => {
  if (!tools) {
    return (
      <div>Loading</div>
    );
  }
  return(
    <ToolList>

      {tools.map((tool, key) =>
      <Link key={key} to={tool.site_url}>
        <ToolItem color={tool.background_color}>
          <ToolImage src={tool.logo_image}/>
        </ToolItem>
      </Link>
      )}
    </ToolList>
  );
};

Tools.propTypes = {
  tools: PropTypes.object
};

export default Tools;