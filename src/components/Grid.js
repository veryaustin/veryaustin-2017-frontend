import React, { PropTypes } from "react";
import styled from "styled-components";
import GridItem from "./GridItem";

// Container for all grid items
const GridList = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (min-width: 769px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

// Grid Label
const GridLabel = styled.h2`
  width: 100%;
  padding: 15px 20px;
  font-family: "Volte Sans Rounded";
  font-weight: 600;
  font-size: 2em;
  line-height: 0.75em;
  letter-spacing: -1px;
`;

// Component to return a div containing all grid items
const Grid = ({ gridItems = [], label }) => {
  return (
    <div>
      {label && <GridLabel>{label}</GridLabel>}
      <GridList>
        {gridItems.map((gridItem, index) => (
          <GridItem key={index} gridItem={gridItem} />
        ))}
      </GridList>
    </div>
  );
};

// Grid Props Validation
Grid.propTypes = {
  gridItems: PropTypes.array,
  gridItem: PropTypes.object,
  label: PropTypes.string
};

export default Grid;
