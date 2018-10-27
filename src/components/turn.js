import React from "react";

import TutorTurn from "./tutorTurn";
import StudentTurn from "./studentTurn";
import StudentForm from './studentForm';
import WizardForm from './wizardForm';

function Turn(props) {
  return (
    <div className="turn">
      <TutorTurn text={props.turn.tutor} />
      <StudentTurn text={props.turn.student} />
      <StudentForm turn={props.turn} />
      <WizardForm turn={props.turn} />
    </div>
  );
}

export default Turn;
