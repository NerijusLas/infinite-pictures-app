import { takeLatest, put } from 'redux-saga/effects';

function* picturesSaga() {
  yield takeLatest("LOAD_PICTURES", loadPictures);
}

function* loadPictures() {
    
    const pictures = [
        {
            name: "Labas",
            id: 1
        },
        {
            name: "Labukas",
            id: 2
        }
    ];
    yield put({type: "LOAD_PICTURES_SUCCEEDED", pictures});
}

export default picturesSaga;