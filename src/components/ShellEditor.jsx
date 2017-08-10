import React from '../react'
import CodeMirror from '../codemirror/lib/codemirror'
import '../codemirror/mode/shell/shell'

export default class Editor extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
        this.codeMirror = null
    }
    componentWillReceiveProps (nextProps) {
        const {
            mode
        } = nextProps
    }
    componentDidMount () {
        this.codeMirror = CodeMirror(this.refs.holder, Object.assign({
            mode: 'shell'
        }, this.props))
    }
    render () {
        return <div ref="holder"/>
    }
}
