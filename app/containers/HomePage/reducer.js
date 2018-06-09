/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { 
  CHANGE_USERNAME,
  LOAD_NOTIFICATIONS,
  LOAD_NOTIFICATIONS_SUCCESS,
  LOAD_NOTIFICATIONS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
  notifications: null,
  error: false,
  loading: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return state.set('username', action.name.replace(/@/gi, ''));

    case LOAD_NOTIFICATIONS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('notifications', null);
    case LOAD_NOTIFICATIONS_SUCCESS:
      return state
        .set('notifications', action.notifications)
        .set('loading', false)
    case LOAD_NOTIFICATIONS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    
    default:
      return state;
  }
}

export default homeReducer;
