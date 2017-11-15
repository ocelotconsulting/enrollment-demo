import React from 'react'
import NewClaim from './NewClaim'
import ManageClaims from './ManageClaims'

const Claims = () =>
  <div className='claims'>
    <h2>Claims</h2>
    <hr/>
    <div className='row'>
      <div className='col-6'>
        <NewClaim/>
      </div>
      <div className='col-6'>
        <ManageClaims/>
      </div>
    </div>
  </div>

export default Claims
