import { createAction } from '../redux-actions'
import { alert } from '../util/Dialog'
import { code } from './api'
const CODES_INIT = 'CODES_INIT'
const CODES_STEP = 'CODES_STEP'
const CODES_SET_EDITOR = 'CODES_SET_EDITOR'

export default (state, action) => {
    const { payload } = action
    switch (action.type) {
    case CODES_INIT:
        const {
            lessonId,
            codes
        } = payload || {}
        return state.setIn(['lessonId'], lessonId).setIn(['codes'], codes)
    case CODES_STEP:
        return state.merge({step: payload})
    case CODES_SET_EDITOR:
        return state.setIn(['editor'], payload)
    }
}

export const list = (lessonId) => (dispatch, getState) => {
    code.list(lessonId).then(res => {
        dispatch(createAction(CODES_INIT)({
            codes: res.data,
            lessonId
        }))
    })
}

export const step = (codeId, order) => (dispatch, getState) => {
    const editor = getState().getIn(['editor'])
    if (editor) {
        editor.setValue('')
    }
    code.step(codeId, order).then(res => {
        dispatch(createAction(CODES_STEP)(res.data))
    })
}
export const end = () => (dispatch, getState) => {
    const state = getState()
    const code = state.getIn(['step', 'code'])
    const editor = state.getIn(['editor'])
    const v = editor.getValue()
    console.log(v, code)
    if (v !== code) {
        alert('Wrong code!')
    } else {
        alert('Congratulations!')
    }
}
export const setEditor = createAction(CODES_SET_EDITOR)
