import {ACTIVE_BOX_UPDATE, DEACTIVE_BOX} from "../actions";

const initialState = Array(9).fill(false)

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVE_BOX_UPDATE:
        case DEACTIVE_BOX:
            return state.map((item, index) => {
                if (index !== action.payload) {
                    return item
                }
                return !item
            })
        default:
            return [
                ...state
            ]
    }
}

export default reducer