import { actions } from '../actions';

const userReducer = (state = [], action) => {
  switch (action.type) {
    case actions.USER_LOGIN:
      return Object.assign({}, ...action.data.user);
    default:
      return state;
  }
}

export default userReducer;