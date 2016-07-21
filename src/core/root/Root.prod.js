import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl-redux'
import { Router, useRouterHistory } from 'react-router'
import { createMemoryHistory } from 'history'
import routes from '../routes'

const appHistory = useRouterHistory(createMemoryHistory)()

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <IntlProvider>
        <Router history={appHistory} routes={routes} />
      </IntlProvider>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
