import React from 'react';
import PropTypes from 'prop-types';

const PictureListPure = ({ pictures }) => (
  <div>
    {pictures.map(picture => (
      <div key={picture.id}>{picture.name}</div>
    ))}
  </div>
)

PictureListPure.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default PictureListPure;
