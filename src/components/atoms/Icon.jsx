import React from "react";
import styled from "styled-components";

const StyledIcon = styled.div`
  border-style: none;
  border-radius: 30px;
  padding: 0px;
  margin: 5px;
  width: 32px;
  height: 32px;
  background-repeat: no-repeat;
  background: ${props => `url(${props.backgroundImage})`};
  background-size: cover;
  background-color: #000;
  box-shadow: inset 0px 0px 42px -9px rgba(0, 0, 0, 1);
  border: 2px solid #03ae03;
`;

export default ({ backgroundImage, reference }) => (
  <StyledIcon backgroundImage={backgroundImage} ref={reference} />
);
