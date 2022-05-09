import React from 'react';
// import './ContactList.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul className="ContactList">
    {contacts.map(({ id, name }) => (
      <li key={id} className="ContactList__item">
        <p className="ContactList__name">{name}</p>
        <button onClick={() => onDelete(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
