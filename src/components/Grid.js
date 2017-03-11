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


// Component to return a div containing all grid items

const Grid = (props) => {
  const {gridItems} = props;
  if (!gridItems){
    return (
      <div>Loading</div>
    );
  }
  return (
    <GridList>
      {gridItems.map((gridItem, index) =>
        <GridItem key={index} gridItem={gridItem} />
      )}
    </GridList>
  );
};

Grid.propTypes = {
  gridItem: PropTypes.array
};

export default Grid;