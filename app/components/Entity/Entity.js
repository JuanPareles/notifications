import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Entity = ({
  name,
  image,
  url,
  // id,
  // original_id,
  // category,
}) => (
  <a className="hyperlink" href={url}>
    <img className="profile-image" src={image} alt="profile_image" />
    {` ${name} `}
  </a>
);

Entity.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  // id: PropTypes.number,
  // original_id: PropTypes.string,
  // category: PropTypes.string,
};

export default Entity;
