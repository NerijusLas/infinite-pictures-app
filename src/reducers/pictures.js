import { Record } from 'immutable';

const initialState = Record({
  pictures: [],
  loading: false
});

const pictures = (state = initialState(), action) => {
  switch (action.type) {
    case 'TOGGGLE_LOADING':
      state.set('loading', action.loading);
      return state;
    default:
      return state;
  }
}

export default pictures;
