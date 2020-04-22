import { INCREMENT } from '../actionTypes/types'

const initialState = {
    conter: 0
}

export function defaultReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT: {
            return {
                counter: ++state.counter
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}