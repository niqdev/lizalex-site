import {combineReducers} from 'redux';
import {intlReducer} from 'react-intl-redux';

import counter from './counter';
import language from './language';

const rootReducer = combineReducers({
  intl: intlReducer,
  counter,
  language
});

export default rootReducer;
