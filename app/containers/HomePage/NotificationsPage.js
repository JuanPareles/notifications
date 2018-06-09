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
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
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
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>Start your next react project in seconds</h2>
            <p>A minimal <i>React-Redux</i> boilerplate with all the best practices</p>
          </section>
          <section>
            <h2>Notifications</h2>
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
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  notifications: PropTypes.array,
  loadNotifications: PropTypes.func,
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

