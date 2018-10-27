import { connect} from 'react-redux';
import React from 'react';

import { userActivateTab } from '../actions/';

import Tabs from '../components/tabs';

const getVisibleTabs = (tabs) => {
    return tabs.filter((t) => t.visible)
}

const mapStateToProps = state => ({
  tabs: getVisibleTabs(state.tabs)
})

const mapDispatchToProps = dispatch => ({
  activateTab: id => dispatch(userActivateTab(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs);
