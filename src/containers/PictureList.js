import { connect } from 'react-redux';
import { loadPictures } from '../actions';
import PictureListPure from '../components/PictureListPure';

const mapStateToProps = (state) => ({
  pictures: state.get('picturesReducer').get('pictures'),
  loading: state.get('picturesReducer').get('loading'),
  error: state.get('picturesReducer').get('error')
})

const mapDispatchToProps = (dispatch) => ({
  loadPictures: () => dispatch(loadPictures())
})

const PictureList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureListPure)

export default PictureList;
