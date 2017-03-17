import React, {PropTypes} from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import {Link} from 'react-router';
import Button from './Button';
import Loading from '../components/Loading';

// Section Styles
const StyledSection = styled.section`
  background: ${props => props.dark ? "#212425": "#FFFFFF"};
  color: ${props => props.dark ? "#FFFFFF": "#212425"};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  @media only screen and (min-width: 769px){ 
    flex-direction: row;
    padding-right: 0;
    text-align: left;
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
  flex: 1;
  @media only screen and (min-width: 768px) {
    overflow: hidden;
  }
`;

// Styles that modify column styles for Left Column
const ColumnLeft = styled(Column)`
  padding: 20px;
`;

// Styles that modify column styles for Right Column
const ColumnRight = styled(Column)`
  padding: 20px;
  @media only screen and (min-width: 769px){ 
    img {
      margin: 0 0 0 50px;
      width: 130%;
    }
  }
`;

// Image styles for screenshot images
const FeaturedImage = styled.img`
  width: 100%;
`;

// Button Wrapper
const ButtonWrapper=styled.div`
  margin-top: 50px;
`;

// Section Component
const Section = (props) => {
  // Destructure Props
  const {title, caption, description, image_url, repo_url={repo_url}, site_url={site_url}, label, items} = props;
  if (!items) {
    return (
      <Loading />
    );
  }
  return(
    <StyledSection {...props}>
      <ColumnLeft>
        <Title>{title}</Title>
        <Summary>{caption}</Summary>
        <Description>{description}</Description>
        <ButtonWrapper>
          { site_url
            ? <Link to={site_url}><Button>Visit Site</Button></Link>
            : null
          }
          { repo_url
            ? <Link to={repo_url}><Button secondary {...props}>Visit Repo</Button></Link>
            : null
          }
        </ButtonWrapper>
      </ColumnLeft>
      <ColumnRight>
        <FeaturedImage src={image_url}/>
      </ColumnRight>
      <Grid gridItems={items} label={label} />
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
  items: PropTypes.array,
  dark: PropTypes.bool
};

Section.defaultProps = {
  label: 'Technology & Tools:'
};

export default Section;