import React, { Component } from 'react';
import Form from './Form/Form';
import ContactList from './ContactList';
import shortid from 'shortid';
import initialContacts from './contacts.json';

export class App extends Component {
  state = {
    contacts: initialContacts,
  };

  addContact = name => {
    // const { name } = data;
    const contact = {
      id: shortid.generate(),
      name,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </>
    );
  }
}
