import React from "react";
import styled from "styled-components";
import ContentWrapper from "./ContentWrapper";
import ShowMoreLessBtn from "../components/ShowMoreLessBtn";
import { DescriptionTitle } from "../App";

const Wrapper = styled.div`
  background-color: #0a2859;
`;

const DescriptionContent = styled.p`
  margin-bottom: 20px;
`;

const Description = () => {
  return (
    <Wrapper fullBleed>
      <ContentWrapper customStyle={`background-color: #0a2859`}>
        <DescriptionTitle
          title="Description"
          customStyle={`background-color: #0a2859;`}
        />
        <DescriptionContent>
          Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb
          switches on instantly, no wiaint around warm start and flicker free
          features.
        </DescriptionContent>
        <ShowMoreLessBtn customStyle={`background-color: #0a2859`} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default Description;
