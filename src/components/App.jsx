import React from 'react';

import { Find } from './Filter';
import { FormIn } from './Formin.jsx';
import { ContactList } from './Contact.jsx';
export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  onSubmit = evt => {
    if (this.state.contacts.find(contact => contact.name === evt.name)) {
      alert(`${evt.name} is already in contacts`);
      return false;
    }
    this.setState(prevState => ({
      contacts: [evt, ...prevState.contacts],
    }));
    return true;
  };

  onFilterChange = value => {
    this.setState({ filter: value });
  };
  delete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  componentDidMount() {
    const contactsFromLocalStorage = localStorage.getItem('contacts');
    const parseContactsFromLocal = JSON.parse(contactsFromLocalStorage);
    if (parseContactsFromLocal) {
      this.setState({ contacts: parseContactsFromLocal });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    let formFilter = this.state.contacts;
    if (this.state.filter) {
      formFilter = this.state.contacts.filter(({ name }) => {
        return name.toLowerCase().includes(this.state.filter.toLowerCase());
      });
    }
    return (
      <>
        <h1>Phonebook:</h1>
        <FormIn onSubmit={this.onSubmit} />
        <h2>Contacts:</h2>
        <Find onChange={this.onFilterChange} />
        <ContactList allContacts={formFilter} delete={this.delete} />
      </>
    );
  }
}
