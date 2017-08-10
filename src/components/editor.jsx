import React from '../react'
import CodeMirror from '../codemirror/lib/codemirror'
import '../codemirror/mode/javascript/javascript'

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
        require([`../codemirror/mode/${mode}/${mode}`])
    }
    componentDidMount () {
        this.codeMirror = CodeMirror(this.refs.holder, this.props)
    }
    render () {
        return <div ref="holder"/>
    }
}
