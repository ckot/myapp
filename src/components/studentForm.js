import React from 'react';

import { isDefined } from '../utils';

function StudentForm(props) {
  const form = props.turn.studentForm;

  if (isDefined(form)) {
    return <div className="student-form">formType: {form.formType}</div>
  }
  return null;
}

export default StudentForm;