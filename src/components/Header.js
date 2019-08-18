import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  border-top: 1px solid #ff0074;
  background-color: #011739;
`;

const HeaderTitle = styled.h1`
  font-size: 32px;
`;

const Hamburger = styled.div`
  align-self: flex-end;
`;

const Header = () => {
  return (
    <Wrapper>
      <HeaderTitle>Octopus Energy</HeaderTitle>
      <Hamburger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="23"
          viewBox="0 0 32 23"
          aria-labelledby="title-icon-menu"
          aria-describedby="desc-icon-menu"
          role="img"
          className="svg icon-menu no-mobile replaced-svg"
        >
          <title id="title-icon-menu">A hamburger icon</title>
          <desc id="desc-icon-menu">A hamburger icon</desc>
          <g fill="#FFF" fillRule="evenodd">
            <rect width="32" height="5" rx="3" />
            <rect y="9" width="32" height="5" rx="3" />
            <rect y="18" width="32" height="5" rx="3" />
          </g>
        </svg>
      </Hamburger>
    </Wrapper>
  );
};

export default Header;
