import React from "react";
import styled from "styled-components";
import ContentWrapper from "./ContentWrapper";

const Wrapper = styled.div`
  background-color: #011739;
`;

const AddToCartBtn = styled.button`
  color: white;
  border-radius: 4px;
  width: 100%;
  height: 50px;
  font-weight: bold;
  background-color: #ff0074;
  font-size: 25px;
`;

const QuantityBtn = styled.button`
  background: #4d6ea4;
  height: 40px;
  width: 40px;
  border-radius: 10px;
  cursor: pointer;
  color: white;
`;

const AddToCartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const PriceTag = styled.span`
  font-weight: 600;
  align-self: flex-end;
  font-size: 40px;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Quantity = styled.span`
  padding: 0 8px;
  font-weight: 600;
  font-size: 40px;
`;

const QuantityLabel = styled.span`
  display: flex;
  justify-content: center;
  color: #4d6ea4;
  font-weight: bold;
  font-size: 18px;
  line-height: 1;
`;
const Cart = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <AddToCartWrapper>
          <PriceTag>£12.99</PriceTag>
          <div>
            <QuantityLabel>QTY</QuantityLabel>
            <QuantityWrapper>
              <QuantityBtn>&mdash;</QuantityBtn>
              <Quantity>1</Quantity>
              <QuantityBtn>&#xff0b;</QuantityBtn>
            </QuantityWrapper>
          </div>
        </AddToCartWrapper>
        <AddToCartBtn>Add to cart</AddToCartBtn>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Cart;
