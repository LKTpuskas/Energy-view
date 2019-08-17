import React from 'react';
import styled from 'styled-components';
import ContentWrapper from './ContentWrapper';
import { DescriptionTitle } from '../App'
import PerformanceGraph from './PerformanceGraph';
import ShowMoreLessBtn from './ShowMoreLessBtn';

const Wrapper = styled.div`
  background-color: #011739;
`;

const SpecWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  padding: 10px 0;
  justify-content: space-between;
  :not(:last-child) {
    border-bottom: solid 1px #0a2859;
  }
}
`;


const SpecValue = styled.div`

  margin-right: 4rem;
`;

const GraphWrapper = styled.div`overflow: auto`

const Specifications = () => {
  const [showGraph, setGraph] = React.useState(false);
  
  const set = () => {
    setGraph(prevGraph => !prevGraph)
  }
  return (
    <Wrapper>
      <ContentWrapper >
        <DescriptionTitle customStyle={`margin-bottom: 20px`} title='Specifications' />
        <SpecWrap>
          <div>Brand</div>
          <SpecValue>Philips</SpecValue>
        </SpecWrap>
        <ShowMoreLessBtn onClick={set} showGraph={showGraph} />
      </ContentWrapper >
      <GraphWrapper>
      {showGraph && <PerformanceGraph />}
      </GraphWrapper>

    </Wrapper>
  );
}

export default Specifications;