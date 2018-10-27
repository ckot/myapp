import React from "react";

import Panel from "./panel.js";

const ProblemStatement = ({text}) => {
  const content = text.map((para, idx) => (
    <p key={idx.toString()}>{para}</p>
  ));
  return (
    <Panel region="probdesc-region" title="Problem Statement">
      {content}
    </Panel>
  );
}

export default ProblemStatement;
