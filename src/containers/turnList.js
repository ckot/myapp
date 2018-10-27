import { connect } from 'react-redux';
import React from 'react';

import DialogueHistory from '../components/dlgHist';

const mapStateToProps = state => ({
  turns: state.turns
})

const mapDispatchToProps = dispatch => ({
  submitTutorTurn: id => dispatch((id)),
  submitWizardTurn: id => dispatch((id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogueHistory);
