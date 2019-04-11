import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: 7px;
  background: #0080ff;
  color: #fff;
  border-radius: 10px;
  width: 120px;
  font-weight: bold;
  font-size: 12px;
`;

export default ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);
