import {all, delay, fork, put, takeEvery} from "redux-saga/effects";
import {FLOW_LINEAR_REQUEST, FLOW_PARALLEL_REQUEST} from "../actions";

/**
 * @name watchFlowLinearRequest
 * @return generator worker
 * */
export function* watchFlowLinearRequest() {
    yield takeEvery(FLOW_LINEAR_REQUEST, flowLinearSaga);
}
/**
 * @name watchFlowParallelRequest
 * @return generator worker
 * */
export function* watchFlowParallelRequest() {
    yield takeEvery(FLOW_PARALLEL_REQUEST, flowParallelSaga);
}
/**
 * @name flowLinearSaga
 * @return each yield task reproduces a linear flow
 * */
export function* flowLinearSaga() {
    yield delay(500)
    yield put({ type: 'STEP_1'})
    yield delay(500)
    yield put({ type: 'STEP_2'})
    yield delay(500)
    yield put({ type: 'STEP_3'})
    yield delay(500)
    yield put({ type: 'STEP_4'})
    yield delay(500)
    yield put({ type: 'STEP_5'})
}
/**
 * @name flowParallelSaga
 * @return parallel flow
 * */
export function* flowParallelSaga() {
    yield all([
        flowA(),
        flowB()
    ])
}

export function* flowA() {
    yield delay(500)
    yield put({ type: 'FLOW_A_1'})
    yield delay(500)
    yield put({ type: 'FLOW_A_2'})
    yield delay(500)
    yield put({ type: 'FLOW_A_3'})
    yield delay(500)
    yield put({ type: 'FLOW_A_4'})
    yield delay(500)
    yield put({ type: 'FLOW_A_5'})
}
export function* flowB() {
    yield delay(500)
    yield put({ type: 'FLOW_B_1'})
    yield delay(500)
    yield put({ type: 'FLOW_B_2'})
    yield delay(500)
    yield put({ type: 'FLOW_B_3'})
    yield delay(500)
    yield put({ type: 'FLOW_B_4'})
    yield delay(500)
    yield put({ type: 'FLOW_B_5'})
}

export default function* rootSaga() {
    yield all([
        fork(watchFlowLinearRequest),
        fork(watchFlowParallelRequest)
    ]);
}