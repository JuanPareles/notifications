import {
  LOAD_NOTIFICATIONS,
  LOAD_NOTIFICATIONS_SUCCESS,
  LOAD_NOTIFICATIONS_ERROR,
} from '../constants';

import {
  loadNotifications,
  notificationsLoaded,
  notificationsLoadingError,
} from '../actions';

describe('App Actions', () => {
  describe('loadNotifications', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_NOTIFICATIONS,
      };

      expect(loadNotifications()).toEqual(expectedResult);
    });
  });

  describe('notificationsLoaded', () => {
    it('should return the correct type and the passed notifications', () => {
      const fixture = {
        notifications: [
          {
            entity: {},
            trigger: 'test',
            payload: [],
          },
        ]
      };
      const expectedResult = {
        type: LOAD_NOTIFICATIONS_SUCCESS,
        notifications: fixture,
      };

      expect(notificationsLoaded(fixture)).toEqual(expectedResult);
    });
  });

  describe('notificationsLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_NOTIFICATIONS_ERROR,
        error: fixture,
      };

      expect(notificationsLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
