import { actions } from '../actions';

const assetsReducer = (state = [], action) => {
  switch (action.type) {
    case actions.SCENARIO_START:
      return Object.assign({}, ...action.data.assets);
    default:
      return state;
  }
}

export default assetsReducer;