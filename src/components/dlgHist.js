import React from "react";

import Panel from "./panel";
import Turn from "./turn";

const DialogueHistory = ({turns}) => {
  const children = turns.map((turn, idx) => (
    <Turn key={idx.toString()} turn={turn} />
  ));

  return (
    <Panel region="dlghist-region" title="Dialogue History">
      {children}
    </Panel>
  );
}

export default DialogueHistory;
