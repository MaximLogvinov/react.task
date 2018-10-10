import { fork } from 'redux-saga/effects'
// local dependencies
import page from '../pages/saga';

export function* helloSaga() {
    yield fork(page);
}
