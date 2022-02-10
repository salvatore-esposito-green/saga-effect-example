import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import {rootSaga} from './sagas'

const sagaMiddelware = createSagaMiddleware();
var middlewares = [ sagaMiddelware ];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middlewares)
));

sagaMiddelware.run(rootSaga)
