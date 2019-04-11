import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Line } from "rc-progress";
import Button from "../atoms/Button";

const StyledContainer = styled.div`
  padding-top: 10px;
  text-align: center;
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
        strokeWidth="2"
        trailWidth="2"
        strokeColor="#0080FF"
        trailColor="#F09B07"
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
