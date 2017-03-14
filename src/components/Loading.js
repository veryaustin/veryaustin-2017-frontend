import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const LoadingTextContainer = styled.div`
  width: 200px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoadingText = styled.h1`
  font-family: "Volte Sans Rounded";
  font-weight: 600;
  font-size: 4em;
  letter-spacing: -2.91px;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingTextContainer>
        <LoadingText>
          Loading...
        </LoadingText>
      </LoadingTextContainer>
    </LoadingContainer>
  );
};

export default Loading;