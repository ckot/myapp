import React from "react";
import Parser from 'html-react-parser';

import { isDefined } from '../utils';

import StudentForm from './studentForm';
import WizardForm from './wizardForm';


const Utterance = ({ who, text }) => {
  const whom = who === "tutor" ? "Tutor" : "You";
  return isDefined(text)
         ? (<div className={who}><b>{whom}: </b> {Parser(text)}</div>)
         : null;
}

const Turn = (props) => {
  return (
    <div className="turn">
      <Utterance who="tutor" text={props.turn.tutorText} />
      <Utterance who="student" text={props.turn.studentResponse} />
      <StudentForm responseHandler={props.studentResponseHandler} turn={props.turn} />
      <WizardForm turn={props.turn} />
    </div>
  );
}

export default Turn;
