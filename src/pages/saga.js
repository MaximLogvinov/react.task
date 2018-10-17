
// outsource dependencies
import { takeEvery, call, put } from 'redux-saga/effects';

// local dependencies
import history from '../history';
import { LOGIN_PAGE, SETTINGS_PAGE, PRELOADER } from '../actions/types';

function* userLogIn ( action ) {
    let { type, ...options } = action;
    yield put({type: PRELOADER, expectAnswer: true});
    try {
        let results = yield call(getData, options);
        yield put({type: LOGIN_PAGE.LOG_IN.SUCCESS, ...results});
    } catch ( error ) {
        yield put({type: LOGIN_PAGE.LOG_IN.ERROR, error});
    }
    yield put({type: PRELOADER, expectAnswer: false});
    yield put({type: LOGIN_PAGE.LOG_IN.FINISH});
    yield call(history.push, '/welcome');
}

function* userChangeSettings ( action ) {
    let { type, ...options } = action;
    yield put({type: PRELOADER, expectAnswer: true});
    try {
        let results = yield call(getData, options);
        yield put({type: SETTINGS_PAGE.SETTINGS.SUCCESS, ...results});
    } catch ( error ) {
        yield put({type: SETTINGS_PAGE.SETTINGS.ERROR, error});
    }
    yield put({type: PRELOADER, expectAnswer: false});
    yield put({type: SETTINGS_PAGE.SETTINGS.FINISH});
    yield call(history.push, '/welcome');
}

// Export root watcher for "page"
export default function* () {
    yield takeEvery([LOGIN_PAGE.LOG_IN.START], userLogIn);
    yield takeEvery([SETTINGS_PAGE.SETTINGS.START], userChangeSettings);
}

function getData ( options ) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(options);
        }, 2*1000);
    });
}
