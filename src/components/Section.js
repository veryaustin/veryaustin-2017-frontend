import React, {PropTypes} from 'react';
import styled from 'styled-components';
import Grid from './Grid';

// Section Styles
const SectionItem = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap-reverse;
  }
`;

// Title styles for section
const SectionTitle = styled.h1`
  font-family: Volte Sans Rounded;
  font-weight: 600;
  font-size: 2em;
  line-height: .75em;
  letter-spacing: -1px;
`;

// Technology title styles
const SectionTechnology = styled.h2`
  font-family: Volte Sans Rounded;
  font-weight: 600;
  font-size: 2em;
  line-height: .75em;
  letter-spacing: -1px;
  padding: 15px 40px;
  @media only screen and (max-width: 768px) {
    order: 4;
    font-size: 1.5em;
    padding-left: 20px; 
    padding-bottom: 0;
  }
`;

// Summary styles for section
const SectionSummary = styled.h3`
  font-weight: 400;
  font-size: 1.125em;
`;

// Description styles for for section
const SectionDescription = styled.p`
  font-weight: 300;
  line-height: 1.4em;
  text-align: justify;
`;

// Column styles for individual column
const SectionColumn = styled.div`
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
const SectionColumnLeft = styled(SectionColumn)`
    @media only screen and (max-width: 768px) {
      order: 2;
    }
`;

// Styles that modify column styles for Right Column
const SectionColumnRight = styled(SectionColumn)`
    @media only screen and (max-width: 768px) {
      order: 3;
    }
`;

// Image styles for screenshot images
const SectionImage = styled.img`
  width: 120%;
  margin: 0 0 0 130px;
  @media only screen and (max-width: 768px) {
    order: 1;
    width: 100%;
    margin: 0;
  }
`;

// Order styles for the Grid list on mobile
const SectionGrid = styled(Grid)`
  @media only screen and (max-width: 768px) {
    order: 5;
  }
`;

// Section Component
const Section = (props) => {
  // Destructure Props
  const {title, summary, description, image_url, items} = props;
   if (!items) {
    return (
      <div>Loading</div>
    );
  }
  return(
    <SectionItem>
      <SectionColumnLeft>
        <SectionTitle>{title}</SectionTitle>
        <SectionSummary>{summary}</SectionSummary>
        <SectionDescription>{description}</SectionDescription>
      </SectionColumnLeft>
      <SectionColumnRight>
        <SectionImage src={image_url}/>
      </SectionColumnRight>
      <SectionTechnology>Tools & Technologies:</SectionTechnology>
      <SectionGrid gridItems={items} />
    </SectionItem>
  );
};

// Section Props Validation
Section.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image_url: PropTypes.string,
  site_url: PropTypes.string,
  repo_url: PropTypes.string,
  items: PropTypes.array
};

export default Section;