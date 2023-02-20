import React from "react";

const ContactList = ({contactsAray, onDelete}) => (
   <ul>
      {contactsAray.map(({ id, name, number }) => {
         return (
            <li key={id}>{name}: {number} <button type="button" onClick={() => {onDelete(id)}}>delete</button></li>
         );
      })}
   </ul>
);

export default ContactList;
