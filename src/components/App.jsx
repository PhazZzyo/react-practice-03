import React, { Component } from 'react';
import Form from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
  };

  render() {
    /////const

    return (
      <>
        <h1>Phonebook</h1>
        <Form></Form>

        <h2>Contacts</h2>
      </>
    );
  }
}
