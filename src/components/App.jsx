import { Component } from "react";
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from '../components/App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onAddingContact = newContact => {
    const contacts = this.state.contacts;
    contacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  onFilterHandler = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  onDeleteHandler = contactId => {
    const notId = contact => contact.id !== contactId;
    const updatedList = this.state.contacts.filter(notId);
    this.setState({ contacts: updatedList });
  };
  
  render() {
    const { contacts, filter } = this.state;
    const { onAddingContact, onDeleteHandler, onFilterHandler } = this;

    return (
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm
          onAddingContacts={onAddingContact}
          contacts={contacts} 
          />
        <h2 className={css.subtitle}>Contacts</h2>
        <Filter
          onFilterHandler={onFilterHandler}
          filteredContent={filter}
          />
        <ContactList
          contacts={contacts}
          handleDelete={onDeleteHandler}
          filteredContent={filter}
        />
      </div>
    );
  }

};
