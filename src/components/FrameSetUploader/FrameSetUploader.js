import { Button, TextArea } from "@blueprintjs/core";
import React, { Component, useState } from "react";

import cx from "classnames";

import { observer } from "mobx-react";
import { toJS } from "mobx";
import _get from "lodash.get";
import css from "./FrameSetUploader.module.scss";

// import story9104 from "../../Scripts/000-charlieAndLucy.js";
import story002 from "../../Scripts/002-BrightNewDay";
import story003 from "../../Scripts/003-KatGetsADress";
import story004 from "../../Scripts/004-KatGoesOffScript";
import story005 from "../../Scripts/005-Whambulance";
import story006 from "../../Scripts/006-KatHasFeelings";
import story007 from "../../Scripts/007-KatsFirstQuest";
import story010 from "../../Scripts/010-TrollSoSad";
import story011 from "../../Scripts/011-LizIsSlow";
import story013 from "../../Scripts/013-ChocolateMilk";
import story014 from "../../Scripts/014-TruthBomb";
import story015 from "../../Scripts/015-KatAndLizSplitUp";
import story020 from "../../Scripts/020-TrollCaveRapBattle";
import story050 from "../../Scripts/050-FindingScribbleScrabble";
import story100 from "../../Scripts/100-LizGoesCrazy";
import story110 from "../../Scripts/110-LizBloops";
import story200 from "../../Scripts/200-DennisTheMenace";
import story300 from "../../Scripts/300-MerlindaTheFairyPrincessPart1";
import story310 from "../../Scripts/310-MerlindaTheFairyPrincessPart2";
import story330 from "../../Scripts/330-MerlindaTheFairyPrincessPart3";
import story8000 from "../../Scripts/8000-dogAndPup-001.js";
import story8010 from "../../Scripts/8010-dogAndPup-002.js";
import story8054 from "../../Scripts/8054-math-NineTimesSix.js";
import story9000 from "../../Scripts/9000-ANewSoundInTheWoods";
import story9100 from "../../Scripts/9100-KatsSecondQuest";
import story9102 from "../../Scripts/9102-ThisOneIsFunnyISwear.js";
import story9103 from "../../Scripts/000-ScriptTemplate.js";
import story9104 from "../../Scripts/9104-ThisOneIsNotFunny-001.js";
import story9901 from "../../Scripts/9901-randomBits01";
import story9902 from "../../Scripts/9902-randomBits02";
import story9903 from "../../Scripts/9903-randomBits03-LizHasElfEars.js";
import story9904 from "../../Scripts/9904-randomBits04-Pantloads.js";
import story9905 from "../../Scripts/9905-randomBits-aFlyInMyEye.js";
import story9906 from "../../Scripts/9906-randomBits-bunnyRap.js";
import story9907 from "../../Scripts/9907-randomBits-greenBeans.js";
import story9908 from "../../Scripts/9908-randomBits-newKids.js";
import story9909 from "../../Scripts/9909-randomBits-dennisRaps.js";
import story9910 from "../../Scripts/9910-randomBits-rapGirls.js";
import story9912 from "../../Scripts/9912-randomBits-R2D2andTheDOMStringList.js";
import story9913 from "../../Scripts/9913-randomBits-TheCowInTheTree.js";
import story9914 from "../../Scripts/9914-randomBits-TheBloodyPotato.js";
import story9915 from "../../Scripts/9915-randomBits-KatGetsADressForReal.js";
import story9916 from "../../Scripts/9916-test-RapQuest01.js";
import story9917 from "../../Scripts/9917-test-MyDadIsSoCold.js";
import story9918 from "../../Scripts/9918-test-KatMightGetADress.js";
import story9919 from "../../Scripts/9919-test-ILikeJam.js";
import story9920 from "../../Scripts/9920-test-BugYuck.js";
import story9921 from "../../Scripts/9921-test-WeGetAPet.js";
import story9922 from "../../Scripts/9922-test-SoWhenDoWeGetTheCupcakes.js";
import story9923 from "../../Scripts/9923-test-FrogHopper.js";

class FrameSetUploader extends Component {
  // state = { text: JSON.stringify(story002) }
  // state = { text: JSON.stringify(story003) }
  // state = { text: JSON.stringify(story004) }
  // state = { text: JSON.stringify(story005) }
  // state = { text: JSON.stringify(story006) }
  // state = { text: JSON.stringify(story007) }
  // state = { text: JSON.stringify(story010) };
  // state = { text: JSON.stringify(story011) }
  // state = { text: JSON.stringify(story013) }
  // state = { text: JSON.stringify(story014) }
  // state = { text: JSON.stringify(story015) }
  // state = { text: JSON.stringify(story020) }
  // state = { text: JSON.stringify(story050) }
  // state = { text: JSON.stringify(story100) }
  // state = { text: JSON.stringify(story110) }
  // state = { text: JSON.stringify(story200) }
  // state = { text: JSON.stringify(story300) }
  // state = { text: JSON.stringify(story310) }
  // state = { text: JSON.stringify(story330) }
  // state = { text: JSON.stringify(story8000) }
  // state = { text: JSON.stringify(story9000) };
  // state = { text: JSON.stringify(story9100) }
  // state = { text: JSON.stringify(story9103) };
  // state = { text: JSON.stringify(story9901) }
  // state = { text: JSON.stringify(story9902) }
  // state = { text: JSON.stringify(story9903) };
  // state = { text: JSON.stringify(story9904) };
  // state = { text: JSON.stringify(story9905) };
  // state = { text: JSON.stringify(story9906) };
  // state = { text: JSON.stringify(story9907) };
  // state = { text: JSON.stringify(story9908) };
  // state = { text: JSON.stringify(story9104) };
  // state = { text: JSON.stringify(story9909) };
  // state = { text: JSON.stringify(story9910) };
  // state = { text: JSON.stringify(story9912) };
  // state = { text: JSON.stringify(story9913) };
  // state = { text: JSON.stringify(story9914) };
  // state = { text: JSON.stringify(story9915) };
  // state = { text: JSON.stringify(story9916) };
  // state = { text: JSON.stringify(story9917) };
  // state = { text: JSON.stringify(story9918) };
  // state = { text: JSON.stringify(story9919) };
  // state = { text: JSON.stringify(story8054) };
  // state = { text: JSON.stringify(story9102) };
  // state = { text: JSON.stringify(story9104) };
  // state = { text: JSON.stringify(story8010) };
  // state = { text: JSON.stringify(story9920) };
  // state = { text: JSON.stringify(story9921) };
  // state = { text: JSON.stringify(story9922) };
  state = { text: JSON.stringify(story9923) };

  onChangeDialog = ({ event }) => {
    const text = event.target.value;

    this.setState({ text });
  };

  renderButton = () => {
    const { onImportJson } = this.props;
    const text = this.state.text;

    let newWorld = { noData: 5 };

    if (text) {
      newWorld = JSON.parse(text);
    }

    return (
      <Button
        onClick={() => onImportJson({ newWorld })}
        className={cx(css.uploadButton)}
      >
        Upload JSON
      </Button>
    );
  };

  render = () => {
    const { text } = this.state;

    return (
      <div className={css.main}>
        {this.renderButton()}
        <TextArea
          className={`${css.jsonPaster} }`}
          onChange={(event) => this.onChangeDialog({ event })}
          id="text-input"
          value={text}
        />
      </div>
    );
  };
}

export default observer(FrameSetUploader);
