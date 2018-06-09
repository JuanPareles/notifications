import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Widget = ({ image, title, url }) => (
  <a href={url}>
    <div className="widget-container">
      <div className="widget-image">
        <img src={image} alt={title} />
      </div>
      <div className="widget-body">
        <h3 className="title">{title}</h3>
      </div>
    </div>
  </a>
);

Widget.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

export default Widget;
