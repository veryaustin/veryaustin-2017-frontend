import React, {PropTypes} from 'react';
import styled from 'styled-components';

// Banner Styles
const Header = styled.header`
  background: linear-gradient(${props => props.dark ? "rgba(00,00,00, .75), rgba(00,00,00, .75)" : "rgba(00,00,00, .0), rgba(00,00,00, .0)"}), 
              url(${props => props.featured_image && (props.left || props.right) ? "none" : props.featured_image }) no-repeat center center;
  background-size: cover;
  background-position: center;
  height: calc(100vh - 140px);
  align-items: center;
  display: flex;
  flex-direction: ${props => props.left || props.right ? "column" : "row"};
  padding: 20px;
  @media only screen and (min-width: 769px) {
    padding: 0;
    flex-direction: row;
  }
`;

// Banner Column Styles
const Column = styled.div`
  flex: 1;
  overflow: hidden;
`;

// Banner Title Styles
const Title = styled.h1`
  font-family: "Volte Sans Rounded";
  font-weight: 600;
  font-size: 2.5em;
  text-align: center;
  line-height: .75em;
  letter-spacing: -2.91px;
  color: ${props => props.dark ? "#FFFFFF" : "#4A4A4A"};
  @media only screen and (min-width: 769px) {
    text-align: ${props => props.left ? "left" : props.right ? "right" : "center"};
    padding: ${props => props.left ? "10% 0 0 20px" : props.right ? "10% 20px 0 0": "0"};
  }
  @media only screen and (min-width: 480px) and (max-width: 768px){
    font-size: 4em;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px){
    font-size: 3.2em;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    font-size: 4.2em;
  };
  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    font-size: 5.9em;
  }
  @media only screen and (min-width: 1921px) {
    font-size: 8em;
  }
`;

// Banner Caption Styles
const Caption = styled.h3`
  font-family: "Volte Sans Rounded";
  font-weight: 300;
  font-size: 1.125em;
  text-align: center;
  color: ${props => props.dark ? "#FFFFFF" : "#4A4A4A"};
  padding: 0;
  @media only screen and (min-width: 769px) {
    text-align: ${props => props.left ? "left" : props.right ? "right" : "center"};
    padding: ${props => props.left ? "0 0 0 20px" : props.right ? "0 20px 0 0" : "0 0 0 0"};
  }
  @media only screen and (min-width: 480px) and (max-width: 768px) {
    font-size: 1.125em;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px){
    font-size: .95em;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    font-size: 1.250em;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    font-size: 1.875em;
  }
  @media only screen and (min-width: 1921px) {
    font-size: 2.53125em;
  }
`;

// Banner Featured Image Styles
const FeaturedImage = styled.img`
  width: 100%;
  padding: ${props => props.left || props.right ? "5% 0 0 0" : "0"};
  @media only screen and (min-width: 769px) {
    width: 120%;
    position: relative;
    right: ${props => props.left ? "-120px" : "0"};
    left: ${props => props.right ? "-120px" : "0"};
  }
`;

// Banner Component
const Banner = (props) => {
  const {title, caption, featured_image} = props;
  if (props.left) {
    return (
      <Header {...props}>
        <Column {...props}>
          <Title {...props}>{title}</Title>
          <Caption {...props}>{caption}</Caption>
        </Column>
        <Column {...props}>
          <FeaturedImage {...props} src={featured_image}/>
        </Column>
      </Header>
    );
  } else if (props.right) {
    return (
        <Header {...props}>
          <Column {...props}>
            <FeaturedImage {...props} src={props.featured_image}/>
          </Column>
          <Column {...props}>
            <Title {...props}>{title}</Title>
            <Caption {...props}>{caption}</Caption>
          </Column>
        </Header>
    );
  } else {
    return (
        <Header {...props}>
          <Column {...props}>
            <Title {...props}>{title}</Title>
            <Caption {...props}>{caption}</Caption>
          </Column>
        </Header>
    );
  }
};

// Banner Props Validation
Banner.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
  featured_image: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  dark: PropTypes.bool,
  children: PropTypes.element
};

export default Banner;