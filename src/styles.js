import styled from "styled-components";

const AppContainer = styled.div`
  height: 100%;
  background: #370c9a;
  display: flex;
  position: relative;
  justify-content: center;
`;

const GameContainer = styled.div`
  position: absolute;
  text-align: center;
`;

const Section = styled.div`
  display: flex;
  ${({ height }) => `height: ${height}px;`}
  justify-content: center;
`;

const Score = styled.p`
  font-size: 20px;
  font-weight: 900;
  color: #fff;
`;

const RandomSpell = styled.h1`
  font-weight: 900;
  color: #07f074;
`;

const CastedSpell = styled.p`
  font-weight: 900;
  color: #07f074;
`;

export {
  AppContainer,
  GameContainer,
  Section,
  Score,
  RandomSpell,
  CastedSpell
};
