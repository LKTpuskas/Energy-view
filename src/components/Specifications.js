import React from "react";
import styled from "styled-components";
import ContentWrapper from "./ContentWrapper";
import { DescriptionTitle } from "../App";
import PerformanceGraph from "./PerformanceGraph";
import ShowMoreLessBtn from "./ShowMoreLessBtn";

const Wrapper = styled.div`
  background-color: #011739;
`;

const SpecWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  padding: 10px 0;
  justify-content: space-between;
  &:not(:last-child) {
    border-bottom: solid 2px #0a2859;
  }
`;

const SpecItemContainer = styled.div`
  width: 50%;
`;

const SpecItem = styled.span`
  margin-right: 5px;
`;
const GraphWrapper = styled.div`
  overflow: auto;
`;

const renderSpecifications = data =>
  data &&
  data.map(spec => (
    <SpecWrap key={spec.id}>
      <SpecItemContainer>
        <SpecItem>Brand</SpecItem>
      </SpecItemContainer>
      <SpecItemContainer>
        <span>{spec.title}</span>
      </SpecItemContainer>
    </SpecWrap>
  ));

const Specifications = ({ data }) => {
  const [showGraph, setGraph] = React.useState(false);

  const set = () => {
    setGraph(prevGraph => !prevGraph);
  };
  const result = data.length > 0 && data;
  return (
    <Wrapper>
      <ContentWrapper>
        <DescriptionTitle
          customStyle={`margin-bottom: 20px`}
          title="Specifications"
        />
        {renderSpecifications(result)}
        <ShowMoreLessBtn onClick={set} showGraph={showGraph} />
      </ContentWrapper>
      <GraphWrapper>{showGraph && <PerformanceGraph />}</GraphWrapper>
    </Wrapper>
  );
};

export default Specifications;
