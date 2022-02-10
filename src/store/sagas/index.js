import { all } from "redux-saga/effects";
import asyncCall from "./asyncCall.sagas";
import takeActions from './takeSagaRequest.sagas'
import forkSaga from "./forkCall.sagas";
import flowSaga from './flow.sagas'
import raceSaga from './race.sagas'
import authSaga from './auth.sagas'
import onClickSaga from './onClickSideEffect.saga'

export function* rootSaga() {
    yield all([
        asyncCall(),
        takeActions(),
        forkSaga(),
        flowSaga(),
        raceSaga(),
        authSaga(),
        onClickSaga()
    ])
}