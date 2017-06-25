import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import PicturePure from './PicturePure';

class PictureListPure extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      this.props.loadPictures(this.props.lastPage);
    }
  }

  componentDidMount() {
    this.props.loadPictures(this.props.lastPage);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    let errorMessage = "";
    if (this.props.error) {
      errorMessage = this.props.error;
    }

    return (
      <div style={styles.mainContainer}>
        <div>{errorMessage}</div>
        {this.props.pictures.map(picture => (
          <PicturePure key={picture.id} picture={picture} />
        ))}
      </div>
    )
  }
}

PictureListPure.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired
      }).isRequired,
      images: PropTypes.shape({
        normal: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  loadPictures: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  lastPage: PropTypes.number.isRequired
}

var styles = {
  mainContainer: {
    backgroundColor: '#e6e6e6',
    width: '100%',
    height: '100%'
  }
};

export default Radium(PictureListPure);
