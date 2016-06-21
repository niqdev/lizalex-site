import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from '../routes/index';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory} routes={routes}/>
      </Provider>
    );
  }
};
