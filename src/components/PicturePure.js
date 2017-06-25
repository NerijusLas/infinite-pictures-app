import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

class PicturePure extends React.Component {
  render() {
    return (
      <div key={this.props.picture.id} style={styles.imageContainer}>
        <div style={[styles.text, Radium.getState(this.state, this.props.picture.id, ':hover') ? styles.visible : styles.hidden]}>
          <div style={styles.title}>{this.props.picture.title}</div>
          <div style={styles.lineSeparator}></div>
          <div style={styles.author}>{this.props.picture.user.name}</div>
          <button style={styles.favouriteButton}>Favourite</button>
        </div>
        <img style={styles.image} src={this.props.picture.images.normal} alt="" />
      </div>
    )
  }
}

PicturePure.propTypes = {
  picture: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired
      }).isRequired,
      images: PropTypes.shape({
        normal: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
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
  title: {
    fontWeight: 700,
    marginTop: "30%"
  },
  author: {
    fontWeight: 500,
    fontStyle:  'italic'
  },
  favouriteButton: {
    outline: 'none',
    backgroundColor: 'transparent',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    cursor: 'pointer',
    overflow: 'hidden',
    borderRadius: '50px',
    color: '#ffffff',
    fontSize: '20px',
    padding: '10px 25px 10px 25px',
    marginTop: '30px'
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
  lineSeparator: {
    height: '2px',
    backgroundColor: '#ffffff',
    margin: '5px 35% 5px 35%'
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
