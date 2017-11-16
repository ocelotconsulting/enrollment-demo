import React from 'react'

const createFormGroup = (criteria, type) => (
  <div className='form-group'>
    <div className='input-group'>
      <div className='input-group-btn'>
        <button type='button' className='btn btn-secondary dropdown-toggle' style={{width: 125, textAlign: 'right'}}>
          {criteria}
        </button>
      </div>
      <div className='input-group-btn'>
        <button type='button' className='btn btn-outline-secondary dropdown-toggle' style={{width: 125, textAlign: 'right'}}>
          {type}
        </button>
      </div>
      <input type='text' className='form-control'/>
      <div className='input-group-btn'>
        <button type='button' className='btn btn-outline-danger'>
          Remove
        </button>
      </div>
    </div>
  </div>
)

const Help = () =>
  <div className='manage-users'>
    <h2>Search Users</h2>
    <hr/>
    <div className='row'>
      <div className='col'>
        <div className='card mb-3'>
          <div className='card-body'>
            <h5 className='card-title'>Search Criteria</h5>
            <hr/>
            <div className='hint'>{`Add search criteria to find the user you are looking for.`}</div>
            <form className='mt-3'>
              {createFormGroup('First Name', 'equals')}
              {createFormGroup('Last Name', 'contains')}
              {createFormGroup('Email', 'starts with')}
              {createFormGroup('Phone #', 'ends with')}
              <button className='btn btn-link pl-0 pr-0'>Add additional criteria</button>
            </form>
          </div>
          <div className='card-footer bg-transparent'><button className='btn btn-outline-primary'>Search</button></div>
        </div>
      </div>
    </div>
    <div className='row'>
      <div className='col'>
        <div className='card mb-3'>
          <div className='card-body'>
            <h5 className='card-title'>Search Results</h5>
            <table className='table table-striped'>
              <thead className='thead-dark'>
                <tr>
                  <th scope='col'>First Name</th>
                  <th scope='col'>Last Name</th>
                  <th scope='col'>Username</th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Jacobs</td>
                  <td>mjacobs9324</td>
                  <td><button className='btn btn-link pl-0 pr-o pull-right'>edit</button></td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Thornton</td>
                  <td>mthornton3624</td>
                  <td><button className='btn btn-link pl-0 pr-o pull-right'>edit</button></td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>O'Byrne</td>
                  <td>mobyrne2312</td>
                  <td><button className='btn btn-link pl-0 pr-o pull-right'>edit</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

export default Help
