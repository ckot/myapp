import { actions } from '../actions';

let nextTurnId = 1;

const turnsReducer = (state = [], action) => {
  console.log(action.type);
  switch(action.type) {
    case actions.TURN_INIT:
      return [
        ...state, { 
           id: nextTurnId++,
           tutorText: action.data.tutorText,
           studentResponse: null,
           studentForm: action.data.studentForm,
           wizardForm: null  
        }
      ];
    case actions.TURN_DISPLAY_STUDENT_RESPONSE:
      console.log("in turn_disp_stud_response");
      return state.map((turn) =>
        
        (turn.id === action.id) 
        ? {...turn, studentResponse: action.studentResponse}
        : turn
      );
    case actions.TURN_REMOVE_STUDENT_FORM:
      return state.map((turn) =>
        (turn.id === action.id)
        ? {...turn, studentForm: null}
        : turn
      );
    default:
      return state;
  }
}
export default turnsReducer;