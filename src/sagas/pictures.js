import { takeLatest, put, call } from 'redux-saga/effects';
import dribbbleApi from '../api';

function* picturesSaga() {
  yield takeLatest("LOAD_PICTURES", loadPictures);
}

function* loadPictures() {

    
    try {
      const pictures = yield call(dribbbleApi.fetchShots);
      yield put({type: "LOAD_PICTURES_SUCCEEDED", pictures});
   } catch (e) {
      yield put({type: "LOAD_PICTURES_FAILED", message: e.message});
   }
}

export default picturesSaga;