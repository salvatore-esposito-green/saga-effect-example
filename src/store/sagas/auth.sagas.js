import {all, fork, take, cancel, put, call} from "redux-saga/effects";
import {LOGIN_FAILED, LOGIN_REQUEST, LOGOUT, USER_LOGIN_SUCCESS} from "../actions";
import {authServiceApi} from "../../services/auth-service.api";
import {storeToken, resetToken} from "../../helpers/token.helper";


function* authorize(user, password) {
    try {
        const token = yield call(authServiceApi, user, password)
        yield put({type: USER_LOGIN_SUCCESS, token})
        yield call(storeToken, token)
    } catch(error) {
        yield put({type: LOGIN_FAILED, error})
    }
}

/**
 * @name loginFlow
 * This is a Non-blocking call
 * logout is pending and the login process does not finish
 * if you try to resubmit a login request it doesn't go ahead
 * */
function* loginFlow() {
    while (true) {
    const {user, password} = yield take(LOGIN_REQUEST)
    // fork return a Task object
    const task = yield fork(authorize, user, password)
    const action = yield take([LOGOUT, LOGIN_FAILED])
    if (action.type === LOGOUT)
        yield cancel(task)
    yield call(resetToken)
    yield put({type:'LOGIN_FLOW_END'})
}
}


export default function* rootSaga() {
    yield all([
        fork(loginFlow)
    ]);
}