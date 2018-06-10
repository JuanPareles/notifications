/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectNotifications = () => createSelector(
  selectHome,
  (homeState) => homeState.get('notifications')
);

export {
  selectHome,
  makeSelectNotifications,
};
