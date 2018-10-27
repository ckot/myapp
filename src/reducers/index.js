import { combineReducers } from 'redux'

import tabs from './tabs.js';
import turns from './turns.js';

export default combineReducers({
  tabs,
  turns
});
