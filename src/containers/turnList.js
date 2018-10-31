import { connect } from 'react-redux';
import React from 'react';

import {
  handleStudentResponse,
  removeStudentForm
} from '../actions';

import DialogueHistory from '../components/dlgHist';

const mapStateToProps = state => ({
  turns: state.turns
})

const mapDispatchToProps = dispatch => ({
  handleStudentTurn: (id, serverValue, displayValue) => 
    dispatch(handleStudentResponse(id, serverValue, displayValue))
})
// handleWizardTurn: (id, value) => dispatch((id))

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogueHistory);
