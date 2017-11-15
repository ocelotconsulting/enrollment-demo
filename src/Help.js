import React from 'react'
import Faq from './Faq'
import ContactUs from './ContactUs'

const Help = () =>
  <div className='help'>
    <h2>Help</h2>
    <hr/>
    <div className='row'>
      <div className='col-6'>
        <Faq/>
      </div>
      <div className='col-6'>
        <ContactUs/>
      </div>
    </div>
  </div>

export default Help
