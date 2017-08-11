import {createAction} from '../redux-actions'
const GUIDE_SHELL_INIT = 'GUIDE_SHELL_INIT'
const GUIDE_SHELL_NEXT = 'GUIDE_SHELL_NEXT'
const GUIDE_SHELL_ERROR = 'GUIDE_SHELL_ERROR'

const steps = [
    {
        guide: '接下来我们开始git的学习：  \n1.输入 `git status` 检测需要更新的文件状态  ',
        console: ''
    }, {
        test: 'git status',
        guide: '\n2. 输入 `git add .` 添加所有修改到缓冲区  ',
        console: `Changes not staged for commit:  
 Untracked files:  
  (use "git add <file>..." to include in what will be committed)
        README.md\n`
    }, {
        test: 'git add (\\.|-a)',
        guide: '\n3. 输入 `git commit -m "commit info"` 提交修改  ',
        console: 'add changes OK! \n'
    }, {
        test: 'git commit -m ["\'][^"\']+["\']',
        guide: '\n4.',
        console: 'Congratulations! \n'
    }
]

export default (state, action) => {
    switch (action.type) {
    case GUIDE_SHELL_INIT:
        return state.mergeDeep({steps: action.payload || steps})
    case GUIDE_SHELL_NEXT:
        return state.setIn(['error'], false).updateIn(['index'], index => index + 1)
    case GUIDE_SHELL_ERROR:
        return state.setIn(['error'], true)
    }
}

export const init = createAction(GUIDE_SHELL_INIT)
export const next = createAction(GUIDE_SHELL_NEXT)
export const error = createAction(GUIDE_SHELL_ERROR)
export const execCmd = cmd => (dispatch, getState) => {
    const state = getState()
    const index = state.getIn(['index'])
    const test = state.getIn(['steps', index + 1, 'test'])
    if (test && new RegExp(test).test(cmd)) {
        dispatch(next())
    } else {
        dispatch(error())
    }
}
