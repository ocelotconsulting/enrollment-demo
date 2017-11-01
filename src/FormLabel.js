import React from 'react'
import T from 'prop-types'

const FormLabel = ({required, children}) =>
  <label>
    {children}
    {' '}
    {
      required ? (
        <span className='required'>*</span>
      ) : undefined
    }
  </label>

FormLabel.displayName = 'FormLabel'

FormLabel.propTypes = {
  required: T.bool
}

export default FormLabel
