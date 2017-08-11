import React from '../react'
import CodeMirror from '../codemirror/lib/codemirror'
import '../codemirror/mode/shell/shell'

export default class Editor extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
        this.editor = null
    }
    componentWillReceiveProps (nextProps) {
        const {
            value,
            error
        } = nextProps
        const {
            editor,
            setState
        } = this
        if (error) {
            alert('wrong cmd!')
        } else {
            editor && editor.replaceSelection(value)
        }
    }
    componentDidMount () {
        const t = this
        const {
            value,
            execCmd
        } = t.props
        let editor = CodeMirror(t.refs.holder, {
            mode: 'shell',
            value
        })
        editor.on('paste', (editor, e) => {
            e.preventDefault()
        })
        editor.on('keydown', (editor, e) => {
            editor.replaceSelection('')
        })
        editor.on('keyup', (editor, e) => {
            switch (e.keyCode) {
            case 13:
                execCmd(editor.getLine(editor.lastLine() - 1))
                break
            }
        })
        t.editor = editor
    }
    render () {
        return <div ref="holder"/>
    }
}
