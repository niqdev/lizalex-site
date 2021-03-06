import React from 'react'
import { Link } from 'react-router'
import { FormattedMessage } from 'react-intl'
import IntlDropdown from '../intl-dropdown/IntlDropdownContainer'
import './navbar.scss'

export default function NavbarComponent() {
  return (
    <nav className="navbar navbar-static-top navbar-light bg-faded">
      <Link to="/" className="navbar-brand">
        <FormattedMessage id="navbar.brand" />
      </Link>
      <ul className="nav navbar-nav">
        <li className="nav-item pull-xs-right">
          <IntlDropdown />
        </li>
      </ul>
    </nav>
  )
}
