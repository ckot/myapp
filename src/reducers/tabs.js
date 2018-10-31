import { actions } from '../actions';

const tabsReducer = (state = [], action) => {
  switch(action.type) {
    case actions.PROBLEM_INIT:
      // protect against bad content authoring where multiple tabs
      // are labled as 'active'
      const firstActive = state.tabs.find({active: true});
      // const firstVisible = state.tabs.find({visible: true});
      let activeTabId = !!firstActive ? firstActive.id : null; 
      return state.map((tab) =>
        (tab.id === activeTabId)
        ? { ...tab, active: true}
        : { ...tab, active: false}
      );
    case actions.TAB_ACTIVATE:
      return state.map((tab) =>
        (tab.id === action.id)
        ? { ...tab, active: true, visible: true}
        : { ...tab, active: false}
      );
    case actions.TAB_SHOW: 
      return state.map((tab) =>
        (tab.id === action.id)
          ? {...tab,  visible: true}
          : tab
      );
    case actions.TAB_HIDE:
      return state.map((tab) =>
        (tab.id === action.id)
          ? { ...tab, visible: false }
          : tab
      );
    default:
      return state;
  }
}

export default tabsReducer;