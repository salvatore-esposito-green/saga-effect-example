import {
    takeEvery,
    call,
    put,
    all,
    fork
} from 'redux-saga/effects'
import { FETCH_ASYNC_REQUEST } from "../actions";
import { getFetchApis } from '../../services/get-fetch.api'

/**
 * @name watchAsyncFetch
 * @return generator worker
 * */
export function* watchAsyncFetch() {
    yield takeEvery(FETCH_ASYNC_REQUEST, asyncSaga);
}

/**
 * @name asyncSaga
 * @return effect
 * Saga is always asynchronous
 * */
function* asyncSaga() {
    try {
        const response = yield call(getFetchApis)
        yield put({type: 'ASYNC_FETCH_COMPLETE', payload: response })
    } catch (err) {
        yield put({type: 'ASYNC_FETCH_FAILURE'})
    }
}

export default function* rootSaga() {
    yield all([
        fork(watchAsyncFetch)
    ]);
}