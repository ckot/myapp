import { actions } from '../actions';

const tabsReducer = (state = [], action) => {
  switch(action.type) {
    case actions.TABS_INITIALIZE:
      // protect against bad content authoring where multiple tabs
      // are labled as 'active'
      const firstActive = state.tabs.find({active: true});
      const firstVisible = state.tabs.find({visible: true});
      const activeTabId = typeof firstActive !== 'undefined' ? firstActive.id : firstVisible.id; 
      return state.map((tab) =>
        (tab.id === activeTabId)
        ? { ...tab, active: true}
        : { ...tab, active: false}
      );
    case actions.TAB_SET_CONTENT:
      return state;
    case actions.TAB_ACTIVATE:
      return state.map((tab) =>
        (tab.id === action.id)
        ? { ...tab, active: true}
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