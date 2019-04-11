import React from "react";
import styled from "styled-components";

const ButtonsContainer = styled.div`
  box-shadow: inset 0px 0px 100px 24px rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  padding: 2px 10px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 10px;
  max-width: 240px;
`;

export default ({ children }) => (
  <ButtonsContainer>{children}</ButtonsContainer>
);
