import { combineReducers } from 'redux'
import myArrayReducer from "./reducer";

const rootReducers = combineReducers({
    array: myArrayReducer
})

export default rootReducers