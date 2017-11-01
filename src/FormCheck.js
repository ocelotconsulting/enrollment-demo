import React from 'react'
import T from 'prop-types'

const FormCheck = ({type, label, checked, onChange}) =>
  <div className='form-check mb-2 mr-2'>
    <label className='form-check-label'>
      <input className='form-check-input' type={type} checked={checked} onChange={onChange}/>
      {` ${label}`}
    </label>
  </div>

FormCheck.displayName = 'FormCheck'

FormCheck.propTypes = {
  type: T.string,
  label: T.string.isRequired,
  checked: T.bool.isRequired,
  onChange: T.func
}

FormCheck.defaultProps = {
  type: 'checkbox'
}

export default FormCheck
