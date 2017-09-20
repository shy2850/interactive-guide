import React from '../react'
import $ from '../jquery'
import terminal from '../jquery.terminal'

export default class Editor extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    componentDidMount () {
        const { setTerminal } = this.props
        let editor = $(this.refs.holder)
        editor.terminal(function (cmd) {
            switch (cmd) {
            case 'clear': break
            default: return '使用 `clear` 命令 清除控制台'
            }
        }, {
            greetings: '',
            enabled: false,
            prompt: ' '
        })
        setTerminal && setTerminal(editor)
    }
    render () {
        return <div className="shell-editor" ref="holder"/>
    }
}
