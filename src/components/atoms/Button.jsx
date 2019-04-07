import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: 7px;
  background: #5d3a9a;
  color: #fff;
`;

export default ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);
