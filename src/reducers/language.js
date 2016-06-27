import {CHANGE_LANGUAGE} from '../constants/ActionTypes';

export default function language(state = 'it', action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return action.value;
    default:
      return state;
  }
}
