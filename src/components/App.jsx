import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import shortid from 'shortid';
// import initialContacts from './contacts.json';

const INITIAL_STATE = {
  // contacts: initialContacts,
  contacts: [],
  filter: '',
};

export const App = () => {
  const [filter, setFilter] = useState(INITIAL_STATE.filter);
  const [contacts, setContacts] = useState(INITIAL_STATE.contacts);

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const { name, number } = data;
    if (contacts.find(contact => contact.name === name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  const removeContact = id => {
    setContacts(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  const onChangeFilter = event => {
    setFilter({ filter: event.currentTarget.value });
  };

  const getfilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filteredContacts;
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={onChangeFilter} />
      <ContactList contacts={getfilteredContacts()} onDelete={removeContact} />
    </>
  );
};
