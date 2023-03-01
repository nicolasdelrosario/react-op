import React from 'react'
import PropTypes from 'prop-types';
import Contact from '../../models/contact.class'


const ContactComponent = ({ contact }) => {
  return (
    <div>
      <h3>Complete Name: {contact.name} {contact.lastname}</h3>
      <p>Email: {contact.email}</p>
      <span>{contact.online
        ? 'Contact online'
        : 'Contact offline'}
      </span>
    </div>
  )
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent