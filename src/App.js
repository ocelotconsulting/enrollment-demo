import React, { PureComponent } from 'react'
import Navbar from './Navbar'
import SelectPrograms from './SelectPrograms'
import OtherActions from './OtherActions'
import EnrollmentForm from './EnrollmentForm'
import Inbox from './Inbox'

export default class App extends PureComponent {
  constructor (...args) {
    super(...args)
    this.state = {
      page: 'providers'
    }
  }

  render () {
    const onLogIn = () => this.setState({userName: 'Jane Provider', newMessageCount: 1, page: 'home'})

    const getContent = () => {
      if (this.state.page === 'providers') {
        return (
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
        )
      } else if (this.state.page === 'enrollment') {
        return <EnrollmentForm/>
      } else {
        return (
          <div>
            <h4>
              <i className='fa fa-inbox'/>
              {' Inbox (1)'}
            </h4>
            <hr/>
            <div className='row'>
              <div className='col-6'>
                <Inbox/>
              </div>
            </div>
          </div>
        )
      }
    }

    return (
      <div>
        <Navbar onLogIn={onLogIn} userName={this.state.userName} newMessageCount={this.state.newMessageCount}/>
        <div className='p-4'>
          {getContent()}
        </div>
      </div>
    )
  }
}
