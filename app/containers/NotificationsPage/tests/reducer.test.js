import { fromJS } from 'immutable';

import notificationsReducer from '../reducer';
import { loadNotifications } from '../actions';
import dummyData from './dummyData';

describe('notificationsReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS(dummyData);
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(notificationsReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadNotifications action correctly', () => {
    const fixture = dummyData;
    const expectedResult = state.set('notifications', dummyData);

    expect(notificationsReducer(state, loadNotifications(fixture))).toEqual(expectedResult);
  });
});
