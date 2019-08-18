import React from "react";
import styled from "styled-components";
import ContentWrapper from "./ContentWrapper";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #011739;
`;
const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ImageWrapper = styled.div`
  align-self: center;
  max-width: 500px;
  z-index: 1;
  padding: 0 20px;
`;

const ImageTitle = styled.h2`
  font-weight: bold;
  font-size: 40px;
  line-height: 1.2;
  margin-bottom: 12px;
`;

const OtherInfo = styled.p`
  color: #4d6ea4;
`;

const ContentSection = styled.div`
  background-color: #0a2859;
  padding-top: 30px;
  margin-top: -60px;
`;

const SelectedProduct = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <ProductImage src="http://www.industrytap.com/wp-content/uploads/2016/02/incandescent-e1456179151174.jpg" />
      </ImageWrapper>
      <ContentSection>
        <ContentWrapper>
          <ImageTitle>Energy saving light bulb</ImageTitle>
          <OtherInfo>25W // Packet of 4</OtherInfo>
        </ContentWrapper>
      </ContentSection>
    </Wrapper>
  );
};

export default SelectedProduct;
