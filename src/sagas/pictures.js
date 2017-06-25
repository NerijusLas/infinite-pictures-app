import { takeLatest, put, call } from 'redux-saga/effects';
import dribbbleApi from '../api';

function* picturesSaga() {
    yield takeLatest("LOAD_PICTURES", loadPictures);
}

function* loadPictures(data) {
    try {
        const pictures = yield call(dribbbleApi.fetchShots, data.page);
        yield put({type: "LOAD_PICTURES_SUCCEEDED", pictures});
    } catch (e) {
        yield put({type: "LOAD_PICTURES_FAILED", message: e.message});
    }
}

export default picturesSaga;
