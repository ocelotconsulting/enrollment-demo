import React from 'react'
import T from 'prop-types'
import moment from 'moment'
import Message from './Message'

const now = moment()

const messages = [
  {
    receivedDate: now.subtract(2, 'days').subtract(972, 'seconds').valueOf(),
    title: 'Your enrollment is complete',
    messageText: 'Your enrollment request has been processed and approved.  To make changes to your profile, use the following link (you will need to log in)',
    unread: true
  },
  {
    receivedDate: now.subtract(4, 'days').add(372, 'seconds').valueOf(),
    title: 'Action required to complete enrollment',
    messageText: 'Your enrollment request has been validated and the following required documents are needed before we can process and approve your enrollment'
  },
  {
    receivedDate: now.subtract(4, 'days').valueOf(),
    title: 'Record submission was rejected - duplicate records were found',
    messageText: 'We found duplicates matching the records you submitted - please check the following for errors:'
  },
  {
    receivedDate: now.subtract(4, 'days').subtract(1234, 'seconds').valueOf(),
    title: 'Your enrollment request was received',
    messageText: 'We received your enrollment request and are currently reviewing it for completeness.  The review process typically takes one to three business'
  }
]

const Inbox = () =>
  <div className='card inbox' style={{width: '50rem'}}>
    <div className='card-body'>
      <ul className='actions'>
        {
          messages.map((props, i) =>
            <Message key={i} {...props}/>
          )
        }
      </ul>
    </div>
  </div>


Inbox.displayName = 'Inbox'

Inbox.propTypes = {
  className: T.string,
  onClick: T.func
}

export default Inbox
