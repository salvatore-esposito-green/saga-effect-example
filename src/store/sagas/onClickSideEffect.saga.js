import {all, call, delay, fork, put, takeEvery} from "redux-saga/effects";
import {ACTIVE_BOX, ACTIVE_BOX_UPDATE} from "../actions";

/**
 * @name watchActiveBox
 * @return generator worker flow
 * */
export function* watchActiveBox() {
    yield takeEvery(ACTIVE_BOX, onClickActiveFlow);
}

export function* onClickActiveFlow({index}) {
    yield put({type: ACTIVE_BOX_UPDATE, payload: index })
    yield delay(500)
    yield put({type: ACTIVE_BOX_UPDATE, payload: index - 1 })
    yield delay(500)
    yield put({type: ACTIVE_BOX_UPDATE, payload: index - 2 })
}

export default function* rootSaga() {
    yield all([
        fork(watchActiveBox)
    ]);
}