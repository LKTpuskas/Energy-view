import React from 'react';
import styled from 'styled-components';


const ShowMoreLessBtn = ({ onClick, showGraph, customStyle }) => {

  const Button = styled.button`
  color: #ff0074;
  text-decoration: underline;
  text-align: left;
  cursor: pointer;
  background: inherit;
  ${customStyle}
  `;

    return (
        <Button onClick={onClick}>{!showGraph ? 'Show more' : 'Show less'}</Button>
    );

}

export default ShowMoreLessBtn;