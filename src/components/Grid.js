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
  if (!props.items){
    return (
      <div>Loading</div>
    );
  }
  return (
    <GridList>
      {props.items.map((item, index) => 
        <GridItem key={index} item={item} />
      )}
    </GridList>
  );
};

Grid.propTypes = {
  items: PropTypes.array
};

export default Grid;

// const Grid = (props) => {
//   const List = props.items.map((item, index) => {
//     return <GridItem key={index} item={item}/>
//   });

//   return(
//     <GridList>{List}</GridList>
//   );
// };

// Grid.propTypes = {
//   items: PropTypes.array
// }

// export default Grid;