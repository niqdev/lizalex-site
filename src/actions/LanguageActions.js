import {CHANGE_LANGUAGE} from '../constants/ActionTypes';

export function changeLanguage(locale) {
  return {
    type: CHANGE_LANGUAGE,
    value: locale
  };
}
