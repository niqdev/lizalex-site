/*
 * --> react-router configs
 * https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md#using-custom-histories
 * http://jaketrent.com/post/pushstate-webpack-dev-server
 * https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md
 * https://github.com/reactjs/react-router-tutorial
 * https://medium.com/@dabit3/beginner-s-guide-to-react-router-53094349669
 */

import React, {Component} from 'react';
import {Provider as IntlProvider} from 'react-intl-redux'

// browserHistory needs a server
import {Router, useRouterHistory} from 'react-router'
import {createHashHistory} from 'history'
const appHistory = useRouterHistory(createHashHistory)({queryKey: false});
import routes from '../routes/index';

export default class Root extends Component {
  render() {
    return (
      <IntlProvider store={this.props.store}>
        <Router history={appHistory} routes={routes}/>
      </IntlProvider>
    );
  }
};
