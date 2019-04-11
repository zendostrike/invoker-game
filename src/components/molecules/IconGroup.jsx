import React from "react";
import styled from "styled-components";

const IconsContainer = styled.div`
  padding: 5px;
  display: flex;
  height: 40px;
`;

export default ({ children }) => <IconsContainer>{children}</IconsContainer>;
