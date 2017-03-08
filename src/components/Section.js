import React, {PropTypes} from 'react';
import styled from 'styled-components';
import Tools from './Tools';

// Section Styles
const SectionItem = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media only screen and (max-width: 767px) {
    flex-wrap: wrap-reverse;
  }
`;

const SectionTitle = styled.h2`
  font-family: Volte Sans Rounded;
  font-weight: 600;
  font-size: 2em;
  line-height: .75em;
  letter-spacing: -1px;
`;

const SectionSummary = styled.h3`
  font-weight: 400;
  font-size: 1.125em;
`;

const SectionDescription = styled.p`
  font-weight: 300;
  line-height: 1.4em;
  text-align: justify;
`;

const SectionColumn = styled.div`
  width: 50%;
  padding: 45px 40px;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const SectionImage = styled.img`
  width: 120%;
  margin: 0 0 0 130px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 25px 0;
  }
`;

const Section = (props) => {
  // Destructure Props
  const {title, summary, description, image_url, tools} = props;
  return(
    <SectionItem {...props}>
      <SectionColumn>
        <SectionTitle>{title}</SectionTitle>
        <SectionSummary>{summary}</SectionSummary>
        <SectionDescription>{description}</SectionDescription>
      </SectionColumn>
      <SectionColumn>
        <SectionImage src={image_url}/>
      </SectionColumn>
      <Tools tools={tools}/>
    </SectionItem>
  );
};

// Section Props Validation
Section.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  site_url: PropTypes.string,
  repo_url: PropTypes.string,
  tools: PropTypes.array
};

export default Section;