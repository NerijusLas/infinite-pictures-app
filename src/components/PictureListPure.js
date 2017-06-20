import React from 'react';
import PropTypes from 'prop-types';

class PictureListPure extends React.Component {
  componentDidMount() {
    this.props.loadPictures();
  }

  render() {
    return (
      <div>
        {this.props.pictures.map(picture => (
          <div key={picture.id}>{picture.name}</div>
        ))}
      </div>
    )
  }
}

PictureListPure.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  loadPictures: PropTypes.func.isRequired
}

export default PictureListPure;
