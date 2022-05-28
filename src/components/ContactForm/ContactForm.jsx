import { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import style from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState(INITIAL_STATE.name);
  const [number, setNumber] = useState(INITIAL_STATE.number);

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const onSubmit = event => {
    event.preventDefault();
    onSubmit && handleSubmit({ name: name, number: number });
    reset();
  };

  const reset = () => {
    setName(INITIAL_STATE.name);
    setNumber(INITIAL_STATE.number);
  };

  return (
    <form className={style.FormInput} onSubmit={onSubmit}>
      <label htmlFor={nameInputId}>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={event => setName(event.target.value)}
        id={nameInputId}
        className={style.FormInput__input}
      />
      <label htmlFor={numberInputId}>Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={event => setNumber(event.target.value)}
        id={numberInputId}
        className={style.FormInput__input}
      />
      <button type="submit" className={style.FormButton}>
        Add Contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
