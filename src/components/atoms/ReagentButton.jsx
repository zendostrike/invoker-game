import React from "react";
import styled from "styled-components";

const StyedButton = styled.button`
  border-style: none;
  margin: 5px 0px;
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  background: ${props => `url(${props.backgroundImage})`};
  background-size: cover;
  background-color: #000;

  :focus {
    outline: 1px dashed #000;
    box-shadow: inset 0px 0px 184px -34px rgba(245, 245, 245, 1);
  }
`;

export default ({ backgroundImage, reference }) => (
  <StyedButton backgroundImage={backgroundImage} ref={reference} />
);
