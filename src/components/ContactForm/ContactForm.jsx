import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import style from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { onSubmit } = this.props;
    onSubmit && onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState(() => ({
      ...INITIAL_STATE,
    }));
  };

  render() {
    return (
      <form className={style.FormInput} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleInputChange}
          id={this.nameInputId}
          className={style.FormInput__input}
        />
        <label htmlFor={this.numberInputId}>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleInputChange}
          id={this.numberInputId}
          className={style.FormInput__input}
        />
        <button type="submit" className={style.FormButton}>
          Add Contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
