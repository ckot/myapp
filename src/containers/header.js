import { connect } from 'react-redux';
import React from 'react';

import Navbar from '../components/navbar';

const mapStateToProps = state => ({
  user: state.user,
  title: state.problem.title,
  progress: state.problem.progress
})

export default connect(
  mapStateToProps,
)(Navbar);
