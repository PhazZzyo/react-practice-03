import React, { Component } from 'react';
import shortid from 'shortid';

export class Form extends Component {
  state = {
    name: '',
  };

  formInputId = shortid.generate();

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.name);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.formInputId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            id={this.formInputId}
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default Form;
