import React from "react";

import Utterance from "./utterance";
import {isDefined} from '../utils';

function StudentTurn(props) {
  if (isDefined(props.text)) {
    return <Utterance who="student" text={props.text} />;
  }
  return null;
}

export default StudentTurn;
