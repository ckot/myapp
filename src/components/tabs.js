import React from "react";

import Tab from "./tab";

const Tabs = ({tabs, activateTab}) => {
  
  const tabBtns = tabs.map((tab, idx) => (
    <Tab key={idx.toString()}
        id={tab.id}
        label={tab.label}
        type={tab.type}
        active={tab.active}
        visible={tab.visible} 
        onClick={activateTab}
    />
  ));
  return (
    <div className={"panel tabs-region"}>
      <div className="tabs">{tabBtns}</div>
      <div className="tabcontent active">
        active tab's content to be displayed here
      </div>
    </div>
  );
}


export default Tabs;
