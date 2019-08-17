import React from 'react';
import styled from 'styled-components'

const ContentWrapper = ({ children, customStyle }) => {

  const ContentWrapper = styled.div`
  max-width: 500px;
  padding: 36px;
  width: 100%;
  margin: auto;
  ${customStyle}
`;
  return (
    <ContentWrapper>
      {children}
    </ContentWrapper>
  );
};

export default ContentWrapper;
