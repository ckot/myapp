import React from "react";

import "../styles.scss";

function Navbar({title, progress, user}) {
  return (
    <div className="navbar navbar-region">
      <span className="navitem branding">My App</span>
      <span className="navitem title">{title}</span>
      <progress value={progress} max="100"/>
      <span className="navitem user">{user}</span>
    </div>
  );
}

export default Navbar;
