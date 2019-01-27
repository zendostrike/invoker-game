import React, { Component } from "react";
import keydown from "react-keydown";
import Button from "./components/atoms/Button";
import ButtonGroup from "./components/molecules/ButtonGroup";
import "./App.css";
import skills from "./skills";
import IconGroup from "./components/molecules/IconGroup";
import Icon from "./components/atoms/Icon";

const quasImage =
  "https://c-3sux78kvnkay76x24j7a1v9r0cvge9qx2eiruajlx78utzx2etkz.g00.gamepedia.com/g00/3_c-3juzg8.mgskvkjog.ius_/c-3SUXKVNKAY76x24nzzvyx3ax2fx2fj7a1v9r0cvge9q.iruajlx78utz.tkzx2fjuzg8_mgskvkjogx2fhx2fhgx2fSgmay_Gvkd_Wagy_oiut.vtmx3fbkx78youtx3dj1j06i3472j789886i0ihgk0199h6984_$/$/$/$/$?i10c.ua=1&i10c.dv=21";
const wexImage =
  "https://c-3sux78kvnkay76x24j7a1v9r0cvge9qx2eiruajlx78utzx2etkz.g00.gamepedia.com/g00/3_c-3juzg8.mgskvkjog.ius_/c-3SUXKVNKAY76x24nzzvyx3ax2fx2fj7a1v9r0cvge9q.iruajlx78utz.tkzx2fjuzg8_mgskvkjogx2f9x2f98x2fSgmay_Gvkd_Ckd_oiut.vtmx3fbkx78youtx3dh34j3g0ki6705j972j39ig2k09609h04_$/$/$/$/$?i10c.ua=1&i10c.dv=21";
const exortImage =
  "https://c-3sux78kvnkay76x24j7a1v9r0cvge9qx2eiruajlx78utzx2etkz.g00.gamepedia.com/g00/3_c-3juzg8.mgskvkjog.ius_/c-3SUXKVNKAY76x24nzzvyx3ax2fx2fj7a1v9r0cvge9q.iruajlx78utz.tkzx2fjuzg8_mgskvkjogx2f8x2f87x2fSgmay_Gvkd_Kdux78z_oiut.vtmx3fbkx78youtx3d63413g6jg5815k3162j4070l6jh19248_$/$/$/$/$?i10c.ua=1&i10c.dv=21";
const castImage =
  "https://c-3sux78kvnkay76x24j7a1v9r0cvge9qx2eiruajlx78utzx2etkz.g00.gamepedia.com/g00/3_c-3juzg8.mgskvkjog.ius_/c-3SUXKVNKAY76x24nzzvyx3ax2fx2fj7a1v9r0cvge9q.iruajlx78utz.tkzx2fjuzg8_mgskvkjogx2fjx2fj0x2fOtbuqk_oiut.vtmx3fbkx78youtx3dhjj93187k792g96ig7531j1ii21l76hl_$/$/$/$/$?i10c.ua=1&i10c.dv=21";

const KEYS = ["q", "w", "e", "r"];

class App extends Component {
  constructor(props) {
    super(props);
    this.quasButton = React.createRef();
    this.wexButton = React.createRef();
    this.exortButton = React.createRef();
    this.castButton = React.createRef();
    this.state = {
      combination: 0,
      keyCombination: [],
      castedSkill: ""
    };
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
          "https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/c/c7/Invoke.mp3"
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

  render() {
    const { castedSkill, keyCombination } = this.state;

    return (
      <div className="App">
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
                image = quasImage;
              }
              if (e === "w") {
                image = wexImage;
              }
              if (e === "e") {
                image = exortImage;
              }
              return <Icon backgroundImage={image} key={index} />;
            })}
          </IconGroup>
          <ButtonGroup>
            <Button backgroundImage={quasImage} reference={this.quasButton} />
            <Button backgroundImage={wexImage} reference={this.wexButton} />
            <Button backgroundImage={exortImage} reference={this.exortButton} />
            <Button backgroundImage={castImage} reference={this.castButton} />
          </ButtonGroup>
        </header>
      </div>
    );
  }
}

export default keydown(KEYS)(App);
