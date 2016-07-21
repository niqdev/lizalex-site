import React, { Component } from 'react'
import classNames from 'classnames'
import { FormattedMessage } from 'react-intl'
import { get as getLocaleStorage, put as putLocalStorage } from '../../core/storage'

const COOKIE = 'cookie'

export default class CookieComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      accepted: getLocaleStorage(COOKIE)
    }
    this.acceptCookie = this.acceptCookie.bind(this)
  }

  acceptCookie() {
    putLocalStorage(COOKIE, true)
    this.setState({ accepted: true })
  }

  render() {
    const cookieClass = classNames('bg-primary', 'cookie',
      { 'hidden-xs-up': this.state.accepted })

    return (
      <div className={cookieClass}>
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={this.acceptCookie}>
          <span aria-hidden="true">&times;</span>
        </button>
        <FormattedMessage id="cookie" />
      </div>
    )
  }
}
