import React from "react";

function Utterance(props) {
  const whom = props.who === "tutor" ? "Tutor" : "You";
  return (
    <div className={props.who}>
      <b>{whom}:</b> &nbsp; {props.text}
    </div>
  );
}

export default Utterance;
