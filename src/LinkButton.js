import React from 'react'
import T from 'prop-types'

const preventDefaultAnd = doThis =>
  event => {
    event.preventDefault()
    if (doThis) {
      return doThis(event)
    }
  }


const LinkButton = ({className, onClick, children, style}) =>
  <a href='#' className={className} onClick={preventDefaultAnd(onClick)} style={style}>
    {children}
  </a>

LinkButton.displayName = 'LinkButton'

LinkButton.propTypes = {
  className: T.string,
  onClick: T.func
}

export default LinkButton
