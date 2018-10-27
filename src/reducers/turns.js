import { actions } from '../actions';

let nextTurnId = 0;

const turnsReducer = (state = [], action) => {
  switch(action) {
    case actions.CREATE_TURN: 
      return [
        ...state, { 
           id: nextTurnId++,
           tutor: action.data.tutor,
           student: null,
           studentForm: action.data.studentForm,
           wizardForm: null  
        }
      ];
    default:
      return state;
  }
}
export default turnsReducer;