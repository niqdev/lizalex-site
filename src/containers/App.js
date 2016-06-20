/*
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as CounterActions from '../actions/CounterActions';
import Counter from '../components/Counter';
import Footer from '../components/Footer';

export default class App extends Component {
  render() {
    const {counter, actions} = this.props;
    return (
      <div className="main-app-container">
        <div className="main-app-nav">Simple Redux Boilerplate</div>
        <Counter counter={counter} actions={actions}/>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
*/

import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

export default class App extends Component {
  render() {
    const ACTIVE = {color: 'red'};
    return (
      <div>
        <h1>APP</h1>
        <ul>
          <li><Link to="/" activeStyle={ACTIVE}>/</Link></li>
          <li><IndexLink to="/" activeStyle={ACTIVE}>IndexLink</IndexLink></li>
          <li><Link to="/gallery" activeStyle={ACTIVE}>Gallery</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
