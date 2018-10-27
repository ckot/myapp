import React from 'react';

import { isDefined } from '../utils';

function WizardForm(props) {
  const form = props.turn.wizardForm;
  if (isDefined(form)) {
    return <div class="wizard-form">{form.type}</div>;
  }
  return null;
}

export default WizardForm;