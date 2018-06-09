/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username')
);

const makeSelectNotifications = () => createSelector(
  selectHome,
  (homeState) => homeState.get('notifications')
);

export {
  selectHome,
  makeSelectUsername,
  makeSelectNotifications,
};
