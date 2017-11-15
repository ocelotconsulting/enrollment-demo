import React, { PureComponent } from 'react'

export default class Faq extends PureComponent {
  constructor (...args) {
    super(...args)
    this.state = {searchText: ''}
  }

  render () {
    return (
      <div className='card' style={{width: '30rem'}}>
        <div className='card-body'>
          <h5 className='card-title'>Frequently asked questions</h5>
          <hr/>
          <div className='search mt-2 mb-3'>
            <input placeholder='search FAQs' value={this.state.searchText}
                   onChange={({target: {value}}) => this.setState({searchText: value})}/>
          </div>
          <div className='mt-2 ml-2'>
            <strong>Popular FAQs</strong>
          </div>
          <ul className='actions'>
            <li>
              <a href='#'>What are the requirements for Medicaid providers?</a>
            </li>
            <li>
              <a href='#'>How do I cancel a provider enrollment request?</a>
            </li>
            <li>
              <a href='#'>How do I add a secondary contact?</a>
            </li>
            <li>
              <a href='#'>How do I reassign the primary contact?</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
