import { actions } from '../actions';

const problemReducer = (state = [], action) => {
  switch (action.type) {
    case actions.PROBLEM_INIT:
      return Object.assign({}, {
        name: action.data.problem.name,
        statement: action.data.problem.statement,
        progress: 0
      });
    default:
      return state;
  }
}

export default problemReducer;