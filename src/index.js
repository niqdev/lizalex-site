import React from 'react';
import ReactDOM from 'react-dom';

// import stylesheet
import './styles/main.scss';

import configureStore from './store/configureStore';
import Root from './containers/Root';

import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import it from 'react-intl/locale-data/it';
import messagesIt from './i18n/messages-it.json';

addLocaleData(en);
addLocaleData(it);

const initialState = {
  intl: messagesIt.messages
};

const store = configureStore(initialState);

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);
