import { connect } from 'react-redux';
import React from 'react';

import ProblemStatement from '../components/probStmt';

const mapStateToProps = state => ({
  text: state.problem.statement
})

// const mapDispatchToProps = dispatch => ({
//   userActivateTab: id => dispatch((id))
// })

export default connect(
  mapStateToProps,
)(ProblemStatement);
