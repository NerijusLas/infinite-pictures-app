import { connect } from 'react-redux';
import { loadPictures, favouritePicture } from '../actions';
import PictureListPure from '../components/PictureListPure';

const mapStateToProps = (state) => ({
  pictures: state.get('picturesReducer').get('pictures'),
  error: state.get('picturesReducer').get('error'),
  lastPage: state.get('picturesReducer').get('lastPage')
})

const mapDispatchToProps = (dispatch) => ({
  loadPictures: (page) => dispatch(loadPictures(page)),
  favouritePicture: (id) => dispatch(favouritePicture(id))
})

const PictureList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureListPure)

export default PictureList;
