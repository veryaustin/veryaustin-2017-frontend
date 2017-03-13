import React, {PropTypes} from 'react';
import styled from 'styled-components';

// Header Styles
const Header = styled.header`
  background: linear-gradient(${props => props.dark ? "rgba(00,00,00, .75), rgba(00,00,00, .75)" : "rgba(00,00,00, .0), rgba(00,00,00, .0)"}), 
              url(${props => props.featured_image && (props.left || props.right) ? "none" : props.featured_image }) no-repeat center center;
  background-size: cover;
  background-position: ${props => props.left ? "115% center" : props.right ? "-15% center" : "center"};
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

// Column styles for individual column
const HeaderColumn = styled.div`
  width: ${props => props.left ? "50%" : props.right ? "50%" : "100%"};
  overflow: hidden;
  padding: 25px;
  @media only screen and (max-width: 768px) {
    width: 100%;

    text-align: center;
  }
`;

const HeaderColumnLeft = styled(HeaderColumn)`
  
`;

const HeaderColumnRight = styled(HeaderColumn)`

`;

const HeaderFeaturedImage = styled.img`
  position: relative;
  top: 25%;
  width: 120%;
  margin: ${props => props.left ? "0 0 0 -20%" : props.right ? "0 -20% 0 0" : "inherit"};
`;

// Header Title Styles
const Title = styled.h1`
  font-family: Volte Sans Rounded;
  font-weight: 600;
  font-size: 4em;
  color: ${props => props.dark ? "#FFFFFF" : "#4A4A4A"};
  text-align: ${props => props.left ? "right" : props.right ? "left" : "center"};
  margin: 0;
  line-height: .75em;
  letter-spacing: -2.91px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 3.25em;
    float: none;
  }
  @media only screen and (max-width: 768px) {
    float: none;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1023px) {
    font-size: 4.5em;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 5em;
  }
  @media only screen and (min-width: 1440px) and (max-width: 1919px) {
    font-size: 6em;
  }
  @media only screen and (min-width: 1920px) {
    font-size: 9em;
  }
`;

// Header Caption Styles
const Caption = styled.h3`
  font-family: Volte Sans Rounded;
  font-weight: 300;
  font-size: 1.125em;
  color: ${props => props.dark ? "#FFFFFF" : "#4A4A4A"};
  text-align: ${props => props.left ? "right" : props.right ? "left" : "center"};
  margin: 20px 0;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 1em;
    float: none;
  }
  @media only screen and (max-width: 767px) {
    float: none;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1023px) {
    font-size: 1.225em;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 1.40625em;
  }
  @media only screen and (min-width: 1440px) and (max-width: 1919px) {
    font-size: 1.6875em;
  }
  @media only screen and (min-width: 1920px) {
    font-size: 2.53125em;
  }
`;

const HeaderTitleContainer = styled.div`
  position: relative;
  top: 40%;
`;

// Header Container Styles
// const Container = styled.div`
//   width: 100%;
//   text-align: ${props => props.left ? "left" : props => props.right ? "right" : "center"};
//   padding: ${props => props.left ? "0 0 0 2.625em" : props => props.right ? "0 2.625em 0 0" : "0 0 0 0"};
//   position: relative;
//   top: 45%;
//   @media only screen and (max-width: 768px) {
//     text-align: center;
//     width: 100%;
//     top: 13%;
//     float: none;
//     margin: 0 auto 0 auto;
//     padding: 0;
//   }
// `;

// Banner Component
const Banner = (props) => {
  if (props.left) {
    return (
    <Header {...props}>
      <HeaderColumnLeft {...props}>
        <HeaderFeaturedImage {...props} src={props.featured_image}/>
      </HeaderColumnLeft>
      <HeaderColumnRight {...props}>
        <HeaderTitleContainer {...props}>
          <Title {...props}>{props.title}</Title>
          <Caption {...props}>{props.caption}</Caption>
        </HeaderTitleContainer>
      </HeaderColumnRight>
    </Header>
    )
  } else if (props.right) {
    return (
      <Header {...props}>
        <HeaderColumnLeft {...props}>
          <HeaderTitleContainer {...props}>
            <Title {...props}>{props.title}</Title>
            <Caption {...props}>{props.caption}</Caption>
          </HeaderTitleContainer>
        </HeaderColumnLeft>
        <HeaderColumnRight {...props}>
          <HeaderFeaturedImage {...props} src={props.featured_image}/>
        </HeaderColumnRight>
      </Header>
    )
  } else {
    return <Header {...props}>
      <HeaderColumn {...props}>
        <HeaderTitleContainer {...props}>
          <Title {...props}>{props.title}</Title>
          <Caption {...props}>{props.caption}</Caption>
        </HeaderTitleContainer>
      </HeaderColumn>
    </Header>
  }

};

// Banner Props Validation
Banner.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string
};

export default Banner;