/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Notification from 'components/Notification';
import './style.scss';

export default class NotificationsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load notifications
   */
  componentDidMount() {
    this.props.loadNotifications();
  }

  render() {
    const {
      notifications,
    } = this.props;

    return (
      <article>
        <Helmet>
          <title>Notifications Page</title>
          <meta name="description" content="A React.js application NotificationsPage" />
        </Helmet>
        <div className="notifications-page">
          <section>
            { (notifications || []).map((item) => <Notification key={item.entity.id} {...item} />) }
          </section>
        </div>
      </article>
    );
  }
}

NotificationsPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  notifications: PropTypes.array,
  loadNotifications: PropTypes.func,
};

