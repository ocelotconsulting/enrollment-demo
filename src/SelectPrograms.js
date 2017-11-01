import fromPairs from 'lodash/fromPairs'
import React, { PureComponent } from 'react'
import T from 'prop-types'
import FormCheck from './FormCheck'

const options = [
  {
    id: 'standardMedicaid',
    label: 'Standard Medicaid',
    initialValue: true
  },
  {
    id: 'careManagement',
    label: 'Care Management'
  },
  {
    id: 'chip',
    label: 'Children\'s Health Insurance Program'
  },
  {
    id: 'waiver',
    label: 'Waiver'
  }
]

export default class SelectPrograms extends PureComponent {
  constructor (...args) {
    super(...args)
    this.state = fromPairs(options.map(o => [o.id, Boolean(o.initialValue)]))
  }

  render () {
    return (
      <div className='card' style={{width: '20rem'}}>
        <div className='card-body'>
          <h5 className='card-title'>
            {'Enrollment'}
          </h5>
          <hr/>
          <div className='hint'>Select one or more programs:</div>
          <ul className='actions'>
            {
              options.map(o =>
                <li key={o.id}>
                  <FormCheck label={o.label} checked={this.state[o.id]}
                             onChange={() => this.setState({[o.id]: !this.state[o.id]})}/>
                </li>
              )
            }
          </ul>
          <button className='btn btn-primary' onClick={this.props.onEnroll}>Enroll</button>
        </div>
      </div>
    )
  }
}

SelectPrograms.displayName = 'SelectPrograms'

SelectPrograms.propTypes = {
  onEnroll: T.func.isRequired
}