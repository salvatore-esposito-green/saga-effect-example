import {all, fork, takeEvery, put, delay, call} from "redux-saga/effects";
import { FORK_REQUEST } from "../actions";

/**
 * @name watchForkRequest
 * @return generator worker
 * */
export function* watchForkRequest() {
    yield takeEvery(FORK_REQUEST, forkSaga);
}
/**
 * @name forkSaga
 * @return effect non-blocking call fc
 * */
export function* forkSaga() {
    yield call(exampleCallNoForking)
    yield fork(exampleCallForking)
    yield put({ type: 'FORK_SAGA_SUCCESS '})
}

export function* exampleCallNoForking() {
    yield delay(5000)
    yield put({ type: 'NO_FORKING_SAGA_REQUEST'})

}
export function* exampleCallForking() {
    yield delay(5000)
    yield put({ type: 'FORKING_SAGA_REQUEST'})
}

export default function* rootSaga() {
    yield all([
        fork(watchForkRequest)
    ]);
}