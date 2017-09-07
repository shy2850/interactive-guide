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
            init
        } = this.props
        this.editor = CodeMirror(this.refs.editor, {
            lineNumbers: true,
            mode,
            theme,
            keyMap
        })
        this.editor.setSize('100%', '100%')
        setEditor && setEditor(this.editor)
        init()
    }
    render () {
        const {
            onEnd,
            codeId,
            order = 1,
            lessonId = false,
            completed,
            mode = 'python'
        } = this.props
        return <div className={`${mode}-editor`} ref="editor">
            <ButtonGroup className="fixed-right-top">
                {order > 1 && <Button><Link to={`/codes/${codeId}/${order - 1}`}>上一步</Link></Button>}
                {completed
                    ? <Button onClick={onEnd}>完成</Button>
                    : <Button><Link to={`/codes/${codeId}/${order + 1}`}>下一步</Link></Button>
                }
                {lessonId && <Button><Link to={`/lessons/${lessonId}/codes`}>返回</Link></Button>}
            </ButtonGroup>
        </div>
    }
}
