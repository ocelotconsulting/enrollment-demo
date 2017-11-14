import React from 'react'
import T from 'prop-types'
import moment from 'moment'
import classnames from 'classnames'


const dateFormat = 'YYYY-MM-DD hh:mm:ss a'

const Message = ({receivedDate, title, messageText, unread}) =>
  <li className='message'>
    <div className={classnames('header', {unread})}>
      <span className='date'>
        {moment(receivedDate).format(dateFormat)}
      </span>
      <a href='#' className='title'>
        {title}
      </a>
    </div>
    <div className='body'>
      {messageText}
    </div>
    <hr/>
  </li>

Message.displayName = 'Message'

Message.propTypes = {
  receivedDate: T.number.isRequired,
  title: T.string.isRequired,
  messageText: T.string.isRequired,
  unread: T.bool
}

export default Message
