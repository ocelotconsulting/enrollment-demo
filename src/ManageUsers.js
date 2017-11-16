import React from 'react'

const Help = () =>
  <div className='manage-users'>
    <h2>Manage Users</h2>
    <hr/>
    {/* <h5><small>You may add a new user, or search for an existing user.</small></h5> */}
    <div className='row'>
      <div className='col-6'>
        <div className='card mb-3'>
          <div className='card-body'>
            <h5 className='card-title'>Enroll New User</h5>
            <hr/>
            <div>{`Add a new user who does not currently have a User ID`}</div>
          </div>
          <div class="card-footer bg-transparent"><button className='btn btn-link pl-0 pr-0'>Enroll</button></div>
        </div>
      </div>
      <div className='col-6'>
        <div className='card mb-3'>
          <div className='card-body'>
            <h5 className='card-title'>Find an Existing User</h5>
            <hr/>
            <div>{`Find an existing user.  Once found, you may manage the user's information, including organization memberships, contact information, and login information.`}</div>
          </div>
          <div class="card-footer bg-transparent"><button className='btn btn-link pl-0 pr-0'>Search</button></div>
        </div>
      </div>
    </div>
  </div>

export default Help
