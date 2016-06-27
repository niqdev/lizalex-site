import React from 'react';
import ReactDOM from 'react-dom';

// import stylesheet
import './styles/main.scss';

import configureStore from './store/configureStore';
import Root from './containers/Root';

import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import it from 'react-intl/locale-data/it';

addLocaleData(en);
addLocaleData(it);

// TODO load json
// "json-loader": "^0.5.4"
const initialState = {
  intl: {
    defaultLocale: 'en',
    locale: 'it',
    messages: {
      'home.myId': 'myDescriptionIta'
    }
  }
};

const store = configureStore(initialState);

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);
