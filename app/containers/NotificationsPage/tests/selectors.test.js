import { fromJS } from 'immutable';

import { makeSelectNotifications } from '../selectors';

describe('makeSelectNotifications', () => {
  const notificationsSelector = makeSelectNotifications();
  it('should select the notifications', () => {
    const notifications = [];
    const mockedState = fromJS({
      home: {
        notifications,
      },
    });
    expect(notificationsSelector(mockedState)).toEqual(notifications);
  });
});
