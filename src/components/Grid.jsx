import React from '../react'

export default class Grid extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            vertical: !!props.vertical,
            columns: props.columns || [0.5, 0.5]
        }
    }
    componentWillReceiveProps (nextProps) {
        const { vertical } = nextProps
        if (vertical !== this.state.vertical) {
            this.setState({
                vertical
            })
        }
    }
    onMouseDown = (e, i) => {
        const { columns } = this.state
        this.client = {
            i,
            pos: columns.slice(i - 1, i + 1),
            x: e.clientX,
            y: e.clientY
        }
    }
    onMouseUp = () => {
        this.client = null
    }
    onMouseMove = (e) => {
        const t = this
        if (!t.client) {
            return
        }
        let { columns, vertical } = t.state
        const { i, pos: [p1, p2], x, y } = t.client
        const { clientX, clientY } = e
        const holder = t.refs.holder
        let off = 0
        if (vertical) {
            off = (clientY - y) / holder.offsetHeight
        } else {
            off = (clientX - x) / holder.offsetWidth
        }
        off = Math.min(off, p2)
        off = Math.max(off, -p1)
        columns.splice(i - 1, 2, p1 + off, p2 - off)
        t.setState({
            columns
        })
    }
    render () {
        const { vertical, columns } = this.state
        const { children } = this.props
        const axis = vertical ? 'vertical' : 'horizontal'
        let sum = 0
        return <div className="grid-holder" ref="holder"
            onMouseUp={this.onMouseUp}
            onMouseMove={this.onMouseMove}
        >
            {columns.map((w, i) => {
                let el = <div key={i + ''} className={`grid-ceil-${axis}`} style={{
                    [vertical ? 'height' : 'width']: 100 * w + '%',
                    [vertical ? 'top' : 'left']: 100 * sum + '%'
                }}>
                    {children[i]}
                    {i > 0 &&
                        <i className="grid-handle"
                            onMouseDown={e => this.onMouseDown(e, i)}
                        ></i>
                    }
                </div>
                sum += w
                return el
            })}
        </div>
    }
}
