import React from 'react';
import PropTypes from 'prop-types';

class PictureListPure extends React.Component {
  componentDidMount() {
    this.props.loadPictures();
  }

  render() {
    let errorMessage = "";
    if (this.props.error) {
      errorMessage = this.props.error;
    }

    return (
      <div>
        <div>{errorMessage}</div>
        {this.props.pictures.map(picture => (
          <div key={picture.id}>{picture.title}</div>
        ))}
      </div>
    )
  }
}

PictureListPure.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  loadPictures: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
}

export default PictureListPure;
