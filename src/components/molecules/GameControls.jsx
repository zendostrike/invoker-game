import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Line } from "rc-progress";
import Button from "../atoms/Button";

const StyledContainer = styled.div`
  padding-top: 10px;
`;

const GameControls = ({
  onStartGamePressed,
  startButtonTitle,
  progressBarValue
}) => {
  return (
    <StyledContainer>
      <Button onClick={() => onStartGamePressed()}>{startButtonTitle}</Button>
      <Line
        percent={progressBarValue}
        strokeWidth="1"
        strokeColor="#5d3a9a"
        trailColor="#FF5733"
      />
    </StyledContainer>
  );
};

GameControls.propTypes = {
  onStartGamePressed: PropTypes.func,
  startButtonTitle: PropTypes.string,
  progressBarValue: PropTypes.number
};

export default GameControls;
