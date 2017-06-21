import { Record } from 'immutable';

const initialState = Record({
  pictures: [],
  loading: false,
  error: ""
});

const pictures = (state = initialState(), action) => {
  switch (action.type) {
    case 'TOGGGLE_LOADING':
      state.set('loading', action.loading);
      return state;
    case 'LOAD_PICTURES_SUCCEEDED':
      return state.set('pictures', action.pictures);
    case 'LOAD_PICTURES_FAILED':
      return state.set('error', action.message);
    default:
      return state;
  }
}

export default pictures;
