import React from 'react'
import T from 'prop-types'
import LinkButton from './LinkButton'
import classnames from 'classnames'

const Navbar = ({userName, newMessageCount, onLogIn}) =>
  <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    <a className='navbar-brand' href='#'>Provider Portal</a>
    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon'/>
    </button>

    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav mr-auto'>
        <li className={classnames('nav-item', {active: Boolean(userName)})}>
          <a className='nav-link' href='#'>Home</a>
        </li>
        <li className={classnames('nav-item', {active: !userName})}>
          <a className='nav-link' href='#'>Providers</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>Contact Us</a>
        </li>
      </ul>
      <form className='form-inline my-2 my-lg-0'>
        <input className='form-control mr-sm-2 mr-2' type='search' placeholder='Search' aria-label='Search'/>
        <LinkButton className='nav-link' onClick={userName ? undefined : onLogIn}>
          {`${userName || 'Log In'} `}
          {
            newMessageCount > 0 ? (
              <span className='badge badge-danger'>{newMessageCount}</span>
            ) : undefined
          }
        </LinkButton>
      </form>
    </div>
  </nav>

Navbar.displayName = 'Navbar'

Navbar.propTypes = {
  userName: T.string,
  newMessageCount: T.number,
  onLogIn: T.func.isRequired
}

export default Navbar
