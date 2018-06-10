/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_NOTIFICATIONS } from 'containers/App/constants';
import { notificationsLoaded, notificationsLoadingError } from '../actions';

import notificationsData, { getNotifications } from '../saga';
import dummyData from './dummyData';

/* eslint-disable redux-saga/yield-effects */
describe('getNotifications Saga', () => {
  let getNotificationsGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getNotificationsGenerator = getNotifications();

    const selectDescriptor = getNotificationsGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getNotificationsGenerator.next(dummyData).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the notificationsLoaded action if it requests the data successfully', () => {
    const response = dummyData;
    const putDescriptor = getNotificationsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(notificationsLoaded(response, dummyData)));
  });

  it('should call the notificationsLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getNotificationsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(notificationsLoadingError(response)));
  });
});

describe('notificationsDataSaga Saga', () => {
  const notificationsDataSaga = notificationsData();

  it('should start task to watch for LOAD_NOTIFICATIONS action', () => {
    const takeLatestDescriptor = notificationsDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_NOTIFICATIONS, getNotifications));
  });
});
