import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

class PictureContentPure extends React.Component {
  constructor(props) {
      super(props);
      this.onFavouriteClick = this.onFavouriteClick.bind(this);
   }

  onFavouriteClick() {
    this.props.favouritePicture(this.props.picture.id);
  }

  render() {
    return (
      <div>
        <div style={styles.title}>{this.props.picture.title}</div>
        <div style={styles.lineSeparator}></div>
        <div style={styles.author}>{this.props.picture.author}</div>
        <button 
          style={styles.favouriteButton} 
          onClick={this.onFavouriteClick}>
          Favourite
        </button>
      </div>
    )
  }
}

PictureContentPure.propTypes = {
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
  lineSeparator: {
    height: '2px',
    backgroundColor: '#ffffff',
    margin: '5px 35% 5px 35%'
  }
};

export default Radium(PictureContentPure);
