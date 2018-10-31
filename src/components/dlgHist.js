import React from "react";

import Panel from "./panel";
import Turn from "./turn";

const DialogueHistory = (props) => {
  const children = props.turns.map((turn, idx) => (
    <Turn studentResponseHandler={props.handleStudentTurn}
          key={idx.toString()}
          turn={turn} />
  ));

  return (
    <Panel region="dlghist-region" title="Dialogue History">
      {children}
    </Panel>
  );
}

export default DialogueHistory;
