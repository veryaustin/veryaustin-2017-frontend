import React, {PropTypes} from 'react';
import styled from 'styled-components';

// Header Styles
const Header = styled.header`
  background: linear-gradient(${props => props.dark ? "rgba(00,00,00, .75), rgba(00,00,00, .75)" : "rgba(00,00,00, .0), rgba(00,00,00, .0)"}), 
              url(${props => props.featured_image && (props.left || props.right) ? "none" : props.featured_image }) no-repeat center center;
  background-size: cover;
  background-position: center;
  height: calc(100vh - 130px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

// Column styles for individual column
const Column = styled.div`
  width: ${props => props.left || props.right ? "50%" : "100%"};
  overflow: hidden;
  position: relative;
  padding: ${props => props.left || props.right ? " 25px;" : "0"};
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    overflow: auto;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 100%;
  }
`;

// Header Title Styles
const Title = styled.h1`
  font-family: "Volte Sans Rounded";
  font-weight: 600;
  font-size: 4em;
  text-align: ${props => props.left ? "right" : props.right ? "left" : "center"};
  line-height: .75em;
  letter-spacing: -2.91px;
  color: ${props => props.dark ? "#FFFFFF" : "#4A4A4A"};
  margin: 15px 0;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 3em;
    text-align: center;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    text-align: center;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    text-align: center;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    font-size: 4.2em;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    font-size: 5.9em;
  }
  @media only screen and (min-width: 1921px) {
    font-size: 7em;
  }
`;

// Header Caption Styles
const Caption = styled.h3`
  font-family: "Volte Sans Rounded";
  font-weight: 300;
  font-size: 1.125em;
  text-align: ${props => props.left ? "right" : props.right ? "left" : "center"};
  color: ${props => props.dark ? "#FFFFFF" : "#4A4A4A"};
  margin: 15px 0;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 1em;
    text-align: center;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    text-align: center;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.225em;
    text-align: center;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    font-size: 1.40625em;
  }
  @media only screen and (min-width: 1441px) and (max-width: 1920px) {
    font-size: 1.6875em;
  }
  @media only screen and (min-width: 1921px) {
    font-size: 2.53125em;
  }
`;

// Header Title & Caption Container For Styles
const TitleContainer = styled.div`
  width: 100%;
  padding: ${props => props.left || props.right ? "15% 20px 0 20px" : "0"};
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    padding-top: 0;
    text-align: center;
  }
  @media only screen and (min-device-width: 481px) and (max-device-width: 768px) {
    top: 40%;
    padding-top: 0;
  }
  @media only screen and (min-width: 1921px) {
  }
`;

// Header Featured Image Styles
const FeaturedImage = styled.img`
  width: 100%;
  margin: ${props => props.left ? "0 0 0 -20%" : props.right ? "0 0 0 20%" : null};
  position: relative;
  top: 25%;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    margin: 0;
    top: 0;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    margin: 0;
    top: 0;
  }
`;

// Header Call To Action
const Actions = styled.div`  width: 50vw;
  width: 50vw;
  margin: 40px auto;
  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
`;

// Banner Component
const Banner = (props) => {
  const {title, caption, featured_image} = props;
  if (props.left) {
    return (
    <Header {...props}>
      <Column {...props}>
        <FeaturedImage {...props} src={featured_image}/>
      </Column>
      <Column {...props}>
        <TitleContainer {...props}>
          <Title {...props}>{title}</Title>
          <Caption {...props}>{caption}</Caption>
        </TitleContainer>
      </Column>
    </Header>
    );
  } else if (props.right) {
    return (
      <Header {...props}>
        <Column {...props}>
          <TitleContainer {...props}>
            <Title {...props}>{title}</Title>
            <Caption {...props}>{caption}</Caption>
          </TitleContainer>
        </Column>
        <Column {...props}>
            <FeaturedImage {...props} src={props.featured_image}/>
        </Column>
      </Header>
    );
  } else {
    return (<Header {...props}>
      <Column {...props}>
        <TitleContainer {...props}>
          <Title {...props}>{title}</Title>
          <Caption {...props}>{caption}</Caption>
          <Actions>{props.children}</Actions>
        </TitleContainer>
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