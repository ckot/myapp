import React from "react";

import Utterance from "./utterance";
import { isDefined } from '../utils';

function TutorTurn(props) {
  if (isDefined(props.text)) {
    return <Utterance who="tutor" text={props.text} />;
  }
  return null;
}

export default TutorTurn;
