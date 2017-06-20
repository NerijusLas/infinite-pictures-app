import { combineReducers } from 'redux-immutable';
import pictures from './pictures';

const reducers = combineReducers({
  picturesReducer: pictures
})

export default reducers;
