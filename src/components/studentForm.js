import React, { Component } from 'react';



const validChars = /^[-a-zA-Z0-9_.,?()*+/^=%\s'"]*$/;
const allowedChars = "Only letters, numbers, punctuation and " +
  "mathematical operators are allowed."

const textValidationError = (text) => {
  return validChars.test(text) ? null : allowedChars;
}

const stdInitialState = {
  value: '',
  label: null,
  error: null
};

const choices = [
  { value: "value for choice 1", label: "1" },
  { value: "value for choice 2", label: "2" },
  { value: "value for choice 3", label: "3" }
];

const values2labels = (choices) => {
  return choices.reduce((dict, pair) => ({
    ...dict,
    [pair.value]: pair.label
  }),
    {});
}

const ErrorRegion = (props) => {
  return (!!props.errorMessage)
    ? (<div className="error-message">{props.errorMessage}</div>)
    : null;
}

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = stdInitialState;
  }

  handleChange(e) {
    const val = e.target.value.trim();
    this.setState({
      value: !val ? null : val,
      label: !val ? null : val,
      error: textValidationError(val)
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.value) {
      this.setState({error: 'Please answer the question.'});
    } else {
      this.props.responseHandler(this.state.value,
                              this.state.label);
    }
  }

  render() {
    const textField =
      (this.props.formType === 'sansq') 
       ? <input type="text" onChange={this.handleChange} size="60" />
       : <textarea rows="2" cols="60" onChange={this.handleChange} />;
  
    return (
      <form onSubmit={this.handleSubmit} >
        {textField}
        <input type="submit" value="Submit" />
        <ErrorRegion errorMessage={this.state.error} />
      </form>
    );
  }
}


class MenuForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.choices is this.props.choices with a placeholder option prepended
    this.choices = [{
      label: '- - - Please Select an Item - - -',
      value: '',
      disabled: true
    }, ...this.props.choices];
    this.label4value = values2labels(this.choices);
    this.state = stdInitialState;
  }

  handleChange(e) {
    const val = e.target.value;
    this.setState({ value: val, label: this.label4value[val], error: null });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!!this.state.error) {
      this.props.errorHandler(this.state.error);
    } else {
      this.props.responseHandler(this.state.value, this.state.label);
    }
  }

  render() {
    let options = this.choices.map((choice, idx) =>
      <option key={idx.toString()}
        value={choice.value}
        disabled={!!choice.disabled}>
        {choice.label}
      </option>
    );

    return (
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.value}
          onChange={this.handleChange}>
          {options}
        </select>
        <input type="submit" value="Submit" />
        <ErrorRegion errorMessage={this.state.error} />
      </form>
    );
  }
}


class RadioForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.label4value = values2labels(this.props.choices);
    this.state = stdInitialState;
  }

  handleChange(e) {
    const val = e.target.value;
    console.log(val);
    this.setState({
      value: val,
      label: this.label4value[val],
      error: null
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.value) {
      this.setState({'error': 'Please answer the question.'});
    } else {
      this.props.responseHandler(this.state.value, this.state.label);
    }
  }

  render() {
    const btns = this.props.choices.map((choice, idx) =>
      <div key={idx.toString()}>
        <label>
          <input type="radio"
            value={choice.value}
            onChange={this.handleChange} />
          {choice.label}
        </label>
      </div>
    );
    return (
      <form onSubmit={this.handleSubmit}>
        {btns}
        <input type="submit" value="Submit" />
        <ErrorRegion errorMessage={this.state.error} />
      </form>
    );
  }
}


class CheckboxForm extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.label4value = values2labels(this.props.choices);
    this.state = {
      checkedItems: new Set(),
      error: null
    }
  }

  toggleCheckbox(e) {
    const btn = e.target;
    const checked = btn.checked;
    if (checked) {
      this.addItem(btn.value);
    } else {
      this.removeItem(btn.value);
    }
  }

  addItem(item) {
    this.setState(({ checkedItems }) => ({
      checkedItems: new Set(checkedItems.add(item)),
      error: null
    }));
  }

  removeItem(item) {
    this.setState(({ checkedItems }) => {
      const newChecked = new Set(checkedItems);
      newChecked.delete(item);
      return {
        checkedItems: newChecked,
        error: null
      };
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.checkedItems.size) {
      this.setState({ error: "Please answer the question." });
    } else {
      const vals = Array.from(this.state.checkedItems);
      const value = vals.join(" ");
      const label = vals.map((v) => this.label4value[v]).join(', ');
      this.props.responseHandler(value, label);
    }
  }

  render() {
    const btns = this.props.choices.map((choice, idx) =>
      <div key={idx.toString()}>
        <label>
          <input type="checkbox"
            value={choice.value}
            onChange={this.toggleCheckbox} />
          {choice.label}
        </label>
      </div>
    );
    return (
      <form onSubmit={this.handleSubmit}>
        {btns}
        <input type="submit" value="Submit" />
        <ErrorRegion errorMessage={this.state.error} />
      </form>
    );
  }
}


class ButtonForm extends React.Component {
  constructor(props) {
    super(props);
    this.choices = [];
    
    switch (this.props.formType) {
      case "help":
        this.choices.push({ value: "help", label: 'Help' })
      case "continue":
        this.choices.push({ value: '[continue]', label: 'Continue' });
        break;
      case "ynq":
        this.choices.push({ value: "yes", label: 'Yes' });
        this.choices.push({ value: "no", label: 'No' });
        break;
      default:
        break;
    }
    console.log(this.choices);
    this.label4value = values2labels(this.choices);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    const value = e.target.value;
    const label = this.label4value[value];
    this.props.responseHandler(value, label);
  }

  render() {
    const btns = this.choices.map(
      (b, idx) =>
        <button key={idx.toString()}
          value={b.value}
          onClick={this.clickHandler}>
          {b.label}
        </button>
    );
    return (
      <div>
        {btns}
      </div>
    );
  }
}


class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.handleResponse = this.handleResponse.bind(this);
  }
 
  handleResponse(value, displayValue) {
    this.props.responseHandler(this.props.turn.id, value, displayValue);
  }

  render() {
    const form = this.props.turn.studentForm;
    if (!!form) {
      // console.log(form);
      // console.log(form.formType);

      switch(form.formType) {
        case "sansq":
        case "lansq":
          return <TextForm formType={form.formType} responseHandler={this.handleResponse} />;
        case 'continue':
        case 'help':
        case 'ynq':
          return <ButtonForm formType={form.formType} responseHandler={this.handleResponse} />
        case 'radios':
          return <RadioForm choices={form.choices} responseHandler={this.handleResponse} />
        case 'checkboxes':
          return <CheckboxForm choices={form.choices} responseHandler={this.handleResponse} />
        case 'menu':
          return <MenuForm choices={form.choices} responseHandler={this.handleResponse} />
        default:
          return null;
      }
    }
    return null;
  }
}

export default StudentForm;