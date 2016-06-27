import React, {Component} from 'react';
import {Provider as IntlProvider} from 'react-intl-redux'
import {Router, browserHistory} from 'react-router';
import routes from '../routes/index';
import DevTools from './DevTools';

export default class Root extends Component {
  render() {
    return (
      <IntlProvider store={this.props.store}>
        <div>
          <Router history={browserHistory} routes={routes}/>
          <DevTools />
        </div>
      </IntlProvider>
    );
  }
}
