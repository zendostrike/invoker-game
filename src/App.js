import React, { Component } from "react";
import keydown from "react-keydown";
import ReagentButton from "./components/atoms/ReagentButton";
import ButtonGroup from "./components/molecules/ButtonGroup";
import "./App.css";
import skills from "./skills";
import IconGroup from "./components/molecules/IconGroup";
import GameControls from "./components/molecules/GameControls";
import Icon from "./components/atoms/Icon";
import quasIcon from "./assets/quas_icon.png";
import wexIcon from "./assets/wex_icon.png";
import exortIcon from "./assets/exort_icon.png";
import invokeIcon from "./assets/invoke_icon.png";

const KEYS = ["q", "w", "e", "r"];
const GAME_DURATION = 10;
const GAME_STATE = { READY: "READY", STARTED: "STARTED", FINISHED: "FINISHED" };

const initialState = {
  combination: 0,
  keyCombination: [],
  castedSkill: "",
  currentDuration: GAME_DURATION,
  gameState: GAME_STATE.READY
};

class App extends Component {
  constructor(props) {
    super(props);
    this.quasButton = React.createRef();
    this.wexButton = React.createRef();
    this.exortButton = React.createRef();
    this.castButton = React.createRef();
    this.myInterval = null;
    this.state = initialState;
  }

  componentWillReceiveProps({ keydown }) {
    const { combination, keyCombination } = this.state;
    if (keydown.event) {
      let nextKeyCombination = [...keyCombination, ...keydown.event.key];
      let nextCombination = combination + keydown.event.which;

      if (keyCombination.length === 3) {
        nextKeyCombination = [keydown.event.key];
        nextCombination = keydown.event.which;
      }

      if (keydown.event.key === "q") {
        this.quasButton.current.focus();
      }
      if (keydown.event.key === "w") {
        this.wexButton.current.focus();
      }
      if (keydown.event.key === "e") {
        this.exortButton.current.focus();
      }

      if (KEYS.includes(keydown.event.key)) {
        this.setState({
          combination: nextCombination,
          keyCombination: [...nextKeyCombination]
        });
      }

      if (keydown.event.key === "r") {
        this.castButton.current.focus();
        let audio = new Audio(
          "https://gamepedia.cursecdn.com/dota2_gamepedia/c/c7/Invoke.mp3"
        );
        audio.play();
        this.castSkill(combination, keyCombination);
      }
    }
  }

  castSkill = (combination, keyCombination) => {
    let skill = "Cast something!";

    switch (combination) {
      case skills.coldsnap.code:
        skill =
          keyCombination.join("") === skills.coldsnap.keys
            ? skills.coldsnap.name
            : skills.alacrity.name;
        break;

      case skills.ghostWalk.code:
        skill = skills.ghostWalk.name;
        break;

      case skills.iceWall.code:
        skill = skills.iceWall.name;
        break;

      case skills.emp.code:
        skill = skills.emp.name;
        break;

      case skills.tornado.code:
        skill = skills.tornado.name;
        break;

      case skills.alacrity.code:
        skill = skills.alacrity.name;
        break;

      case skills.sunstrike.code:
        skill = skills.sunstrike.name;
        break;

      case skills.forgeSpirit.code:
        skill = skills.forgeSpirit.name;
        break;

      case skills.meteor.code:
        skill = skills.meteor.name;
        break;

      case skills.deafBlast.code:
        skill = skills.deafBlast.name;
        break;

      default:
        break;
    }

    this.setState({
      combination: 0,
      keyCombination: [],
      castedSkill: skill
    });
  };

  startGame = () => {
    if (this.state.gameState === GAME_STATE.READY) {
      this.myInterval = setInterval(() => {
        this.setState(prevState => ({
          currentDuration: prevState.currentDuration - 0.01,
          gameState: GAME_STATE.STARTED
        }));
      }, 1);
    }
  };

  resetGame = () => {
    this.setState(initialState);
  };

  render() {
    const {
      castedSkill,
      keyCombination,
      currentDuration,
      gameState
    } = this.state;

    const progressBarValue = (currentDuration / GAME_DURATION) * 100;
    const startButtonTitle =
      gameState === GAME_STATE.STARTED ? "Game started" : "Start";

    if (currentDuration <= 0) {
      clearInterval(this.myInterval);
      this.resetGame();
    }

    return (
      <div className="App">
        <GameControls
          startButtonTitle={startButtonTitle}
          onStartGamePressed={this.startGame}
          progressBarValue={progressBarValue}
        />
        <header className="App-header">
          <img
            src="https://pngimage.net/wp-content/uploads/2018/05/dota-2-invoker-png-3.png"
            className="App-logo"
            alt="logo"
          />
          <p>Invoker's game.</p>
          <p>{castedSkill}</p>
          <IconGroup>
            {keyCombination.map((e, index) => {
              let image = "";
              if (e === "q") {
                image = quasIcon;
              }
              if (e === "w") {
                image = wexIcon;
              }
              if (e === "e") {
                image = exortIcon;
              }
              return <Icon backgroundImage={image} key={index} />;
            })}
          </IconGroup>
          <ButtonGroup>
            <ReagentButton
              backgroundImage={quasIcon}
              reference={this.quasButton}
            />
            <ReagentButton
              backgroundImage={wexIcon}
              reference={this.wexButton}
            />
            <ReagentButton
              backgroundImage={exortIcon}
              reference={this.exortButton}
            />
            <ReagentButton
              backgroundImage={invokeIcon}
              reference={this.castButton}
            />
          </ButtonGroup>
        </header>
      </div>
    );
  }
}

export default keydown(KEYS)(App);
