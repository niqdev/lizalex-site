import React, {Component} from 'react';
import {connect} from 'react-redux';
import {update as updateIntl} from 'react-intl-redux'
import {changeLanguage} from '../actions/LanguageActions';

import {SelectLanguage} from '../components';

import messagesIt from '../i18n/messages-it.json';
import messagesEn from '../i18n/messages-en.json';
const languages = {
  it: messagesIt,
  en: messagesEn
};

export default class SelectLanguageContainer extends Component {

  testOnChange(value) {
    //this.props.changeLanguage(value);
    this.props.onChangeIntl(value);
  }

  render() {
    return (
      <SelectLanguage
        value={this.props.intl.locale}
        onChange={value => this.testOnChange(value)}
        options={[]}/>
    );
  }
}


function mapStateToProps(state) {
  return {
    intl: state.intl
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeIntl: (locale) => dispatch(updateIntl({ locale, messages: languages[locale].messages })),
    changeLanguage: (locale) => dispatch(changeLanguage(locale))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectLanguageContainer);
