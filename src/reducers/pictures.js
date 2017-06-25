import { Record } from 'immutable';

const initialState = Record({
  pictures: [],
  lastPage: 1,
  error: ""
});

function loadPicturesSuccess(state, pictures) {
  var statePictures = state.get('pictures').slice();
  var lastPage = state.get('lastPage') + 1;
  statePictures.push.apply(statePictures, pictures);
  return state
    .set('pictures', statePictures)
    .set('lastPage', lastPage);
}

function loadPictureFailed(state, message) {
  return state.set('error', message);
}

function favouritePicture(state, id) {
  var pictures = state.get('pictures').slice();
  pictures = pictures.map(pic => pic.id === id
    ? Object.assign({}, pic, {favourite: !pic.favourite})
    : pic
    );
  return state.set('pictures', pictures);
}

const pictures = (state = initialState(), action) => {
  switch (action.type) {
    case 'LOAD_PICTURES_SUCCEEDED':
      return loadPicturesSuccess(state, action.pictures);
    case 'LOAD_PICTURES_FAILED':
      return loadPictureFailed(state, action.message);
    case 'FAVOURITE_PICTURE':
      return favouritePicture(state, action.id);
    default:
      return state;
  }
}

export default pictures;
