import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import PictureContentPure from './PictureContentPure';

class PicturePure extends React.Component {
  render() {
    return (
      <div key={this.props.picture.id} style={styles.imageContainer}>
        <div style={[
          styles.text, 
          Radium.getState(this.state, this.props.picture.id, ':hover') || this.props.picture.favourite
            ? styles.visible 
            : styles.hidden]}>
          <PictureContentPure picture={this.props.picture} favouritePicture={this.props.favouritePicture} />
        </div>
        <img style={styles.image} src={this.props.picture.image} alt="" />
      </div>
    )
  }
}

PicturePure.propTypes = {
  picture: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      favourite: PropTypes.bool.isRequired
    }).isRequired,
  favouritePicture: PropTypes.func.isRequired
}

var styles = {
  text: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    textAlign: 'center',
    left: 0,
    color: '#ffffff',
    borderRadius: '5px',
    fontSize: '20px',
    background: '#000000', 
    transition: "all 300ms ease-in",
    zIndex: '99999',
  },
  image: {
    borderRadius: '5px',
    boxShadow: '2px 2px 0px 0px rgba(209,209,209,1)'
  },
  imageContainer: {
    position: 'relative',
    float: 'left',
    margin: '1em',

    ':hover': {}
  },
  hidden: {
    opacity: 0,
    background: 'rgba(0, 0, 0, 0)'
  },
  visible: {
    opacity: 1,
    background: 'rgba(0, 0, 0, 0.4)'
  }
};

export default Radium(PicturePure);
