import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App, Home } from '../modules'

const NotFound = () => <div>NOT FOUND</div>

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="*" component={NotFound} />
  </Route>
)
