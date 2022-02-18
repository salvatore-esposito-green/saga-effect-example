import {all, call, fork, put, race} from "redux-saga/effects";
import { ActionTypes } from "../actions/types";
import * as Eff from "redux-saga/effects";
const takeEvery: any = Eff.takeEvery;

function* watchPreFlightError() {
    yield takeEvery(ActionTypes.REFLIGHT_ERROR, preflightError);
}

function* preflightError() {

    // @ts-ignore
    const error = yield all([
        call(isPinErrorCode),
        call(anonymusError),
        call(ageRaitingError)
    ])

    // generic error
    if( !error.some((element: any) => element === true) ) yield put({type: 'SET_ALERT' })
    yield put({type: 'REFLIGHT_ERROR_END', payload: error })
}

function* isPinErrorCode() {
    if( false ) {
        yield put({type: 'PIN_ERROR' })
        return true
    }
}

function* anonymusError() {
    if( false ) {
        yield put({type: 'ANONIMUS_ERROR' })
        return true
    }
}

function* ageRaitingError() {
    if( false ) {
        yield put({type: 'AGE_RATING_ERROR' })
        return true
    }
}


export default function* rootSaga() {
    yield all([
        fork(watchPreFlightError)
    ]);
}