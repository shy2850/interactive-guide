import { Map } from '../immutable'
import ShellReducer from './shell'
import LessonReducer from './lesson'
import CodeReducer from './code'

let initState = new Map({
    lessons: []
})
export default (state = initState, action) => (
    CodeReducer(state, action) ||
    LessonReducer(state, action) ||
    ShellReducer(state, action) ||
    state
)
