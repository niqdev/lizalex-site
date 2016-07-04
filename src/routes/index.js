import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../containers/App';
import {FormattedDate} from 'react-intl';

const Index = () => <div>INDEX</div>
const Gallery = () => <div>GALLERY - <FormattedDate value={Date.now()}/></div>
const NotFound = () => <div>NOT FOUND</div>

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index}/>
    <Route path="/gallery" component={Gallery}/>
    <Route path="*" component={NotFound}/>
  </Route>
)
