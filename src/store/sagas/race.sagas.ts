import {all, fork, takeEvery, race, call, take, delay, put} from "redux-saga/effects";
import {END_RACE_REQUEST, RACE_REQUEST} from "../actions";
/**
 * @name watchRaceRequest
 * @return generator worker
 * */
export function* watchRaceRequest() {
    yield takeEvery(RACE_REQUEST, raceSaga);
}

/**
 * @name raceSaga
 * @return there will only be one winner
 * similar Promise.race([...])
 *
 * When resolving a race,
 * the middleware automatically cancels all the losing Effects.
 * */
export function* raceSaga() {
    const [response, cancel] = yield race([
        call(racerFlowOne),
        take(END_RACE_REQUEST)
    ])
    yield put({ type: 'AND_THE_WINNER_IS', payload: {response, cancel}})

}

export function* racerFlowOne() {
    yield delay(500)
    yield put({ type: 'RUN_1'})
    yield delay(500)
    yield put({ type: 'RUN_2'})
    yield delay(500)
    yield put({ type: 'RUN_3'})
    yield delay(500)
    yield put({ type: 'RUN_4'})
    yield delay(500)
    yield put({ type: 'RUN_5'})
    return 'END_RACE'
}

export default function* rootSaga() {
    yield all([
        fork(watchRaceRequest)
    ]);
}