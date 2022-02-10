import {all, fork, takeEvery, put, takeLatest, delay} from "redux-saga/effects";
import {
    TAKE_EVERY_REQUEST,
    TAKE_LATEST_REQUEST
} from "../actions";


/**
 * @name watchTakeEveryRequest
 * @return generator worker
 * */
export function* watchTakeEveryRequest() {
    yield takeEvery(TAKE_EVERY_REQUEST, takeEverySaga);
}
/**
 * @name watchTakeLatestRequest
 * annulla automaticamente qualsiasi attività
 * della saga precedente avviata in precedenza
 * se è ancora in esecuzione.
 * */
export function* watchTakeLatestRequest() {
    yield takeLatest(TAKE_LATEST_REQUEST, takeLatestSaga);
}
/**
 * @name takeEverySaga
 * @return generator worker
 * */
export function* takeEverySaga(time) {
    yield put({type: 'TAKE_EVERY_SUCCESS', payload: time })
}
/**
 * @name takeLastSaga
 * @return generator worker
 * */
export function* takeLatestSaga(time) {
    yield delay(2000)
    yield put({type: 'TAKE_LATEST_SUCCESS', payload: time })
}

export default function* rootSaga() {
    yield all([
        fork(watchTakeEveryRequest),
        fork(watchTakeLatestRequest),
    ]);
}