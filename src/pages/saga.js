
// outsource dependencies
import { takeEvery, call, put } from 'redux-saga/effects';

// local dependencies
import { PAGE } from '../actions/types';

function* userLogIn ( action ) {
    console.log('userLogIn-start');
    let { type, ...options } = action;
    yield put({type: PAGE.PRELOADER, expectAnswer: true});
    try {
        let results = yield call(getData, options);
        yield put({type: PAGE.LOG_IN.SUCCESS, ...results});
    } catch ( error ) {
        yield put({type: PAGE.LOG_IN.ERROR, error});
    }
    yield put({type: PAGE.PRELOADER, expectAnswer: false});
    yield put({type: PAGE.LOG_IN.FINISH});
}


// Export root watcher for "page"
export default function* () {
    yield takeEvery([PAGE.LOG_IN.START], userLogIn);
}

function getData ( options ) {
    console.log(options);
    return new Promise((resolve, reject) => {
        // let result = findUser( email, password);
        setTimeout(()=> resolve({}), 2*1000);
    });
}

// function findUser( email, password) {
//
// }