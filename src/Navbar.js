import React from 'react'

const Navbar = () =>
  <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    <a className='navbar-brand' href='#'>Provider Portal</a>
    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon'/>
    </button>

    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <a className='nav-link' href='#'>Home</a>
        </li>
        <li className='nav-item active'>
          <a className='nav-link' href='#'>Providers</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>Contact Us</a>
        </li>
      </ul>
      <form className='form-inline my-2 my-lg-0'>
        <input className='form-control mr-sm-2 mr-2' type='search' placeholder='Search' aria-label='Search'/>
        <a className='nav-link' href='#' style={{color: 'white'}}>Log In</a>
      </form>
    </div>
  </nav>

export default Navbar
