import React, {PropTypes} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';

// Container for individual grid item
const Item = styled.div`
  width: 10vw;
  height: 10vw;
  background-color: ${props => props.color};
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 50vw;
    height: 50vw;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 20vw;
    height: 20vw;
  }
`;

// Logo image for an individual grid item
const ItemImage = styled.img`
  width: 50%;
  height: 50%;
  margin: 25%;
`;

// GridItem Component
const GridItem = (props) => {
  const {site_url, background_color, logo_url} = props.gridItem;
  return (
    <Link to={site_url}>
      <Item color={background_color}>
        <ItemImage src={logo_url}/>
      </Item>
    </Link>
  );
};

// GridItem Props Validation
GridItem.propTypes = {
  gridItem: PropTypes.object
};

export default GridItem;