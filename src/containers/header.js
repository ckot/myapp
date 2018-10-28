import { connect } from 'react-redux';
import React from 'react';

import Navbar from '../components/navbar';

const mapStateToProps = state => ({
  userName: state.user.name,
  probName: state.problem.name,
  probProgress: state.problem.progress
})

export default connect(
  mapStateToProps,
)(Navbar);
