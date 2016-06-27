import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link, IndexLink} from 'react-router';
import {FormattedMessage} from 'react-intl';

import * as CounterActions from '../actions/CounterActions';
import Counter from '../components/Counter';
import Footer from '../components/Footer';

export default class App extends Component {
  render() {
    const ACTIVE = {color: 'red'};
    const {counter, actions} = this.props;
    return (
      <div className="main-app-container">
        <ul>
          <li><Link to="/" activeStyle={ACTIVE}>/</Link></li>
          <li><IndexLink to="/" activeStyle={ACTIVE}>IndexLink</IndexLink></li>
          <li><Link to="/gallery" activeStyle={ACTIVE}>Gallery</Link></li>
        </ul>
        <div className="main-app-nav">Simple Redux Boilerplate</div>
        <Counter counter={counter} actions={actions}/>
        <FormattedMessage id="home.myId" defaultMessage="myDefaultMessage"/>
        {this.props.children}
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
