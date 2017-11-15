import React from 'react'

const ManageClaims = () =>
  <div className='card' style={{width: '20rem'}}>
    <div className='card-body'>
      <h5 className='card-title'>Your claims</h5>
      <hr/>
      <ul className='actions'>
        <li>
          <a href='#'>View and modify your outstanding claims</a>
        </li>
        <li>
          <a href='#'>View claims history</a>
        </li>
      </ul>
    </div>
  </div>

export default ManageClaims
