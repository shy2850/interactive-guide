import React from '../react'
import $ from '../jquery'
import terminal from '../jquery.terminal'

export default class Editor extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    init (dom) {
        const { execCmd } = this.props
        let editor = $(dom)
        editor.terminal(function (command) {
            execCmd(command, editor)
        }, {
            greetings: '\n ** Git-bash Study **\n',
            prompt: '> '
        })
    }
    render () {
        return <div className="shell-editor" ref={this.init.bind(this)}/>
    }
}
