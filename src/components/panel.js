import React from "react";

import "../styles.scss";

function Panel(props) {
  return (
    <div className={"panel " + props.region}>
      <div className="panel-header">
        <div className="panel-title">{props.title}</div>
      </div>
      <div className="panel-body">{props.children}</div>
    </div>
  );
}

export default Panel;
