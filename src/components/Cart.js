import React from 'react';
import styled from 'styled-components';
import ContentWrapper from './ContentWrapper';

const Wrapper = styled.div`
  background-color: #011739;
`;

const AddToCartBtn = styled.button`
  width: 100%;
  height: 50px;
  font-weight: 500;
  background-color: #ff0074;
`;

const AddToCartWrapper = styled.div`
display: flex;
justify-content: space-between;
  margin-bottom: 2rem;
`;

const PriceTag = styled.h2`
  font-weight: 600;
`;

const Quantity = styled.h2`
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Wrapper>
      <ContentWrapper >
      <AddToCartWrapper>
        <PriceTag>£12.99</PriceTag>
      <Quantity>QTY</Quantity>
      </AddToCartWrapper>
      <AddToCartBtn>Add to cart</AddToCartBtn>
      </ContentWrapper >
    </Wrapper>
  );
}

export default Cart;