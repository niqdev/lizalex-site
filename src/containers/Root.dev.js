import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from '../routes/index';
import DevTools from './DevTools';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <Router history={browserHistory} routes={routes}/>
          <DevTools />
        </div>
      </Provider>
    );
  }
}
