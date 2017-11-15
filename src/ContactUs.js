import React from 'react'
import ContactLink from './ContactLink'

const ContactUs = () =>
  <div className='card' style={{width: '20rem'}}>
    <div className='card-body'>
      <h5 className='card-title'>Contact us</h5>
      <hr/>
      <ul className='actions'>
        <li>
          <ContactLink iconName='envelope-o'>
            portal@ocelotconsulting.com
          </ContactLink>
        </li>
        <li>
          <ContactLink iconName='phone-square'>
            314.555.1212
          </ContactLink>
        </li>
        <li>
          <ContactLink iconName='user-circle-o'>
            Live Chat
          </ContactLink>
        </li>
      </ul>
    </div>
  </div>

export default ContactUs
