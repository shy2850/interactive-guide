import React from '../react'
import Grid from './Grid'
import GuideShow from '../containers/GuideShow'
import PythonEditor from '../containers/PythonEditor'
import ShellEditor from '../containers/ShellEditor'
import $ from 'jquery'

const { document } = window
export default class extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            vertical: document.body.clientWidth < 756
        }
    }
    resize = () => {
        const { width } = document.body
        const vertical = document.body.clientWidth < 756
        if (vertical !== this.state.vertical) {
            this.setState({vertical})
        }
    }
    componentDidMount () {
        $(window).on('resize', this.resize)
    }
    componentWillUnmount () {
        $(window).off('resize', this.resize)
    }
    render () {
        const {
            params: {codeId, order}
        } = this.props
        const {
            vertical
        } = this.state
        console.log(vertical)
        return <Grid columns={[0.36, 0.64]} vertical={vertical}>
            <GuideShow codeId={codeId} order={order}/>
            <Grid columns={[0.7, 0.3]} vertical>
                <PythonEditor codeId={codeId} order={order}/>
                <ShellEditor />
            </Grid>
        </Grid>
    }
}
