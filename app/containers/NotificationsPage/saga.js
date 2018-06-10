/**
 * Gets the notifications from endpoint
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_NOTIFICATIONS } from './constants';
import { notificationsLoaded, notificationsLoadingError } from './actions';


/**
 * Notifications request/response handler
 */
export function* getNotifications() {
  const requestURL = 'http://www.mocky.io/v2/5b1746e03000006d00873370';

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    yield put(notificationsLoaded(data.notifications));
  } catch (err) {
    yield put(notificationsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* notificationsData() {
  // Watches for LOAD_NOTIFICATIONS actions and calls getNotifications when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_NOTIFICATIONS, getNotifications);
}
