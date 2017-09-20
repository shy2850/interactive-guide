import {createAction} from '../redux-actions'

const SET_TERMINAL = 'SET_TERMINAL'
let terminal
export default (state, action) => {
    switch (action.type) {
    case SET_TERMINAL:
        return state.setIn(['terminal'], action.payload)
    }
}

export const setTerminal = createAction(SET_TERMINAL)
