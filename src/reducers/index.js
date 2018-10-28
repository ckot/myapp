import { combineReducers } from 'redux'

// import assets from './assets';
import problem from './problem';
import tabs from './tabs';
import turns from './turns';
import user from './user';

export default combineReducers({
  problem,
  tabs,
  turns,
  user
});
