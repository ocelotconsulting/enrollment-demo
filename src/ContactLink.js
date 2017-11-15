import React from 'react'
import T from 'prop-types'

const ContactLink = ({iconName, children}) =>
  <span>
    <a href='#'>
      <i className={`fa fa-${iconName} fa-fw`}/>
      {' '}
      {children}
    </a>
  </span>

ContactLink.displayName = 'ContactLink'

ContactLink.propTypes = {
  iconName: T.string.isRequired
}

export default ContactLink
