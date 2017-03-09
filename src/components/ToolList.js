import React, {PropTypes} from 'react';
import styled from 'styled-components';
import Tool from './Tool';

// Container for all tool items
const ToolList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

// Tool title styles
const ToolTitle = styled.h2`
  font-family: Volte Sans Rounded;
  font-weight: 600;
  font-size: 2em;
  line-height: .75em;
  letter-spacing: -1px;
  padding: 15px 40px;
  @media only screen and (max-width: 768px) {
    font-size: 1.5em;
    padding-left: 20px; 
    padding-bottom: 0;
  }
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
      <ToolTitle>Tools & Technologies:</ToolTitle>
      {tools.map((tool) =>
        <Tool key={tool.title} tool={tool} />
      )}
    </ToolList>
  );
};

Tools.propTypes = {
  tools: PropTypes.array
};

export default Tools;