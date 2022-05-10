import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul className={style.ContactList__list}>
    {contacts.map(({ id, name, number }) => (
      <li className={style.ContactList__item} key={id}>
        <span className={style.ContactList__text}>{name}: </span>
        <span className={style.ContactList__text}>{number}: </span>
        <button
          className={style.ContactList__button}
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
