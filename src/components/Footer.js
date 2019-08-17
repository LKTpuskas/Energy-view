import React from 'react';
import styled from 'styled-components';
import ContentWrapper from '../components/ContentWrapper'

const Wrapper = styled.footer`
  background-color: #0a2859;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const FooterContent = styled.p`
  opacity: 0.6;
`;

const Footer = () => {
  return (
    <Wrapper>
<ContentWrapper>
<FooterContent>
        Octopus Energy Ltd is a company registered in England
        and Wales.
        Registered number: 09263424. Registered office: 33
        Holborn, London, EC1N 2HT. Trading
        office: 20-24 Broadwick Street, London, W1F 8HT
     </FooterContent>
</ContentWrapper>

      
    </Wrapper>
  );
}

export default Footer;