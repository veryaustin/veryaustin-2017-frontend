import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';

const Header = styled.header`
  background: url(${props => props.image_url});
  background-repeat: no-repeat;
  background-size: ${props => props.left ? "50% 50%" : props.right ? "50% 50%" : "100% 100%"};
  background-position: ${props => props.left ? "115% center" : props.right ? "-15% center" : "center"};
  background-color: ${props => props.dark ? "#212425" : "#FFFFFF"};
  height: 100vh;
  @media only screen and (max-width: 768px) {
    background-size: 75% 75%;
    background-position: center;
  }
`

const Title = styled.h1`
  font-family: Volte Sans Rounded;
  font-weight: 600;
  font-size: 4em;
  color: ${props => props.dark ? "#FFFFFF" : "#4A4A4A"};
  margin: 0;
  line-height: .75em;
  letter-spacing: -2.91px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 3.25em;
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
  @media only screen and (min-width: 1920px) and (max-width: 2560px) {
    font-size: 9em;
  }
`;

const Slogan = styled.h3`
  font-family: Volte Sans Rounded;
  font-weight: 300;
  font-size: 1.125em;
  color: ${props => props.dark ? "#FFFFFF" : "#4A4A4A"};
  margin: 10px 0;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 1em;
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
  @media only screen and (min-width: 1920px) and (max-width: 2560px) {
    font-size: 2.53125em;
  }
`;

const Container = styled.div`
  width: 100%;
  text-align: ${props => props.left ? "left" : props => props.right ? "right" : "center"};
  padding: ${props => props.left ? "0 0 0 2.625em" : props => props.right ? "0 2.625em 0 0" : "0 0 0 0"};
  position: relative;
  top: 50%;
  @media only screen and (max-width: 768px) {
    text-align: center;
    width: 100%;
    top: 13%;
    float: none;
    margin: 0 auto 0 auto;
    padding: 0;
  }
`;

const Banner = (props) => {
  return (
    <Header {...props}>
      <Container {...props}>
        <Title {...props}>{props.name}</Title>
        <Slogan {...props}>{props.slogan}</Slogan>
      </Container>
    </Header>
  )
};

export default Banner;