import { createAction } from '../redux-actions'
import { lesson } from './api'
const LESSONS_INIT = 'LESSONS_INIT'

export default (state, action) => {
    switch (action.type) {
    case LESSONS_INIT:
        return state.setIn(['lessons'], action.payload)
    }
}

export const init = (courseId) => (dispatch, getState) => {
    lesson.list(courseId).then(res => {
        dispatch(createAction(LESSONS_INIT)(res.data))
    })
}
