import { createAction } from '../redux-actions'
import { alert } from '../util/Dialog'
import { code } from './api'
import { hashHistory } from 'react-router'

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
        // editor.setValue('')
    }
    code.step(codeId, order).then(res => {
        dispatch(createAction(CODES_STEP)(res.data))
    })
}
export const prev = () => (dispatch, getState) => {
    const state = getState()
    const codeId = state.getIn(['step', 'codeId'])
    const order = state.getIn(['step', 'order'])
    hashHistory.push(`/codes/${codeId}/${order - 1}`)
}
const sumBlank = str => str.replace(/[\s\t\n]+/g, ' ')
const compare = (a, b) => sumBlank(a) === sumBlank(b)
export const next = () => (dispatch, getState) => {
    const state = getState()
    const code = state.getIn(['step', 'code'])
    const codeId = state.getIn(['step', 'codeId'])
    const order = state.getIn(['step', 'order'])
    const completed = state.getIn(['step', 'completed'])
    const editor = state.getIn(['editor'])
    const v = editor.getValue()
    if (compare(v, code)) {
        if (order && !completed) {
            hashHistory.push(`/codes/${codeId}/${order + 1}`)
        } else {
            alert('Congratulations!', {title: '恭喜'})
        }
    } else {
        alert('Wrong code!')
    }
}
export const setEditor = createAction(CODES_SET_EDITOR)
