import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, onRemoveContact, onUpdateContact }) => (
  <ul>
    {contacts.map(({ id, name, number, completed }) => (
      <ContactListItem
        key={id}
        name={name}
        number={number}
        completed={completed}
        onRemove={() => onRemoveContact(id)}
      />
    ))}
  </ul>
);

export default ContactList;
