import React from '../react'
import CodeMirror from '../codemirror/lib/codemirror'
import '../codemirror/mode/python/python'
import '../codemirror/keymap/sublime'
import {Row, Col, Button, ButtonGroup} from '../react-bootstrap'
import {Link} from '../react-router'

export default class Editor extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    componentDidMount () {
        const {
            mode = 'python',
            theme = 'monokai',
            keyMap = 'sublime',
            setEditor,
            step
        } = this.props
        this.editor = CodeMirror(this.refs.editor, {
            lineNumbers: true,
            mode,
            theme,
            keyMap
        })
        this.editor.setSize('100%', '100%')
        setEditor && setEditor(this.editor)
        step && step()
    }
    componentWillReceiveProps (nextProps) {
        const {step} = nextProps
        if (step) {
            step()
        }
    }
    render () {
        const {
            onPrev,
            onNext,
            codeId,
            order = 1,
            lessonId = false,
            completed,
            mode = 'python'
        } = this.props
        return <div style={{height: '100%'}}>
            <div ref="editor" className={`${mode}-editor`} ></div>
            <ButtonGroup className="fixed-right-top">
                {order > 1 && <Button onClick={onPrev}>上一步</Button>}
                <Button onClick={onNext}>{completed ? '完成' : '下一步'}</Button>
                {lessonId && <Button><Link to={`/lessons/${lessonId}/codes`}>返回</Link></Button>}
            </ButtonGroup>
        </div>
    }
}
