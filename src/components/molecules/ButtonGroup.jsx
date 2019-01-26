import React from "react";
import styled from "styled-components";

const ButtonsContainer = styled.div`
  box-shadow: inset 0px 0px 184px 24px rgba(0, 0, 0, 1);
  border-radius: 14px;
  padding: 5px;
`;

export default ({ children }) => (
  <ButtonsContainer>{children}</ButtonsContainer>
);
