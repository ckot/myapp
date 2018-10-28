import React from "react";

import { isDefined } from '../utils';

import "../styles.scss";


function Navbar({probName, probProgress, userName}) {
  const title = isDefined(probName) ? `${probName} Problem` : '';
  const userLabel = isDefined(userName) ? `Welcome, ${userName}` : ''
  return (
    <div className="navbar navbar-region">
      <span className="navitem branding">My App</span>
      <span className="navitem title">{title}</span>
      <span className="navitem progress-bar">
        <progress value={probProgress} max="100">{probProgress} %</progress>
      </span>
      <span className="navitem user">{userLabel}</span>
    </div>
  );
}

export default Navbar;
