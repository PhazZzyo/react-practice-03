import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import shortid from 'shortid';
import initialContacts from './contacts.json';

const INITIAL_STATE = {
  contacts: initialContacts,
  filter: '',
};

export const App = () => {
  const [filter, setFilter] = useState(INITIAL_STATE.filter);
  const [contacts, setContacts] = useState(INITIAL_STATE.contacts);

  const addContact = data => {
    const { name, number } = data;
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts([newContact, ...contacts]);
  };

  const removeContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const onChangeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  useEffect(() => {
    const localContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={onChangeFilter} />
      <ContactList contacts={filteredContacts} onDelete={removeContact} />
    </>
  );
};
