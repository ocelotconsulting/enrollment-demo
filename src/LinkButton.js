import React from 'react'
import T from 'prop-types'

const preventDefaultAnd = doThis =>
  event => {
    event.preventDefault()
    if (doThis) {
      return doThis(event)
    }
  }


const LinkButton = ({className, onClick, children}) =>
  <a href='#' className={className} onClick={preventDefaultAnd(onClick)} style={{color: 'white'}}>
    {children}
  </a>

LinkButton.displayName = 'LinkButton'

LinkButton.propTypes = {
  className: T.string,
  onClick: T.func
}

export default LinkButton
