import React from 'react'
import T from 'prop-types'
import LinkButton from './LinkButton'
import classnames from 'classnames'

const Navbar = ({userName, newMessageCount, page, onLogIn, navigateTo}) =>
  <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    <a className='navbar-brand' href='#'>Provider Portal</a>
    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon'/>
    </button>

    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav mr-auto'>
        <li className={classnames('nav-item', {active: page === 'home'})}>
          <LinkButton className='nav-link'>Home</LinkButton>
        </li>
        <li className={classnames('nav-item', {active: page === 'providers' || page === 'enrollment'})}>
          <LinkButton className='nav-link' onClick={() => navigateTo('providers')}>Providers</LinkButton>
        </li>
        <li className={classnames('nav-item', {active: page === 'claims'})}>
          <LinkButton className='nav-link' onClick={() => navigateTo('claims')}>Claims</LinkButton>
        </li>
        <li className={classnames('nav-item', {active: page === 'help'})}>
          <LinkButton className='nav-link' onClick={() => navigateTo('help')}>Help</LinkButton>
        </li>
      </ul>
      <form className='form-inline my-2 my-lg-0'>
        <input className='form-control mr-sm-2 mr-2' type='search' placeholder='search' aria-label='Search'/>
        <LinkButton className='nav-link' onClick={userName ? undefined : onLogIn} style={{color: 'white'}}>
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
  page: T.string.isRequired,
  userName: T.string,
  newMessageCount: T.number,
  onLogIn: T.func.isRequired,
  navigateTo: T.func.isRequired
}

export default Navbar
