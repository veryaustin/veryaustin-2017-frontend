import React, {PropTypes} from 'react';
import styled from 'styled-components';
import Grid from './Grid';

// Section Styles
const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap-reverse;
  }
`;

// Title styles for section
const Title = styled.h1`
  font-family: "Volte Sans Rounded";
  font-weight: 600;
  font-size: 2em;
  line-height: .75em;
  letter-spacing: -1px;
`;

// Summary styles for section
const Summary = styled.h3`
  font-weight: 400;
  font-size: 1.125em;
`;

// Description styles for for section
const Description = styled.p`
  font-weight: 300;
  line-height: 1.4em;
  text-align: justify;
`;

// Column styles for individual column
const Column = styled.div`
  width: 50%;
  padding: 45px 40px;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 20px;
    text-align: center;
  }
`;

// Styles that modify column styles for Left Column
const ColumnLeft = styled(Column)`
    @media only screen and (max-width: 768px) {
      order: 3;
    }
`;

// Styles that modify column styles for Right Column
const ColumnRight = styled(Column)`
    @media only screen and (max-width: 768px) {
      order: 2;
    }
`;

// Image styles for screenshot images
const FeaturedImage = styled.img`
  width: 120%;
  margin: 0 0 0 130px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    order: 1;
  }
`;

// Order styles for the Grid list on mobile
const StyledGrid = styled(Grid)`
  @media only screen and (max-width: 768px) {
    order: 4;
  }
`;

// Section Component
const Section = ({title, caption, description, image_url, label, items}) => {
  // Destructure Props
   if (!items) {
    return (
      <div>Loading</div>
    );
  }
  return(
    <StyledSection>
      <ColumnLeft>
        <Title>{title}</Title>
        <Summary>{caption}</Summary>
        <Description>{description}</Description>
      </ColumnLeft>
      <ColumnRight>
        <FeaturedImage src={image_url}/>
      </ColumnRight>
      <StyledGrid gridItems={items} label={label} />
    </StyledSection>
  );
};

// Section Props Validation
Section.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string,
  description: PropTypes.string.isRequired,
  image_url: PropTypes.string,
  site_url: PropTypes.string,
  repo_url: PropTypes.string,
  label: PropTypes.string,
  items: PropTypes.array
};

Section.defaultProps = {
  label: 'Technology & Tools:'
};

export default Section;