import React, {PropTypes} from 'react';
import styled from 'styled-components';
import GridItem from './GridItem';

// Container for all grid items
const GridList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

// Grid Label
const GridLabel = styled.h2`
  width: 100%;
  padding: 15px 40px;
  font-family: "Volte Sans Rounded";
  font-weight: 600;
  font-size: 2em;
  line-height: .75em;
  letter-spacing: -1px;
  @media only screen and (max-width: 768px) {
    font-size: 1.5em;
    padding: 10px 0 0 20px;
  }
`;

// Component to return a div containing all grid items
const Grid = (props) => {
  const {gridItems, label} = props;
  if (!gridItems){
    return (
      <div>Loading</div>
    );
  }
  return (
    <GridList>
      {label ? <GridLabel>{label}</GridLabel> : null}
      {gridItems.map((gridItem, index) =>
        <GridItem key={index} gridItem={gridItem} />
      )}
    </GridList>
  );
};

// Grid Props Validation
Grid.propTypes = {
  gridItems: PropTypes.array,
  gridItem: PropTypes.object,
  label: PropTypes.string
};

export default Grid;