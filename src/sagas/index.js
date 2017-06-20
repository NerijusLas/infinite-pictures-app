import { fork } from 'redux-saga/effects';
import picturesSaga from './pictures';

export default function* sagas() {
    yield [
        fork(picturesSaga)
    ];
}