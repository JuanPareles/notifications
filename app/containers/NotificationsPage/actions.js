/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_NOTIFICATIONS,
  LOAD_NOTIFICATIONS_SUCCESS,
  LOAD_NOTIFICATIONS_ERROR,
} from './constants';

/**
 * Load the notifications, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_NOTIFICATIONS
 */
export function loadNotifications() {
  return {
    type: LOAD_NOTIFICATIONS,
  };
}

/**
 * Dispatched when the notifications are loaded by the request saga
 *
 * @param  {array} notifications The notifications data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_NOTIFICATIONS_SUCCESS passing the notifications
 */
export function notificationsLoaded(notifications) {
  return {
    type: LOAD_NOTIFICATIONS_SUCCESS,
    notifications,
  };
}

/**
 * Dispatched when loading the notifications fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_NOTIFICATIONS_ERROR passing the error
 */
export function notificationsLoadingError(error) {
  return {
    type: LOAD_NOTIFICATIONS_ERROR,
    error,
  };
}
