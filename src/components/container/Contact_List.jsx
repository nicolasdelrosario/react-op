import React from 'react'
import ContactComponent from '../pure/Contact'
import Contact from '../../models/contact.class'

const ContactListComponent = () => {
  const defaultContact = new Contact('Nicolas', 'Del Rosario', 'contact@nicolasdelrosario.com', true)
  
  return (
    <div>
      <h1>Contacts:</h1>
      <ContactComponent contact={defaultContact}/>
    </div>
  )
}

export default ContactListComponent