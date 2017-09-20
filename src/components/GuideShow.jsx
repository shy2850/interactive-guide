import marked from '../marked'
import React from '../react'

export default class extends React.Component {
    componentDidMount () {
        const { init } = this.props
        init && init()
    }
    render () {
        const { guide } = this.props
        return <div className="guide-show" dangerouslySetInnerHTML={{
            __html: marked(guide || '')
        }}/>
    }
}
