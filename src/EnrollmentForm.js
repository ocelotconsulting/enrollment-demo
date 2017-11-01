import React, { PureComponent } from 'react'
import FormCheck from './FormCheck'
import FormLabel from './FormLabel'

export default class EnrollmentForm extends PureComponent {
  constructor (...args) {
    super(...args)
  }

  render () {
    return (
      <div>
        <h2>Enrollment</h2>
        <hr/>
        <form>
          <div className='form-group'>
            <FormLabel>Select One</FormLabel>
            <ul className='actions'>
              <li>
                <FormCheck label='New Enrollment' type='radio' checked={true}/>
              </li>
              <li>
                <FormCheck label='Change of Ownership' type='radio' checked={false}/>
              </li>
            </ul>  
          </div>
          <div className='form-group'>
            <FormLabel required>Provider classification</FormLabel>
            <select className='form-control' value='1'>
              <option value='1'>Group</option>
            </select>
          </div>
          <div className='form-group'>
            <FormLabel required>Provider type</FormLabel>
            <select className='form-control' value='1'>
              <option value='1'>Clinic</option>
            </select>
          </div>
          <div className='form-group'>
            <FormLabel required>Tax ID (EIN or SSN)</FormLabel>
            <input className='form-control is-invalid' value='32-333'/>
            <div className='invalid-feedback'>
              should be ##-####### (EIN) or ###-##-#### (SSN)
            </div>
          </div>
          <h4>Primary Contact</h4>
          <hr/>
          <div className='form-group'>
            <FormLabel required>Last Name</FormLabel>
            <input className='form-control'/>
          </div>
          <div className='form-group'>
            <FormLabel required>First Name</FormLabel>
            <input className='form-control'/>
          </div>
          <div className='form-group'>
            <FormLabel>Email address</FormLabel>
            <input type='email' className='form-control' placeholder='Enter email'/>
            <small className='form-text text-muted'>
              <a href='#'>Click here</a> to see how we protect your privacy
            </small>
          </div>
          <button type='submit' className='btn btn-primary' disabled>Next</button>
        </form>
      </div>
    )
  }
}
