import { Record } from 'immutable';

const initialState = Record({
  pictures: [],
  loading: false,
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

const pictures = (state = initialState(), action) => {
  switch (action.type) {
    case 'TOGGGLE_LOADING':
      state.set('loading', action.loading);
      return state;
    case 'LOAD_PICTURES_SUCCEEDED':
      return loadPicturesSuccess(state, action.pictures);
    case 'LOAD_PICTURES_FAILED':
      return state.set('error', action.message);
    default:
      return state;
  }
}

export default pictures;
