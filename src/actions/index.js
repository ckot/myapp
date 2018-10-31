
const USER = 'user';
const SYSTEM = 'system';

const TUTOR_MESSAGE = 'TUTOR_MESSSAGE';
const SESSION_MESSAGE = 'SESSION_MESSAGE';

const USER_LOGIN = 'USER_LOGIN';

const PROBLEM_INIT = 'PROBLEM_INIT';
const PROBLEM_UPDATE_PROGRESS = 'PROBLEM_UPDATE_PROGRESS';
const PROBLEM_COMPLETE = 'PROBLEM_COMPLETE';

// currently unused
const DISCUSSION_START = 'DISCUSSION_START';
const DISCUSSION_UPDATE_PROGRESS = 'DISCUSSION_UPDATE_PROGRESS';
const DISCUSSION_COMPLETE = 'DISCUSSION_COMPLETE';

const TAB_ACTIVATE = 'TAB_ACTIVATE';
const TAB_SHOW = 'TAB_SHOW';
const TAB_HIDE = 'TAB_HIDE';

const TURN_INIT = 'TURN_INIT';
const TURN_DISPLAY_STUDENT_RESPONSE = 'TURN_DISPLAY_STUDENT_RESPONSE';
const TURN_REMOVE_STUDENT_FORM = 'TURN_REMOVE_STUDENT_FORM';
const TURN_SUBMIT_STUDENT_RESPONSE = 'TURN_SUBMIT_STUDENT_RESPONSE';
const TURN_INIT_WIZARD_FORM = 'TURN_INIT_WIZARD_FORM';
const TURN_REMOVE_WIZARD_FORM = 'TURN_REMOVE_WIZARD_FORM';
const TURN_SUBMIT_WIZARD_FORM = 'TURN_SUBMIT_WIZARD_FORM';

const SPINNER_SHOW = 'SPINNER_SHOW';
const SPINNER_HIDE = 'SPINNER_HIDE';

export const userActivateTab = id => ({
  type: TAB_ACTIVATE,
  source: USER,
  id
});

export const displayStudentResponse = (id, studentResponse) => ({
  type: TURN_DISPLAY_STUDENT_RESPONSE,
  source: SYSTEM,
  id,
  studentResponse
});

export const removeStudentForm = (id) => ({
  type: TURN_REMOVE_STUDENT_FORM,
  source: SYSTEM,
  id
});

// conditional thunk example
// function incrementIfOdd() {
//   return (dispatch, getState) => {
//     const { counter } = getState();

//     if (counter % 2 === 0) {
//       return;
//     }

//     dispatch(increment());
//   };
// }

export const handleStudentResponse = (id, serverValue, displayValue) => {
  return (dispatch, getState) => {
    dispatch(displayStudentResponse(id, displayValue));
    dispatch(removeStudentForm(id));
    let nextMsg = messages.shift();
    if (!!nextMsg) {
      for (let action of nextMsg.actions) {
        dispatch(action);
      }
    }
  };
}


function mkTutorTurn(tutorText, formType, choices) {
  return {
    type: TURN_INIT,
    data: {
      tutorText,
      studentForm: {
        formType,
        choices
      }
    }
  };
}

function mkSystemMessage(tutor_actions) {
  return {
    type: TUTOR_MESSAGE,
    actions: tutor_actions
  };

}

const messages = [
  mkSystemMessage([
    { type: TAB_ACTIVATE, id: 'video' },
    mkTutorTurn("Watch the video and click continue when you are done.", "continue", null)
  ]),
  mkSystemMessage([
    mkTutorTurn("What is the weight of an unladen swallow?", "sansq", null)
  ]),
  mkSystemMessage([
    mkTutorTurn("African. What is the weight of an unladed african swallow?", "sansq", null)
  ]),
  mkSystemMessage([
    mkTutorTurn("Great! So, if the swallow weighs 42g and parcel weights 10 g, what is the weight of the <b>laden</b> swallow ?", "lansq", null)
  ]),
  mkSystemMessage([
    { type: TAB_ACTIVATE, id: 'fig1'},
    mkTutorTurn("Take a look a Figure 1. Which do you prefer?", "lansq", null)
  ]),
  mkSystemMessage([
    mkTutorTurn("I don't understand what you said. How about selecting a radio button.",
              "radios",
              [{value: 'A', label: "A"},
                {value: "B", label: "B"},
                {value: 'C', label: 'C'}])
  ]),
  mkSystemMessage([
    { type: TAB_ACTIVATE, id: 'fig2' },
    mkTutorTurn("Take a look a Figure 2. Which ones are <i>incorrect</i>?", "sansq", null)
  ]),

  mkSystemMessage([
    mkTutorTurn("I don't understand what you said. Select the incorrect ones using checkboxes.",
      "checkboxes",
      [{ value: 'A', label: "A" },
      { value: "B", label: "B" },
      { value: 'C', label: 'C' }])
  ]),
  mkSystemMessage([
    mkTutorTurn("Great. Which of the following would be true if the earth's poles reversed?",
               "menu",
                [{ value: 'A', label: "A" },
                  { value: "B", label: "B" },
                  { value: 'C', label: 'C' }])
  ])


];

console.log(messages);
// simple actions are either sent up from the server or dispatched within thunks
export const actions = {
  USER_LOGIN,
  PROBLEM_INIT,
  PROBLEM_COMPLETE,
  TAB_ACTIVATE,
  TAB_SHOW,
  TAB_HIDE,
  TURN_INIT,
  TURN_INIT_WIZARD_FORM,
  TURN_DISPLAY_STUDENT_RESPONSE,
  TURN_REMOVE_STUDENT_FORM,
  SPINNER_HIDE,
  SPINNER_SHOW
};
