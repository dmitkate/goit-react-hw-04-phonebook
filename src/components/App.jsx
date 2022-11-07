import React, { useState, useEffect } from 'react';

import { Find } from './Filter';
import { FormIn } from './Formin.jsx';
import { ContactList } from './Contact.jsx';
export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const onSubmit = evt => {
    if (contacts.find(contact => contact.name === evt.name)) {
      alert(`${evt.name} is already in contacts`);
      return false;
    }
    setContacts([evt, ...contacts]);
    return true;
  };

  const onFilterChange = value => {
    setFilter(value);
  };
  const deleteV = name => {
    setContacts(contacts.filter(contact => contact.name !== name));
  };
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // componentDidMount() {
  //   const contactsFromLocalStorage = localStorage.getItem('contacts');
  //   const parseContactsFromLocal = JSON.parse(contactsFromLocalStorage);
  //   if (parseContactsFromLocal) {
  //     this.setState({ contacts: parseContactsFromLocal });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  let formFilter = contacts;
  if (filter) {
    formFilter = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  }
  return (
    <>
      <h1>Phonebook:</h1>
      <FormIn data={onSubmit} />
      <h2>Contacts:</h2>
      <Find onChange={onFilterChange} />
      <ContactList allContacts={formFilter} delete={deleteV} />
    </>
  );
}
