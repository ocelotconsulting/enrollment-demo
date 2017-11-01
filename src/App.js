import React, { PureComponent } from 'react'
import Navbar from './Navbar'
import SelectPrograms from './SelectPrograms'
import OtherActions from './OtherActions'
import EnrollmentForm from './EnrollmentForm'

export default class App extends PureComponent {
  constructor (...args) {
    super(...args)
    this.state = {
      page: 'providers'
    }
  }

  render () {
    return (
      <div>
        <Navbar/>
        <div className='p-4'>
          {
            this.state.page === 'providers' ? (
              <div>
                <h2>Providers</h2>
                <hr/>
                <div className='row'>
                  <div className='col-4'>
                    <SelectPrograms onEnroll={() => this.setState({page: 'enrollment'})}/>
                  </div>
                  <div className='col-4'>
                    <OtherActions/>
                  </div>
                </div>
              </div>
            ) : (
              <EnrollmentForm/>
            )
          }
        </div>
      </div>
    )
  }
}
