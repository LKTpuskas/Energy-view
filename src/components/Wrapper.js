import React from "react";
import styled from "styled-components";

const Wrapper = ({ children, customStyle }) => {
  const Wrapper = styled.div`
    max-width: 1300px;
    min-height: calc(100vh - 70px);
    margin: 0 auto;
    padding: 0 18px;
    ${customStyle}
  `;
  return <Wrapper>{children}</Wrapper>;
};

export default Wrapper;
