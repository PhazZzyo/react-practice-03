import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import shortid from 'shortid';
import initialContacts from './contacts.json';

const INITIAL_STATE = {
  contacts: initialContacts,
  filter: '',
};

export class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  addContact = data => {
    const { name, number } = data;
    const { contacts } = this.state;
    console.log(contacts);
    if (contacts.find(contact => contact.name === name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  removeContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  onChangeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getfilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getfilteredContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.onChangeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.removeContact}
        />
      </>
    );
  }
}
