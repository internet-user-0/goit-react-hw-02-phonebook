import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// nanoid()
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class Phonebook extends Component {
   state = {
      contacts: [
         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
   };

   addContact = (name, number) => {
      const contact = {
         id: nanoid(),
         name,
         number,
      };
      const alreadyHas = this.state.contacts.map(contact => {
         return contact.name;
      });

      if (alreadyHas.includes(contact.name)) {
         alert(contact.name + ' is already in contacts');
         return;
      }

      this.setState(({ contacts }) => ({
         contacts: [contact, ...contacts],
      }));
   };

   changeFilter = e => {
      this.setState({ filter: e.currentTarget.value });
   };


// удаляет из contacts, но не перерисовывает разметку
   onDelete = id => {
      const indexContact = this.state.contacts.findIndex(contact => contact.id === id)
      console.log(indexContact)
      if (indexContact !== -1) {
         this.state.contacts.splice(indexContact, 1)
         console.log(this.state.contacts)
      }
   };



   render() {
      const { contacts, filter } = this.state;

      const normalizeFilter = filter.toLowerCase();

      const visibleContacts = contacts.filter(contact =>
         contact.name.toLowerCase().includes(normalizeFilter)
      );

      return (
         <div>
            <h1>Phonebook</h1>
            <ContactForm onAddContact={this.addContact} />

            <h2>Contacts</h2>
            <Filter value={filter} onChange={this.changeFilter}></Filter>
            <ContactList
               contactsAray={visibleContacts}
               onDelete={this.onDelete}
            ></ContactList>
         </div>
      );
   }
}

export default Phonebook;
