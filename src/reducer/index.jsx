import { Map } from '../immutable'
import ShellReducer from './shell'

let initState = new Map({
    index: 0,
    error: false,
    steps: []
})
export default (state = initState, action) => (
    ShellReducer(state, action) ||
    state
)
