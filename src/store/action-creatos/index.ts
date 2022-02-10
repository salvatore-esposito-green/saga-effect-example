import {
    FETCH_ASYNC_REQUEST,
    TAKE_EVERY_REQUEST,
    TAKE_LATEST_REQUEST,
    FORK_REQUEST,
    FLOW_LINEAR_REQUEST,
    FLOW_PARALLEL_REQUEST,
    RACE_REQUEST,
    END_RACE_REQUEST,
    LOGIN_REQUEST, LOGOUT, ACTIVE_BOX, DEACTIVE_BOX
} from "../actions";

/**
 * @name Action Creators
 *
 * */

export const asyncCallAction = () => {
    return {
        type: FETCH_ASYNC_REQUEST
    };
}

export const takeEveryAction = (time) => {
    return {
        type: TAKE_EVERY_REQUEST,
        time
    };
}

export const takeLatestAction = (time) => {
    return {
        type: TAKE_LATEST_REQUEST,
        time
    };
}

export const forkAction = (time) => {
    return {
        type: FORK_REQUEST,
        time
    };
}

export const flowLinearAction = () => {
    return {
        type: FLOW_LINEAR_REQUEST
    };
}

export const flowParallelAction = () => {
    return {
        type: FLOW_PARALLEL_REQUEST
    };
}

export const raceAction = () => {
    return {
        type: RACE_REQUEST
    };
}

export const endRaceAction = () => {
    return {
        type: END_RACE_REQUEST
    };
}

export const loginAction = (user, password) => {
    return {
        type: LOGIN_REQUEST,
        user, password
    };
}

export const logoutAction = () => {
    return {
        type: LOGOUT
    };
}

export const activeBoxAction = (index) => {
    return {
        type: ACTIVE_BOX,
        index
    };
}

export const deactiveBoxAction = (index) => {
    return {
        type: DEACTIVE_BOX,
        payload: index
    };
}