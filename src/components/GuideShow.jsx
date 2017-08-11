import marked from '../marked'
import React from '../react'

export default props => <div className="guide-show" dangerouslySetInnerHTML={marked(props.guide || '')}/>
