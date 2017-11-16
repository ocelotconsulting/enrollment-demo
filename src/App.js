import React, { PureComponent } from 'react'
import Navbar from './Navbar'
import SelectPrograms from './SelectPrograms'
import OtherActions from './OtherActions'
import EnrollmentForm from './EnrollmentForm'
import Inbox from './Inbox'
import Help from './Help'
import Claims from './Claims'
import ManageUsers from './ManageUsers'
import SearchUsers from './SearchUsers'

const getParameterByName = (name, defaultValue = 'providers') => {
  const match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search)
  return match ? decodeURIComponent(match[1].replace(/\+/g, ' ')) : defaultValue
}

export default class App extends PureComponent {
  constructor (...args) {
    super(...args)
    this.state = {
      page: getParameterByName('page')
    }
  }

  render () {
    const onLogIn = () => this.setState({userName: 'Jane Provider', newMessageCount: 1, page: 'home'})

    const navigateTo = page => this.setState({page})

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
      } else if (this.state.page === 'claims') {
        return <Claims/>
      } else if (this.state.page === 'help') {
        return <Help/>
      } else if (this.state.page === 'manage-users') {
        return <ManageUsers/> 
      } else if (this.state.page === 'search-users') {
        return <SearchUsers/> 
      }else {
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
        <Navbar onLogIn={onLogIn} page={this.state.page} userName={this.state.userName}
                newMessageCount={this.state.newMessageCount} navigateTo={navigateTo}/>
        <div className='p-4'>
          {getContent()}
        </div>
      </div>
    )
  }
}
