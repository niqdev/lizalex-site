import React, { PropTypes } from 'react'
import Navbar from '../navbar/NavbarComponent'
import Cookie from '../navbar/CookieComponent'
import './app.scss'

export default function App({ children }) {
  return (
    <div>
      <Cookie />
      <Navbar />
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.object.isRequired
}
