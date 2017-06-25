import { takeLatest, put, call } from 'redux-saga/effects';
import dribbbleApi from '../api';

function* picturesSaga() {
    yield takeLatest("LOAD_PICTURES", loadPictures);
}

function* loadPictures(data) {
    try {
        const picturesPayload = yield call(dribbbleApi.fetchShots, data.page);

        const pictures = picturesPayload.map(function(pic) { 
            var reformated = {
                id: pic.id,
                title: pic.title,
                author: pic.user.name,
                image: pic.images.normal,
                favourite: false
            };
            return reformated;
        });

        yield put({type: "LOAD_PICTURES_SUCCEEDED", pictures});
    } catch (e) {
        yield put({type: "LOAD_PICTURES_FAILED", message: e.message});
    }
}

export default picturesSaga;
