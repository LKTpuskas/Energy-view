import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  margin-left: 50%;
  margin-top: 64px;
  display: flex;
  justify-content: center;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid #011739;
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export default Spinner;
