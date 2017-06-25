import React from 'react';
import PropTypes from 'prop-types';
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
      <div>
        <div>{errorMessage}</div>
        {this.props.pictures.map(picture => (
          <PicturePure key={picture.id} picture={picture} favouritePicture={this.props.favouritePicture} />
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
      author: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      favourite: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  loadPictures: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  lastPage: PropTypes.number.isRequired,
  favouritePicture: PropTypes.func.isRequired
}

export default PictureListPure;
