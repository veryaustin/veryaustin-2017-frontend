import React, { PropTypes } from "react";
import styled from "styled-components";
import { Link } from "react-router";
import Grid from "./Grid";
import Button from "./Button";

// Section Styles
const StyledSection = styled.section`
  background: ${props => (props.dark ? "#212425" : "#FFFFFF")};
  color: ${props => (props.dark ? "#FFFFFF" : "#212425")};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  @media only screen and (min-width: 769px) {
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
  line-height: 0.75em;
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
  @media only screen and (min-width: 769px) {
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
const ButtonWrapper = styled.div`
  margin-top: 50px;
`;

// Section Component
const Section = props => {
  // Destructure Props
  const {
    title,
    caption,
    description,
    image_url,
    primary_site_url = { primary_site_url },
    secondary_site_url = { secondary_site_url },
    primary_site_button = { primary_site_button },
    secondary_site_button = { secondary_site_button },
    label,
    items
  } = props;
  return (
    <StyledSection {...props}>
      <ColumnLeft>
        <Title>{title}</Title>
        <Summary>{caption}</Summary>
        <Description>{description}</Description>
        <ButtonWrapper>
          {primary_site_url && (
            <Link to={primary_site_url} target="_blank">
              <Button>{primary_site_button}</Button>
            </Link>
          )}
          {secondary_site_url && (
            <Link to={secondary_site_url} target="_blank">
              <Button secondary {...props}>
                {secondary_site_button}
              </Button>
            </Link>
          )}
        </ButtonWrapper>
      </ColumnLeft>
      <ColumnRight>
        <FeaturedImage src={image_url} />
      </ColumnRight>
      <Grid gridItems={items} label={label} />
    </StyledSection>
  );
};

// Section Props Validation
Section.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
  description: PropTypes.string,
  image_url: PropTypes.string,
  primary_site_url: PropTypes.string,
  secondary_site_url: PropTypes.string,
  primary_site_button: PropTypes.string,
  secondary_site_button: PropTypes.string,
  label: PropTypes.string,
  items: PropTypes.array,
  dark: PropTypes.bool
};

// Section Default Props
Section.defaultProps = {
  label: "Technology & Tools:",
  primary_site_button: "Visit Site",
  secondary_site_button: "Visit Repo"
};

export default Section;
