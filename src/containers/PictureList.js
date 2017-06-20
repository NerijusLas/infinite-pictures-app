import { connect } from 'react-redux';
//import { loadPictures } from '../actions';
import PictureListPure from '../components/PictureListPure';

const mapStateToProps = (state) => ({
  pictures: state.get('picturesReducer').get('pictures')
})

const mapDispatchToProps = {
}

const PictureList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureListPure)

export default PictureList;
