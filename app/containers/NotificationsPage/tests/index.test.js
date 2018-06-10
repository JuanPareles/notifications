/**
 * Test the NotificationsPage
 */

import React from 'react';
import { mount } from 'enzyme';

import NotificationsPage from '../NotificationsPage';
import { mapDispatchToProps } from '../index';
import { loadNotifications } from '../actions';
import dummyData from './dummyData';

describe('<NotificationsPage />', () => {
  it('should render fetch the notifications on mount if a notifications exists', () => {
    const submitSpy = jest.fn();
    mount(
      <NotificationsPage
        notifications={dummyData}
      />
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('loadNotifications', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.loadNotifications).toBeDefined();
      });

      it('should dispatch loadNotifications when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const notifications = dummyData;
        result.onChangeUsername({ target: { value: notifications } });
        expect(dispatch).toHaveBeenCalledWith(loadNotifications(notifications));
      });
    });
  });
});
