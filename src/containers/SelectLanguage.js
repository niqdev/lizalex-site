import React, {Component} from 'react'
import {connect} from 'react-redux'
import {update as updateIntl} from 'react-intl-redux'
import _ from 'lodash'

import {SelectLanguage as SelectLanguageComponent} from '../components';

// TODO move i18 NOT common within the component itself and merge all files
import messagesIt from '../i18n/messages-it.json';
import messagesEn from '../i18n/messages-en.json';
const languages = [
  messagesIt,
  messagesEn
];

export default class SelectLanguage extends Component {

  getOptions() {
    return _.chain(languages)
      .map(option => {
        return {
          key: option.locale,
          value: option.label
        }
      })
      .value();
  }

  render() {
    return (
      <SelectLanguageComponent
        value={this.props.locale}
        onChange={this.props.onChangeIntl}
        options={this.getOptions()}/>
    );
  }
}


function mapStateToProps(state) {
  return {
    locale: state.intl.locale
  }
}

const getMessages = (locale) => {
  return _.find(languages, {'locale': locale}).messages;
};

function mapDispatchToProps(dispatch) {
  return {
    onChangeIntl: (value) => dispatch(updateIntl({
      locale: value,
      messages: getMessages(value)
    }))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectLanguage);
