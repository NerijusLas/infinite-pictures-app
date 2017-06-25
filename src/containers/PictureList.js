import { connect } from 'react-redux';
import { loadPictures } from '../actions';
import PictureListPure from '../components/PictureListPure';

const mapStateToProps = (state) => ({
  pictures: state.get('picturesReducer').get('pictures'),
  loading: state.get('picturesReducer').get('loading'),
  error: state.get('picturesReducer').get('error'),
  lastPage: state.get('picturesReducer').get('lastPage')
})

const mapDispatchToProps = (dispatch) => ({
  loadPictures: (page) => dispatch(loadPictures(page))
})

const PictureList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureListPure)

export default PictureList;
