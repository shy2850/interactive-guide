import { connect } from '../react-redux'
import ShellEditor from '../components/ShellEditor'
import { execCmd } from '../reducer/shell'

const mapStateToProps = (state) => {
    const index = state.get('index')
    return {
        value: state.getIn(['steps', index, 'console']) || '',
        error: state.getIn(['error'])
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        execCmd: cmd => dispatch(execCmd(cmd))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShellEditor)
