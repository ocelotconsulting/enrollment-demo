import React, { PureComponent } from 'react'
import Select from 'react-select'

export default class NewClaim extends PureComponent {
  constructor (...args) {
    super(...args)
    this.state = {template: ''}
  }

  render () {
    return (
      <div className='card' style={{width: '30rem'}}>
        <div className='card-body'>
          <h5 className='card-title'>Submit claim</h5>
          <hr/>
          <ul className='actions'>
            <li>
              <a href='#'>
                New professional claim ...
              </a>
            </li>
            <li>
              <a href='#'>
                New institutional claim ...
              </a>
            </li>
            <li>
              <a href='#'>
                New dental claim ...
              </a>
            </li>
            <li>
              <hr/>
              <div className='mb-4' style={{fontWeight: 'bold'}}>
                Create from template or existing claim:
              </div>
            </li>
            <li>
              <form className='form-inline mt-2 mb-2'>
                <div className='form-group'>
                  <Select options={[{value: '1', label: 'Generic Medicaid'}]} value='1' style={{minWidth: '200px'}}/>
                  <button className='btn btn-sm btn-outline-primary ml-2'>Go</button>
                </div>
              </form>
            </li>
            <li>
              <form className='form-inline mt-2 mb-2'>
                <div className='form-group'>
                  <Select options={[{value: '1', label: '1'}]} placeholder='search claims ...' style={{minWidth: '200px'}}/>
                  <button className='btn btn-sm btn-default ml-2' disabled>Go</button>
                </div>
              </form>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
