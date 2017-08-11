import marked from '../marked'
import React from '../react'

export default props => <div className="guide-show" dangerouslySetInnerHTML={{
    __html: marked(props.guide || '')
}}/>
