import React from "react";

import ImageTabPane from './imageTabPane';
import Tab from "./tab";
import VideoTabPane from './videoTabPane';

const Tabs = ({tabs, activateTab}) => {
  
  const tabBtns = tabs.map((tab, idx) => (
    <Tab key={idx.toString()}
        id={tab.id}
        label={tab.label}
        type={tab.type}
        active={tab.active}
        visible={tab.visible} 
        onClick={() => activateTab(tab.id)}
    />
  ));
  
  const activeTab = tabs.find((t) => t.active === true);
  let activeTabContent;
  switch(activeTab.type) {  
    case "video":
      activeTabContent = <VideoTabPane content={activeTab.content}/>
      break;
    case "image":
      activeTabContent = <ImageTabPane content={activeTab.content}/>;
      break;
    default:
      activateTabContent = 'Unknown content';
  }
  return (
    <div className={"panel tabs-region"}>
      <div className="tabs">{tabBtns}</div>
      <div className="tabcontent active">
        {activeTabContent}
      </div>
    </div>
  );
}


export default Tabs;
