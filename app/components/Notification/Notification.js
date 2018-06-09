import React from 'react';
import PropTypes from 'prop-types';
import Entity from '../Entity';
import Widget from '../Widget';
import './style.scss';

const Notification = ({ trigger, entity, payload }) => {
  let display = '';
  switch (trigger) {
    case 'new_folder': {
      display = (
        <div className="notification-wrapper">
          <Entity {...entity} />
          {' has created a folder: '}
          <a className="hyperlink" href={payload[0].url}>{ `"${payload[0].title}"`}</a>
        </div>
      );
      break;
    }
    case 'new_photo': {
      display = (
        <div className="notification-wrapper">
          {'We have new photos from '}
          <Entity {...entity} />{': '}
          <div className="thumbs-container">
            {payload.slice(0, 3).map((item) => <img className="thumb" key={item.title} src={item.image} alt={item.title} />)}
          </div>
        </div>
      );
      break;
    }
    case 'new_article':
      display = (
        <div className="notification-wrapper">
          <Entity {...entity} />
          {' has published a new article:'}
          <Widget {...payload[0]} />
        </div>
      );
      break;


    default:
      display = <div className="notification-wrapper">{ 'There\'s notifications yet' }</div>;
      break;
  }
  return display;
};

Notification.propTypes = {
  trigger: PropTypes.string.isRequired,
  entity: PropTypes.object,
  payload: PropTypes.array,
};

export default Notification;
