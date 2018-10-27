import React from "react";


// import Navbar from "./navbar";
// import DialogueHistory from "./dlgHist";

// import ProblemStatement from "./probStmt";
import Header from '../containers/header';
import ProbDesc from '../containers/probDesc.js'
import TurnList from '../containers/turnList';
import TabList from '../containers/tabList';

const App = () => {
  return (
    <div className="container">
      <Header />
      <ProbDesc />
      <TurnList />
      <TabList />
    </div>
  );
}

export default App;
