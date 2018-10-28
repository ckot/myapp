import React from "react";

const Utterance = ({who, text}) => {
  const whom = who === "tutor" ? "Tutor" : "You";
  return (
    <div className={who}>
      <b>{whom}:</b> &nbsp; {text}
    </div>
  );
      
}


export default Utterance;
