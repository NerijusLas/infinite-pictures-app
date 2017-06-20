import { combineReducers } from 'redux-immutable';
import pictures from './pictures';

const picturesApp = combineReducers({
  picturesReducer: pictures
})

export default picturesApp;
